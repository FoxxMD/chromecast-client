"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaController = void 0;
const zod_1 = require("zod");
const cast_types_1 = require("../cast-types");
const utils_1 = require("../utils");
const MediaStatusResponse$ = zod_1.z.object({ type: zod_1.z.literal('MEDIA_STATUS'), status: zod_1.z.array(cast_types_1.Media.MediaStatus$) });
const createMediaController = ({ client, sourceId = 'sender-0', destinationId = 'receiver-0', }) => {
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
            const Response$ = zod_1.z.union([
                zod_1.z.object({ type: zod_1.z.literal('LOAD_CANCELLED') }),
                zod_1.z.object({ type: zod_1.z.literal('LOAD_FAILED') }),
                MediaStatusResponse$,
            ]);
            return channel
                .sendWithResponse({ data: { ...data, type: 'LOAD' }, type: Response$ })
                .then(utils_1.Result.flatMap(e => (e.type === 'MEDIA_STATUS' ? utils_1.Result.Ok(e.status[0]) : utils_1.Result.Err(new Error(e.type)))));
        },
        queueLoad: (data) => {
            const Response$ = zod_1.z.union([
                zod_1.z.object({ type: zod_1.z.literal('LOAD_CANCELLED') }),
                zod_1.z.object({ type: zod_1.z.literal('LOAD_FAILED') }),
                MediaStatusResponse$,
            ]);
            return channel
                .sendWithResponse({ data: { ...data, type: 'QUEUE_LOAD' }, type: Response$ })
                .then(utils_1.Result.flatMap(e => e.type === 'MEDIA_STATUS' ? utils_1.Result.Ok(e.status[0]) : utils_1.Result.Err(new Error(e.type))));
        },
        getStatus: () => channel
            .sendWithResponse({ data: { type: 'GET_STATUS' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        play: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'PLAY' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        pause: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'PAUSE' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        stop: () => channel
            .sendWithResponse({ data: { mediaSessionId, type: 'STOP' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        seek: (data) => channel
            .sendWithResponse({ data: { ...data, mediaSessionId, type: 'SEEK' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        queueInsert: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_INSERT' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        queueRemove: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_REMOVE' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        queueReorder: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_REORDER' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        queueUpdate: (data) => channel
            .sendWithResponse({ data: { ...data, type: 'QUEUE_UPDATE' }, type: MediaStatusResponse$ })
            .then(utils_1.Result.map(e => e.status[0])),
        dispose: () => channel.close(),
    };
};
exports.createMediaController = createMediaController;
//# sourceMappingURL=media.js.map