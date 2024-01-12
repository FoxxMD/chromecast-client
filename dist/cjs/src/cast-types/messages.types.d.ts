import { z } from 'zod';
export declare const StreamType$: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
export type StreamType = z.infer<typeof StreamType$>;
export declare const MediaInformation$: z.ZodObject<{
    contentId: z.ZodString;
    contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
}, "strip", z.ZodTypeAny, {
    metadata?: Record<string, unknown> | null | undefined;
    contentType?: string | null | undefined;
    contentUrl?: string | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    duration?: number | null | undefined;
    contentId: string;
    streamType: "BUFFERED" | "LIVE" | "OTHER";
}, {
    metadata?: Record<string, unknown> | null | undefined;
    contentType?: string | null | undefined;
    contentUrl?: string | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    duration?: number | null | undefined;
    streamType?: unknown;
    contentId: string;
}>;
export type MediaInformation = z.infer<typeof MediaInformation$>;
export declare const IdleReason$: z.ZodEffects<z.ZodEnum<["CANCELLED", "INTERRUPTED", "FINISHED", "ERROR"]>, "CANCELLED" | "INTERRUPTED" | "FINISHED" | "ERROR", unknown>;
export type IdleReason = z.infer<typeof IdleReason$>;
export declare const QueueItem$: z.ZodObject<{
    activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
    autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        contentId: z.ZodString;
        contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
    }, "strip", z.ZodTypeAny, {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        contentId: string;
        streamType: "BUFFERED" | "LIVE" | "OTHER";
    }, {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        streamType?: unknown;
        contentId: string;
    }>>>;
    orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    startTime?: number | null | undefined;
    media?: {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        contentId: string;
        streamType: "BUFFERED" | "LIVE" | "OTHER";
    } | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    activeTrackIds?: number[] | null | undefined;
    autoplay?: boolean | null | undefined;
    itemId?: number | null | undefined;
    orderId?: number | null | undefined;
}, {
    startTime?: number | null | undefined;
    media?: {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        streamType?: unknown;
        contentId: string;
    } | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    activeTrackIds?: number[] | null | undefined;
    autoplay?: boolean | null | undefined;
    itemId?: number | null | undefined;
    orderId?: number | null | undefined;
}>;
export type QueueItem = z.infer<typeof QueueItem$>;
export declare const PlayerState$: z.ZodEffects<z.ZodEnum<["IDLE", "PLAYING", "BUFFERING", "PAUSED"]>, "IDLE" | "PLAYING" | "BUFFERING" | "PAUSED", unknown>;
export type PlayerState = z.infer<typeof PlayerState$>;
export declare const RepeatMode$: z.ZodEffects<z.ZodEnum<["REPEAT_OFF", "REPEAT_ALL", "REPEAT_SINGLE", "REPEAT_ALL_AND_SHUFFLE"]>, "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE", unknown>;
export type RepeatMode = z.infer<typeof RepeatMode$>;
export declare const VideoInfo$: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    hdrType: z.ZodEffects<z.ZodEnum<["SDR", "HDR", "DV"]>, "SDR" | "HDR" | "DV", unknown>;
}, "strip", z.ZodTypeAny, {
    height: number;
    width: number;
    hdrType: "SDR" | "HDR" | "DV";
}, {
    hdrType?: unknown;
    height: number;
    width: number;
}>;
export type VideoInfo = z.infer<typeof VideoInfo$>;
export declare const Volume$: z.ZodObject<{
    level: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    muted: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    level?: number | null | undefined;
    muted?: boolean | null | undefined;
}, {
    level?: number | null | undefined;
    muted?: boolean | null | undefined;
}>;
export type Volume = z.infer<typeof Volume$>;
export declare const MessageType$: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
export type MessageType = z.infer<typeof MessageType$>;
export declare const RequestData$: z.ZodObject<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    requestId: number;
}, {
    type?: unknown;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    requestId: number;
}>;
export type RequestData = z.infer<typeof RequestData$>;
export declare const SeekResumeState$: z.ZodEffects<z.ZodEnum<["PLAYBACK_START", "PLAYBACK_PAUSE"]>, "PLAYBACK_START" | "PLAYBACK_PAUSE", unknown>;
export type SeekResumeState = z.infer<typeof SeekResumeState$>;
export declare const SeekRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    relativeTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    resumeState: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["PLAYBACK_START", "PLAYBACK_PAUSE"]>, "PLAYBACK_START" | "PLAYBACK_PAUSE", unknown>>>;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    relativeTime?: number | null | undefined;
    resumeState?: "PLAYBACK_START" | "PLAYBACK_PAUSE" | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    requestId: number;
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    relativeTime?: number | null | undefined;
    resumeState?: unknown;
    requestId: number;
}>;
export type SeekRequestData = z.infer<typeof SeekRequestData$>;
export declare const QueueUpdateRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentItemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    items: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
        autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contentId: z.ZodString;
            contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
        }, "strip", z.ZodTypeAny, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        }, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        }>>>;
        orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }>, "many">>>;
    jump: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    repeatMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["REPEAT_OFF", "REPEAT_ALL", "REPEAT_SINGLE", "REPEAT_ALL_AND_SHUFFLE"]>, "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE", unknown>>>;
    shuffle: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    items?: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[] | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    jump?: number | null | undefined;
    repeatMode?: "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE" | null | undefined;
    shuffle?: boolean | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    requestId: number;
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    items?: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[] | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    jump?: number | null | undefined;
    repeatMode?: unknown;
    shuffle?: boolean | null | undefined;
    requestId: number;
}>;
export type QueueUpdateRequestData = z.infer<typeof QueueUpdateRequestData$>;
export declare const QueueReorderRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentItemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    insertBefore: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    itemIds: z.ZodArray<z.ZodNumber, "many">;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    requestId: number;
    itemIds: number[];
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    requestId: number;
    itemIds: number[];
}>;
export type QueueReorderRequestData = z.infer<typeof QueueReorderRequestData$>;
export declare const QueueRemoveRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentItemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    insertBefore: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    itemIds: z.ZodArray<z.ZodNumber, "many">;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    requestId: number;
    itemIds: number[];
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    requestId: number;
    itemIds: number[];
}>;
export type QueueRemoveRequestData = z.infer<typeof QueueRemoveRequestData$>;
export declare const QueueLoadRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    items: z.ZodArray<z.ZodObject<{
        activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
        autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contentId: z.ZodString;
            contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
        }, "strip", z.ZodTypeAny, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        }, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        }>>>;
        orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }>, "many">;
    repeatMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["REPEAT_OFF", "REPEAT_ALL", "REPEAT_SINGLE", "REPEAT_ALL_AND_SHUFFLE"]>, "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE", unknown>>>;
    startIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    repeatMode?: "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE" | null | undefined;
    startIndex?: number | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    items: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[];
    requestId: number;
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    repeatMode?: unknown;
    startIndex?: number | null | undefined;
    items: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[];
    requestId: number;
}>;
export type QueueLoadRequestData = z.infer<typeof QueueLoadRequestData$>;
export declare const QueueInsertRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    currentItemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentItemIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    insertBefore: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    items: z.ZodArray<z.ZodObject<{
        activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
        autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contentId: z.ZodString;
            contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
        }, "strip", z.ZodTypeAny, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        }, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        }>>>;
        orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }>, "many">;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    currentItemIndex?: number | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    items: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[];
    requestId: number;
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    insertBefore?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    currentItemId?: number | null | undefined;
    currentItemIndex?: number | null | undefined;
    items: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[];
    requestId: number;
}>;
export type QueueInsertRequestData = z.infer<typeof QueueInsertRequestData$>;
export declare const LoadOptions$: z.ZodObject<{
    contentFilteringMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["FILTER_EXPLICIT"]>, "FILTER_EXPLICIT", unknown>>>;
}, "strip", z.ZodTypeAny, {
    contentFilteringMode?: "FILTER_EXPLICIT" | null | undefined;
}, {
    contentFilteringMode?: unknown;
}>;
export type LoadOptions = z.infer<typeof LoadOptions$>;
export declare const QueueType$: z.ZodEffects<z.ZodEnum<["ALBUM", "PLAYLIST", "AUDIOBOOK", "RADIO_STATION", "PODCAST_SERIES", "TV_SERIES", "VIDEO_PLAYLIST", "LIVE_TV", "MOVIE"]>, "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE", unknown>;
export type QueueType = z.infer<typeof QueueType$>;
export declare const QueueData$: z.ZodObject<{
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    entity: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    items: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
        activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
        autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            contentId: z.ZodString;
            contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
        }, "strip", z.ZodTypeAny, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        }, {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        }>>>;
        orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }, {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }>, "many">>>;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    queueType: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["ALBUM", "PLAYLIST", "AUDIOBOOK", "RADIO_STATION", "PODCAST_SERIES", "TV_SERIES", "VIDEO_PLAYLIST", "LIVE_TV", "MOVIE"]>, "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE", unknown>>>;
    repeatMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["REPEAT_OFF", "REPEAT_ALL", "REPEAT_SINGLE", "REPEAT_ALL_AND_SHUFFLE"]>, "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE", unknown>>>;
    shuffle: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    startIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    startTime?: number | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    items?: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            contentId: string;
            streamType: "BUFFERED" | "LIVE" | "OTHER";
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[] | null | undefined;
    repeatMode?: "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE" | null | undefined;
    shuffle?: boolean | null | undefined;
    startIndex?: number | null | undefined;
    entity?: string | null | undefined;
    queueType?: "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE" | null | undefined;
}, {
    startTime?: number | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    description?: string | null | undefined;
    items?: {
        startTime?: number | null | undefined;
        media?: {
            metadata?: Record<string, unknown> | null | undefined;
            contentType?: string | null | undefined;
            contentUrl?: string | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            duration?: number | null | undefined;
            streamType?: unknown;
            contentId: string;
        } | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        activeTrackIds?: number[] | null | undefined;
        autoplay?: boolean | null | undefined;
        itemId?: number | null | undefined;
        orderId?: number | null | undefined;
    }[] | null | undefined;
    repeatMode?: unknown;
    shuffle?: boolean | null | undefined;
    startIndex?: number | null | undefined;
    entity?: string | null | undefined;
    queueType?: unknown;
}>;
export type QueueData = z.infer<typeof QueueData$>;
export declare const LoadRequestData$: z.ZodObject<z.extendShape<{
    type: z.ZodEffects<z.ZodEnum<["MEDIA_STATUS", "CLOUD_STATUS", "QUEUE_CHANGE", "QUEUE_ITEMS", "QUEUE_ITEM_IDS", "GET_STATUS", "LOAD", "PAUSE", "STOP", "PLAY", "SKIP_AD", "PLAY_AGAIN", "SEEK", "SET_PLAYBACK_RATE", "SET_VOLUME", "EDIT_TRACKS_INFO", "EDIT_AUDIO_TRACKS", "PRECACHE", "PRELOAD", "QUEUE_LOAD", "QUEUE_INSERT", "QUEUE_UPDATE", "QUEUE_REMOVE", "QUEUE_REORDER", "QUEUE_NEXT", "QUEUE_PREV", "QUEUE_GET_ITEM_RANGE", "QUEUE_GET_ITEMS", "QUEUE_GET_ITEM_IDS", "QUEUE_SHUFFLE", "SET_CREDENTIALS", "LOAD_BY_ENTITY", "USER_ACTION", "DISPLAY_STATUS", "FOCUS_STATE", "CUSTOM_COMMAND", "STORE_SESSION", "RESUME_SESSION", "SESSION_STATE"]>, "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE", unknown>;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    mediaSessionId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    requestId: z.ZodNumber;
    sequenceNumber: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, {
    activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
    autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    credentials: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    credentialsType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    currentTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    loadOptions: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        contentFilteringMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["FILTER_EXPLICIT"]>, "FILTER_EXPLICIT", unknown>>>;
    }, "strip", z.ZodTypeAny, {
        contentFilteringMode?: "FILTER_EXPLICIT" | null | undefined;
    }, {
        contentFilteringMode?: unknown;
    }>>>;
    media: z.ZodObject<{
        contentId: z.ZodString;
        contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
        streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
    }, "strip", z.ZodTypeAny, {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        contentId: string;
        streamType: "BUFFERED" | "LIVE" | "OTHER";
    }, {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        streamType?: unknown;
        contentId: string;
    }>;
    playbackRate: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    queueData: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        entity: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        items: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodObject<{
            activeTrackIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
            autoplay: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
            customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
            itemId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            media: z.ZodNullable<z.ZodOptional<z.ZodObject<{
                contentId: z.ZodString;
                contentType: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                contentUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
                duration: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                metadata: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
                streamType: z.ZodEffects<z.ZodEnum<["BUFFERED", "LIVE", "OTHER"]>, "BUFFERED" | "LIVE" | "OTHER", unknown>;
            }, "strip", z.ZodTypeAny, {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                contentId: string;
                streamType: "BUFFERED" | "LIVE" | "OTHER";
            }, {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                streamType?: unknown;
                contentId: string;
            }>>>;
            orderId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
            startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                contentId: string;
                streamType: "BUFFERED" | "LIVE" | "OTHER";
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }, {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                streamType?: unknown;
                contentId: string;
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }>, "many">>>;
        name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        queueType: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["ALBUM", "PLAYLIST", "AUDIOBOOK", "RADIO_STATION", "PODCAST_SERIES", "TV_SERIES", "VIDEO_PLAYLIST", "LIVE_TV", "MOVIE"]>, "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE", unknown>>>;
        repeatMode: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["REPEAT_OFF", "REPEAT_ALL", "REPEAT_SINGLE", "REPEAT_ALL_AND_SHUFFLE"]>, "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE", unknown>>>;
        shuffle: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        startIndex: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        startTime: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        startTime?: number | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        description?: string | null | undefined;
        items?: {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                contentId: string;
                streamType: "BUFFERED" | "LIVE" | "OTHER";
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }[] | null | undefined;
        repeatMode?: "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE" | null | undefined;
        shuffle?: boolean | null | undefined;
        startIndex?: number | null | undefined;
        entity?: string | null | undefined;
        queueType?: "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE" | null | undefined;
    }, {
        startTime?: number | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        description?: string | null | undefined;
        items?: {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                streamType?: unknown;
                contentId: string;
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }[] | null | undefined;
        repeatMode?: unknown;
        shuffle?: boolean | null | undefined;
        startIndex?: number | null | undefined;
        entity?: string | null | undefined;
        queueType?: unknown;
    }>>>;
}>, "strip", z.ZodTypeAny, {
    currentTime?: number | null | undefined;
    customData?: Record<string, unknown> | null | undefined;
    activeTrackIds?: number[] | null | undefined;
    autoplay?: boolean | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    credentials?: string | null | undefined;
    credentialsType?: string | null | undefined;
    loadOptions?: {
        contentFilteringMode?: "FILTER_EXPLICIT" | null | undefined;
    } | null | undefined;
    playbackRate?: number | null | undefined;
    queueData?: {
        startTime?: number | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        description?: string | null | undefined;
        items?: {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                contentId: string;
                streamType: "BUFFERED" | "LIVE" | "OTHER";
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }[] | null | undefined;
        repeatMode?: "REPEAT_OFF" | "REPEAT_ALL" | "REPEAT_SINGLE" | "REPEAT_ALL_AND_SHUFFLE" | null | undefined;
        shuffle?: boolean | null | undefined;
        startIndex?: number | null | undefined;
        entity?: string | null | undefined;
        queueType?: "ALBUM" | "PLAYLIST" | "AUDIOBOOK" | "RADIO_STATION" | "PODCAST_SERIES" | "TV_SERIES" | "VIDEO_PLAYLIST" | "LIVE_TV" | "MOVIE" | null | undefined;
    } | null | undefined;
    type: "MEDIA_STATUS" | "CLOUD_STATUS" | "QUEUE_CHANGE" | "QUEUE_ITEMS" | "QUEUE_ITEM_IDS" | "GET_STATUS" | "LOAD" | "PAUSE" | "STOP" | "PLAY" | "SKIP_AD" | "PLAY_AGAIN" | "SEEK" | "SET_PLAYBACK_RATE" | "SET_VOLUME" | "EDIT_TRACKS_INFO" | "EDIT_AUDIO_TRACKS" | "PRECACHE" | "PRELOAD" | "QUEUE_LOAD" | "QUEUE_INSERT" | "QUEUE_UPDATE" | "QUEUE_REMOVE" | "QUEUE_REORDER" | "QUEUE_NEXT" | "QUEUE_PREV" | "QUEUE_GET_ITEM_RANGE" | "QUEUE_GET_ITEMS" | "QUEUE_GET_ITEM_IDS" | "QUEUE_SHUFFLE" | "SET_CREDENTIALS" | "LOAD_BY_ENTITY" | "USER_ACTION" | "DISPLAY_STATUS" | "FOCUS_STATE" | "CUSTOM_COMMAND" | "STORE_SESSION" | "RESUME_SESSION" | "SESSION_STATE";
    media: {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        contentId: string;
        streamType: "BUFFERED" | "LIVE" | "OTHER";
    };
    requestId: number;
}, {
    currentTime?: number | null | undefined;
    type?: unknown;
    customData?: Record<string, unknown> | null | undefined;
    activeTrackIds?: number[] | null | undefined;
    autoplay?: boolean | null | undefined;
    mediaSessionId?: number | null | undefined;
    sequenceNumber?: number | null | undefined;
    credentials?: string | null | undefined;
    credentialsType?: string | null | undefined;
    loadOptions?: {
        contentFilteringMode?: unknown;
    } | null | undefined;
    playbackRate?: number | null | undefined;
    queueData?: {
        startTime?: number | null | undefined;
        id?: string | null | undefined;
        name?: string | null | undefined;
        description?: string | null | undefined;
        items?: {
            startTime?: number | null | undefined;
            media?: {
                metadata?: Record<string, unknown> | null | undefined;
                contentType?: string | null | undefined;
                contentUrl?: string | null | undefined;
                customData?: Record<string, unknown> | null | undefined;
                duration?: number | null | undefined;
                streamType?: unknown;
                contentId: string;
            } | null | undefined;
            customData?: Record<string, unknown> | null | undefined;
            activeTrackIds?: number[] | null | undefined;
            autoplay?: boolean | null | undefined;
            itemId?: number | null | undefined;
            orderId?: number | null | undefined;
        }[] | null | undefined;
        repeatMode?: unknown;
        shuffle?: boolean | null | undefined;
        startIndex?: number | null | undefined;
        entity?: string | null | undefined;
        queueType?: unknown;
    } | null | undefined;
    media: {
        metadata?: Record<string, unknown> | null | undefined;
        contentType?: string | null | undefined;
        contentUrl?: string | null | undefined;
        customData?: Record<string, unknown> | null | undefined;
        duration?: number | null | undefined;
        streamType?: unknown;
        contentId: string;
    };
    requestId: number;
}>;
export type LoadRequestData = z.infer<typeof LoadRequestData$>;
