import { z } from 'zod';
import { caseInsensitiveEnum } from '../utils';
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.StreamType
export const StreamType$ = caseInsensitiveEnum(['BUFFERED', 'LIVE', 'OTHER']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.MediaInformation
export const MediaInformation$ = z.object({
    contentId: z.string(),
    contentType: z.string().nullish(),
    contentUrl: z.string().nullish(),
    customData: z.record(z.unknown()).nullish(),
    duration: z.number().nullish(),
    metadata: z.record(z.unknown()).nullish(),
    streamType: StreamType$,
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.IdleReason
export const IdleReason$ = caseInsensitiveEnum(['CANCELLED', 'INTERRUPTED', 'FINISHED', 'ERROR']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueItem
export const QueueItem$ = z.object({
    activeTrackIds: z.array(z.number()).nullish(),
    autoplay: z.boolean().nullish(),
    customData: z.record(z.unknown()).nullish(),
    itemId: z.number().nullish(),
    media: MediaInformation$.nullish(),
    orderId: z.number().nullish(),
    startTime: z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.PlayerState
export const PlayerState$ = caseInsensitiveEnum(['IDLE', 'PLAYING', 'BUFFERING', 'PAUSED']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.RepeatMode
export const RepeatMode$ = caseInsensitiveEnum(['REPEAT_OFF', 'REPEAT_ALL', 'REPEAT_SINGLE', 'REPEAT_ALL_AND_SHUFFLE']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.VideoInformation
export const VideoInfo$ = z.object({
    width: z.number(),
    height: z.number(),
    hdrType: caseInsensitiveEnum(['SDR', 'HDR', 'DV']),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.Volume
export const Volume$ = z.object({ level: z.number().nullish(), muted: z.boolean().nullish() });
export const MessageType$ = caseInsensitiveEnum([
    'MEDIA_STATUS',
    'CLOUD_STATUS',
    'QUEUE_CHANGE',
    'QUEUE_ITEMS',
    'QUEUE_ITEM_IDS',
    'GET_STATUS',
    'LOAD',
    'PAUSE',
    'STOP',
    'PLAY',
    'SKIP_AD',
    'PLAY_AGAIN',
    'SEEK',
    'SET_PLAYBACK_RATE',
    'SET_VOLUME',
    'EDIT_TRACKS_INFO',
    'EDIT_AUDIO_TRACKS',
    'PRECACHE',
    'PRELOAD',
    'QUEUE_LOAD',
    'QUEUE_INSERT',
    'QUEUE_UPDATE',
    'QUEUE_REMOVE',
    'QUEUE_REORDER',
    'QUEUE_NEXT',
    'QUEUE_PREV',
    'QUEUE_GET_ITEM_RANGE',
    'QUEUE_GET_ITEMS',
    'QUEUE_GET_ITEM_IDS',
    'QUEUE_SHUFFLE',
    'SET_CREDENTIALS',
    'LOAD_BY_ENTITY',
    'USER_ACTION',
    'DISPLAY_STATUS',
    'FOCUS_STATE',
    'CUSTOM_COMMAND',
    'STORE_SESSION',
    'RESUME_SESSION',
    'SESSION_STATE',
]);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.RequestData
export const RequestData$ = z.object({
    type: MessageType$,
    customData: z.record(z.unknown()).nullish(),
    mediaSessionId: z.number().nullish(),
    requestId: z.number(),
    sequenceNumber: z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.SeekResumeState
export const SeekResumeState$ = caseInsensitiveEnum(['PLAYBACK_START', 'PLAYBACK_PAUSE']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.SeekRequestData
export const SeekRequestData$ = RequestData$.extend({
    currentTime: z.number().nullish(),
    relativeTime: z.number().nullish(),
    resumeState: SeekResumeState$.nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueUpdateRequestData
export const QueueUpdateRequestData$ = RequestData$.extend({
    currentItemId: z.number().nullish(),
    currentTime: z.number().nullish(),
    customData: z.record(z.unknown()).nullish(),
    items: z.array(QueueItem$).nullish(),
    jump: z.number().nullish(),
    repeatMode: RepeatMode$.nullish(),
    shuffle: z.boolean().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueReorderRequestData
export const QueueReorderRequestData$ = RequestData$.extend({
    currentItemId: z.number().nullish(),
    currentTime: z.number().nullish(),
    insertBefore: z.number().nullish(),
    itemIds: z.array(z.number()),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueRemoveRequestData
export const QueueRemoveRequestData$ = RequestData$.extend({
    currentItemId: z.number().nullish(),
    currentTime: z.number().nullish(),
    insertBefore: z.number().nullish(),
    itemIds: z.array(z.number()),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueLoadRequestData
export const QueueLoadRequestData$ = RequestData$.extend({
    currentTime: z.number().nullish(),
    items: z.array(QueueItem$),
    repeatMode: RepeatMode$.nullish(),
    startIndex: z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueInsertRequestData
export const QueueInsertRequestData$ = RequestData$.extend({
    currentItemId: z.number().nullish(),
    currentItemIndex: z.number().nullish(),
    currentTime: z.number().nullish(),
    insertBefore: z.number().nullish(),
    items: z.array(QueueItem$),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LoadOptions
export const LoadOptions$ = z.object({
    contentFilteringMode: caseInsensitiveEnum(['FILTER_EXPLICIT']).nullish(),
});
export const QueueType$ = caseInsensitiveEnum([
    'ALBUM',
    'PLAYLIST',
    'AUDIOBOOK',
    'RADIO_STATION',
    'PODCAST_SERIES',
    'TV_SERIES',
    'VIDEO_PLAYLIST',
    'LIVE_TV',
    'MOVIE',
]);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueData
export const QueueData$ = z.object({
    description: z.string().nullish(),
    entity: z.string().nullish(),
    id: z.string().nullish(),
    items: z.array(QueueItem$).nullish(),
    name: z.string().nullish(),
    queueType: QueueType$.nullish(),
    repeatMode: RepeatMode$.nullish(),
    shuffle: z.boolean().nullish(),
    startIndex: z.number().nullish(),
    startTime: z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LoadRequestData
export const LoadRequestData$ = RequestData$.extend({
    activeTrackIds: z.array(z.number()).nullish(),
    autoplay: z.boolean().nullish(),
    credentials: z.string().nullish(),
    credentialsType: z.string().nullish(),
    currentTime: z.number().nullish(),
    loadOptions: LoadOptions$.nullish(),
    media: MediaInformation$,
    playbackRate: z.number().nullish(),
    queueData: QueueData$.nullish(),
});
//# sourceMappingURL=messages.types.js.map