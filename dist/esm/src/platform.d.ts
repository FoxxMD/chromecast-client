import { PersistentClient } from './persistentClient';
export declare const createPlatform: (client: PersistentClient) => {
    getStatus: () => Promise<import("./utils").Result<{
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
    getVolume: () => Promise<import("./utils").Result<{
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType: "ATTENUATION" | "FIXED" | "MASTER";
        stepInterval: number;
    }, Error>>;
    setVolume: (options: {
        level?: number | undefined;
        mute?: boolean | undefined;
    }) => Promise<import("./utils").Result<{
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType: "ATTENUATION" | "FIXED" | "MASTER";
        stepInterval: number;
    }, Error>>;
    isAppAvailable: (appId: string) => Promise<import("./utils").Result<boolean, Error>>;
    stopRunningApp: (sessionId: string) => Promise<import("./utils").Result<{
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
    launchApp: (appId: string) => Promise<import("./utils").Result<{
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
    createChannel: (sourceId: string, destinationId: string, namespace: string, onMessage?: ((data: Record<string, unknown>, isBroadcast: boolean) => void) | undefined) => import("./channel").Channel;
    close: () => void;
};
