import { z } from 'zod';
import { Media } from '../cast-types';
import { Result } from '../utils';
const MediaStatusResponse$ = z.object({ type: z.literal('MEDIA_STATUS'), status: z.array(Media.MediaStatus$) });
export const createMediaController = ({ client, sourceId = 'sender-0', destinationId = 'receiver-0', }) => {
    let mediaSessionId = 0;
    const channel = client.createChannel(sourceId, destinationId, 'urn:x-cast:com.google.cast.media', (data, isBroadcast) => {
        if (data.type === 'MEDIA_STATUS' && isBroadcast) {
            if (Array.isArray(data.status) && data.status.length > 0) {
                mediaSessionId = data.status[0].mediaSessionId;
            }
        }
    });
    return {
        load: (data) => {
            const Response$ = z.union([
                z.object({ type: z.literal('LOAD_CANCELLED') }),
                z.object({ type: z.literal('LOAD_FAILED') }),
                MediaStatusResponse$,
            ]);
            return channel
                .sendWithResponse({ data: { ...data, type: 'LOAD' }, type: Response$ })
                .then(Result.flatMap(e => (e.type === 'MEDIA_STATUS' ? Result.Ok(e.status[0]) : Result.Err(new Error(e.type)))));
        },
        queueLoad: (data) => {
            const Response$ = z.union([
                z.object({ type: z.literal('LOAD_CANCELLED') }),
                z.object({ type: z.literal('LOAD_FAILED') }),
                MediaStatusResponse$,
            ]);
            return channel
                .sendWithResponse({ data: { ...data, type: 'QUEUE_LOAD' }, type: Response$ })
                .then(Result.flatMap(e => e.type === 'MEDIA_STATUS' ? Result.Ok(e.status[0]) : Result.Err(new Error(e.type))));
        },
        getStatus: () => channel
            .sendWithResponse({ data: { type: 'GET_STATUS' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        play: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'PLAY' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        pause: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'PAUSE' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        stop: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'STOP' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        seek: (data) => channel
            .sendWithResponse({ data: { ...data, mediaSessionId, type: 'SEEK' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        queueInsert: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_INSERT' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        queueRemove: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_REMOVE' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        queueReorder: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_REORDER' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        queueUpdate: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_UPDATE' }, type: MediaStatusResponse$ })
            .then(Result.map(e => e.status[0])),
        dispose: () => channel.close(),
    };
};
//# sourceMappingURL=media.js.map