import { Messages } from '../cast-types';
import { PersistentClient } from '../persistentClient';
import { Result } from '../utils';
export type MediaController = ReturnType<typeof createMediaController>;
export declare const createMediaController: ({ client, sourceId, destinationId, }: {
    client: PersistentClient;
    sourceId?: string | undefined;
    destinationId?: string | undefined;
}) => {
    load: (data: Omit<Messages.LoadRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    queueLoad: (data: Omit<Messages.QueueLoadRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    getStatus: () => Promise<Result<{
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
    }, Error>>;
    play: () => Promise<Result<{
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
    }, Error>>;
    pause: () => Promise<Result<{
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
    }, Error>>;
    stop: () => Promise<Result<{
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
    }, Error>>;
    seek: (data: Omit<Messages.SeekRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    queueInsert: (data: Omit<Messages.QueueInsertRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    queueRemove: (data: Omit<Messages.QueueInsertRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    queueReorder: (data: Omit<Messages.QueueInsertRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    queueUpdate: (data: Omit<Messages.QueueInsertRequestData, 'requestId' | 'type'>) => Promise<Result<{
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
    }, Error>>;
    dispose: () => void;
};
