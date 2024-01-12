export * as Media from './media.types';
export * as Messages from './messages.types';
import { z } from 'zod';
export declare const VolumeControlType$: z.ZodEffects<z.ZodEnum<["ATTENUATION", "FIXED", "MASTER"]>, "ATTENUATION" | "FIXED" | "MASTER", unknown>;
export type VolumeControlType = z.infer<typeof VolumeControlType$>;
export declare const Volume$: z.ZodObject<{
    controlType: z.ZodEffects<z.ZodEnum<["ATTENUATION", "FIXED", "MASTER"]>, "ATTENUATION" | "FIXED" | "MASTER", unknown>;
    level: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    muted: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    stepInterval: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    level?: number | null | undefined;
    muted?: boolean | null | undefined;
    controlType: "ATTENUATION" | "FIXED" | "MASTER";
    stepInterval: number;
}, {
    level?: number | null | undefined;
    muted?: boolean | null | undefined;
    controlType?: unknown;
    stepInterval: number;
}>;
export type Volume = z.infer<typeof Volume$>;
export declare const Application$: z.ZodObject<{
    appId: z.ZodString;
    displayName: z.ZodString;
    iconUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    isIdleScreen: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    launchedFromCloud: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    namespaces: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "many">;
    sessionId: z.ZodString;
    statusText: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    transportId: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
}, {
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
}>;
export type Application = z.infer<typeof Application$>;
export declare const ReceiverStatus$: z.ZodObject<{
    applications: z.ZodOptional<z.ZodArray<z.ZodObject<{
        appId: z.ZodString;
        displayName: z.ZodString;
        iconUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        isIdleScreen: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        launchedFromCloud: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        namespaces: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>, "many">;
        sessionId: z.ZodString;
        statusText: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        transportId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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
    }, {
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
    }>, "many">>;
    volume: z.ZodObject<{
        controlType: z.ZodEffects<z.ZodEnum<["ATTENUATION", "FIXED", "MASTER"]>, "ATTENUATION" | "FIXED" | "MASTER", unknown>;
        level: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        muted: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        stepInterval: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType: "ATTENUATION" | "FIXED" | "MASTER";
        stepInterval: number;
    }, {
        level?: number | null | undefined;
        muted?: boolean | null | undefined;
        controlType?: unknown;
        stepInterval: number;
    }>;
}, "strip", z.ZodTypeAny, {
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
}, {
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
        controlType?: unknown;
        stepInterval: number;
    };
}>;
export type ReceiverStatus = z.infer<typeof ReceiverStatus$>;
