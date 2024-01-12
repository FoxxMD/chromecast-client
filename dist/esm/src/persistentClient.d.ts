import { Client } from 'castv2';
import { createChannel } from './channel';
export type PersistentClient = {
    close: () => void;
    send: Client['send'];
    createChannel: ReturnType<typeof createChannel>;
};
export declare const connect: ({ host, client, retryDelay, port, timeout, }: {
    host: string;
    client?: Client | undefined;
    retryDelay?: number | undefined;
    port?: number | undefined;
    timeout?: number | undefined;
}) => Promise<PersistentClient>;
