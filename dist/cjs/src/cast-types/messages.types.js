"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRequestData$ = exports.QueueData$ = exports.QueueType$ = exports.LoadOptions$ = exports.QueueInsertRequestData$ = exports.QueueLoadRequestData$ = exports.QueueRemoveRequestData$ = exports.QueueReorderRequestData$ = exports.QueueUpdateRequestData$ = exports.SeekRequestData$ = exports.SeekResumeState$ = exports.RequestData$ = exports.MessageType$ = exports.Volume$ = exports.VideoInfo$ = exports.RepeatMode$ = exports.PlayerState$ = exports.QueueItem$ = exports.IdleReason$ = exports.MediaInformation$ = exports.StreamType$ = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.StreamType
exports.StreamType$ = (0, utils_1.caseInsensitiveEnum)(['BUFFERED', 'LIVE', 'OTHER']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.MediaInformation
exports.MediaInformation$ = zod_1.z.object({
    contentId: zod_1.z.string(),
    contentType: zod_1.z.string().nullish(),
    contentUrl: zod_1.z.string().nullish(),
    customData: zod_1.z.record(zod_1.z.unknown()).nullish(),
    duration: zod_1.z.number().nullish(),
    metadata: zod_1.z.record(zod_1.z.unknown()).nullish(),
    streamType: exports.StreamType$,
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.IdleReason
exports.IdleReason$ = (0, utils_1.caseInsensitiveEnum)(['CANCELLED', 'INTERRUPTED', 'FINISHED', 'ERROR']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueItem
exports.QueueItem$ = zod_1.z.object({
    activeTrackIds: zod_1.z.array(zod_1.z.number()).nullish(),
    autoplay: zod_1.z.boolean().nullish(),
    customData: zod_1.z.record(zod_1.z.unknown()).nullish(),
    itemId: zod_1.z.number().nullish(),
    media: exports.MediaInformation$.nullish(),
    orderId: zod_1.z.number().nullish(),
    startTime: zod_1.z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.PlayerState
exports.PlayerState$ = (0, utils_1.caseInsensitiveEnum)(['IDLE', 'PLAYING', 'BUFFERING', 'PAUSED']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.RepeatMode
exports.RepeatMode$ = (0, utils_1.caseInsensitiveEnum)(['REPEAT_OFF', 'REPEAT_ALL', 'REPEAT_SINGLE', 'REPEAT_ALL_AND_SHUFFLE']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.VideoInformation
exports.VideoInfo$ = zod_1.z.object({
    width: zod_1.z.number(),
    height: zod_1.z.number(),
    hdrType: (0, utils_1.caseInsensitiveEnum)(['SDR', 'HDR', 'DV']),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.Volume
exports.Volume$ = zod_1.z.object({ level: zod_1.z.number().nullish(), muted: zod_1.z.boolean().nullish() });
exports.MessageType$ = (0, utils_1.caseInsensitiveEnum)([
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
exports.RequestData$ = zod_1.z.object({
    type: exports.MessageType$,
    customData: zod_1.z.record(zod_1.z.unknown()).nullish(),
    mediaSessionId: zod_1.z.number().nullish(),
    requestId: zod_1.z.number(),
    sequenceNumber: zod_1.z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages#.SeekResumeState
exports.SeekResumeState$ = (0, utils_1.caseInsensitiveEnum)(['PLAYBACK_START', 'PLAYBACK_PAUSE']);
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.SeekRequestData
exports.SeekRequestData$ = exports.RequestData$.extend({
    currentTime: zod_1.z.number().nullish(),
    relativeTime: zod_1.z.number().nullish(),
    resumeState: exports.SeekResumeState$.nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueUpdateRequestData
exports.QueueUpdateRequestData$ = exports.RequestData$.extend({
    currentItemId: zod_1.z.number().nullish(),
    currentTime: zod_1.z.number().nullish(),
    customData: zod_1.z.record(zod_1.z.unknown()).nullish(),
    items: zod_1.z.array(exports.QueueItem$).nullish(),
    jump: zod_1.z.number().nullish(),
    repeatMode: exports.RepeatMode$.nullish(),
    shuffle: zod_1.z.boolean().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueReorderRequestData
exports.QueueReorderRequestData$ = exports.RequestData$.extend({
    currentItemId: zod_1.z.number().nullish(),
    currentTime: zod_1.z.number().nullish(),
    insertBefore: zod_1.z.number().nullish(),
    itemIds: zod_1.z.array(zod_1.z.number()),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueRemoveRequestData
exports.QueueRemoveRequestData$ = exports.RequestData$.extend({
    currentItemId: zod_1.z.number().nullish(),
    currentTime: zod_1.z.number().nullish(),
    insertBefore: zod_1.z.number().nullish(),
    itemIds: zod_1.z.array(zod_1.z.number()),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueLoadRequestData
exports.QueueLoadRequestData$ = exports.RequestData$.extend({
    currentTime: zod_1.z.number().nullish(),
    items: zod_1.z.array(exports.QueueItem$),
    repeatMode: exports.RepeatMode$.nullish(),
    startIndex: zod_1.z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.QueueInsertRequestData
exports.QueueInsertRequestData$ = exports.RequestData$.extend({
    currentItemId: zod_1.z.number().nullish(),
    currentItemIndex: zod_1.z.number().nullish(),
    currentTime: zod_1.z.number().nullish(),
    insertBefore: zod_1.z.number().nullish(),
    items: zod_1.z.array(exports.QueueItem$),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LoadOptions
exports.LoadOptions$ = zod_1.z.object({
    contentFilteringMode: (0, utils_1.caseInsensitiveEnum)(['FILTER_EXPLICIT']).nullish(),
});
exports.QueueType$ = (0, utils_1.caseInsensitiveEnum)([
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
exports.QueueData$ = zod_1.z.object({
    description: zod_1.z.string().nullish(),
    entity: zod_1.z.string().nullish(),
    id: zod_1.z.string().nullish(),
    items: zod_1.z.array(exports.QueueItem$).nullish(),
    name: zod_1.z.string().nullish(),
    queueType: exports.QueueType$.nullish(),
    repeatMode: exports.RepeatMode$.nullish(),
    shuffle: zod_1.z.boolean().nullish(),
    startIndex: zod_1.z.number().nullish(),
    startTime: zod_1.z.number().nullish(),
});
// https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.messages.LoadRequestData
exports.LoadRequestData$ = exports.RequestData$.extend({
    activeTrackIds: zod_1.z.array(zod_1.z.number()).nullish(),
    autoplay: zod_1.z.boolean().nullish(),
    credentials: zod_1.z.string().nullish(),
    credentialsType: zod_1.z.string().nullish(),
    currentTime: zod_1.z.number().nullish(),
    loadOptions: exports.LoadOptions$.nullish(),
    media: exports.MediaInformation$,
    playbackRate: zod_1.z.number().nullish(),
    queueData: exports.QueueData$.nullish(),
});
//# sourceMappingURL=messages.types.js.map