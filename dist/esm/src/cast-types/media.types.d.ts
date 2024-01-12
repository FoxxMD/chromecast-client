import { z } from 'zod';
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
export declare enum SupportedMediaCommands {
    PAUSE = 1,
    SEEK = 2,
    STREAM_VOLUME = 4,
    STREAM_MUTE = 8,
    SKIP_FORWARD = 16,
    SKIP_BACKWARD = 32
}
export declare const SupportedMediaCommands$: z.ZodNativeEnum<typeof SupportedMediaCommands>;
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
export declare const PlayerState$: z.ZodEffects<z.ZodEnum<["IDLE", "PLAYING", "BUFFERING", "PAUSED"]>, "IDLE" | "PLAYING" | "BUFFERING" | "PAUSED", unknown>;
export type PlayerState = z.infer<typeof PlayerState$>;
export declare const MediaStatus$: z.ZodObject<{
    currentTime: z.ZodNumber;
    customData: z.ZodNullable<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    idleReason: z.ZodNullable<z.ZodOptional<z.ZodEffects<z.ZodEnum<["CANCELLED", "INTERRUPTED", "FINISHED", "ERROR"]>, "CANCELLED" | "INTERRUPTED" | "FINISHED" | "ERROR", unknown>>>;
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
    mediaSessionId: z.ZodNumber;
    playbackRate: z.ZodNumber;
    playerState: z.ZodEffects<z.ZodEnum<["IDLE", "PLAYING", "BUFFERING", "PAUSED"]>, "IDLE" | "PLAYING" | "BUFFERING" | "PAUSED", unknown>;
    supportedMediaCommands: z.ZodNumber;
    volume: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        level: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        muted: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
    }, {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
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
    idleReason?: "CANCELLED" | "INTERRUPTED" | "FINISHED" | "ERROR" | null | undefined;
    volume?: {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
    } | null | undefined;
    currentTime: number;
    mediaSessionId: number;
    playbackRate: number;
    playerState: "IDLE" | "PLAYING" | "BUFFERING" | "PAUSED";
    supportedMediaCommands: number;
}, {
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
    idleReason?: unknown;
    playerState?: unknown;
    volume?: {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
    } | null | undefined;
    currentTime: number;
    mediaSessionId: number;
    playbackRate: number;
    supportedMediaCommands: number;
}>;
export type MediaStatus = z.infer<typeof MediaStatus$>;
