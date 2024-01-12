import { PersistentClient } from '../persistentClient';
import { Result } from '../utils';
export declare const launchAndJoin: <T>({ client, appId, factory, }: {
    client: PersistentClient;
    appId: string;
    factory: (sourceId: string, destinationId: string) => Promise<T>;
}) => Promise<Result<T, Error>>;
export declare const join: <T>({ client, factory, }: {
    client: PersistentClient;
    factory: (sourceId: string, destinationId: string) => Promise<T>;
}) => Promise<Result<T, Error>>;
