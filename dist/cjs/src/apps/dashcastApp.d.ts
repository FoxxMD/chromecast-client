import { PersistentClient } from '../persistentClient';
import { Result } from '../utils';
export interface Dashcast {
    loadUrl: ({ url, force, reload, reloadTime, }: {
        url: string;
        force?: boolean;
        reload?: boolean;
        reloadTime?: number;
    }) => void;
}
export declare const launchAndJoin: ({ client }: {
    client: PersistentClient;
}) => Promise<Result<Dashcast>>;
export declare const join: ({ client }: {
    client: PersistentClient;
}) => Promise<Result<Dashcast>>;
