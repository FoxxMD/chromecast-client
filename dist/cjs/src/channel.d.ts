import { Client } from 'castv2';
import { z, ZodTypeDef } from 'zod';
import { Result } from './utils';
export type Channel = {
    send: (data: Record<string, unknown>) => void;
    sendWithResponse: <T = unknown>({ data, type, timeout, }: {
        data: Record<string, unknown>;
        type?: z.ZodType<T, ZodTypeDef, unknown>;
        timeout?: number;
    }) => Promise<Result<T>>;
    close: () => void;
};
export declare const createChannel: (client: Client) => (sourceId: string, destinationId: string, namespace: string, onMessage?: (data: Record<string, unknown>, isBroadcast: boolean) => void) => Channel;
