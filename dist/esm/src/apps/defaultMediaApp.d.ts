import { MediaController } from '../controllers/media';
import { PersistentClient } from '../persistentClient';
import { Result } from '../utils';
export declare const launchAndJoin: ({ client }: {
    client: PersistentClient;
}) => Promise<Result<MediaController>>;
export declare const join: ({ client }: {
    client: PersistentClient;
}) => Promise<Result<MediaController>>;
