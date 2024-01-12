import { createMediaController } from '../controllers/media';
import * as Application from './application';
export const launchAndJoin = ({ client }) => Application.launchAndJoin({
    client,
    appId: 'CC1AD845',
    factory: async (sourceId, destinationId) => createMediaController({ client, sourceId, destinationId }),
});
export const join = ({ client }) => Application.join({
    client,
    factory: async (sourceId, destinationId) => createMediaController({ client, sourceId, destinationId }),
});
//# sourceMappingURL=defaultMediaApp.js.map