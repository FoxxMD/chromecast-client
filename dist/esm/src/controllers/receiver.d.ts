import { ReceiverStatus } from '../cast-types';
import { PersistentClient } from '../persistentClient';
import { Result } from '../utils';
export type Receiver = ReturnType<typeof createReceiver>;
export declare const createReceiver: ({ client, sourceId, destinationId, }: {
    client: PersistentClient;
    sourceId?: string | undefined;
    destinationId?: string | undefined;
}) => {
    getStatus: () => Promise<Result<ReceiverStatus>>;
    isAppAvailable: (appId: string) => Promise<Result<boolean, Error>>;
    getVolume: () => Promise<Result<{
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType: "ATTENUATION" | "FIXED" | "MASTER";
        stepInterval: number;
    }, Error>>;
    setVolume: (options: {
        level?: number;
        mute?: boolean;
    }) => Promise<Result<{
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType: "ATTENUATION" | "FIXED" | "MASTER";
        stepInterval: number;
    }, Error>>;
    stop: (sessionId: string) => Promise<Result<{
        applications?: {
            iconUrl?: string | null | undefined;
            isIdleScreen?: boolean | null | undefined;
            launchedFromCloud?: boolean | null | undefined;
            statusText?: string | null | undefined;
            appId: string;
            displayName: string;
            namespaces: {
                name: string;
            }[];
            sessionId: string;
            transportId: string;
        }[] | undefined;
        volume: {
            level?: number | null | undefined;
            muted?: boolean | null | undefined;
            controlType: "ATTENUATION" | "FIXED" | "MASTER";
            stepInterval: number;
        };
    }, Error>>;
    launch: (appId: string) => Promise<Result<{
        applications?: {
            iconUrl?: string | null | undefined;
            isIdleScreen?: boolean | null | undefined;
            launchedFromCloud?: boolean | null | undefined;
            statusText?: string | null | undefined;
            appId: string;
            displayName: string;
            namespaces: {
                name: string;
            }[];
            sessionId: string;
            transportId: string;
        }[] | undefined;
        volume: {
            level?: number | null | undefined;
            muted?: boolean | null | undefined;
            controlType: "ATTENUATION" | "FIXED" | "MASTER";
            stepInterval: number;
        };
    }, Error>>;
    dispose: () => void;
};
