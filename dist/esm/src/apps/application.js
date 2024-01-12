import { createReceiver } from '../controllers/receiver';
import { generateRandomSourceId, Result } from '../utils';
const _getJoinableTransportId = (status) => {
    const app = status.applications === undefined
        ? undefined
        : status.applications.find(a => a.namespaces.map(e => e.name).includes('urn:x-cast:com.google.cast.media'));
    return app === undefined ? Result.Err(new Error('failed to find joinable application')) : Result.Ok(app.transportId);
};
const _join = async (status, factory) => {
    const transportIdMaybe = await status.then(Result.flatMap(_getJoinableTransportId)).then(r => r.unwrapWithErr());
    return transportIdMaybe.isOk
        ? Result.Ok(await factory(generateRandomSourceId(), transportIdMaybe.value))
        : Result.Err(transportIdMaybe.value);
};
export const launchAndJoin = async ({ client, appId, factory, }) => {
    const receiver = createReceiver({
        client,
        sourceId: 'sender-0',
        destinationId: 'receiver-0',
    });
    try {
        return await _join(receiver.launch(appId), (sourceId, destinationId) => factory(sourceId, destinationId));
    }
    finally {
        receiver.dispose();
    }
};
export const join = async ({ client, factory, }) => {
    const receiver = createReceiver({
        client,
        sourceId: 'sender-0',
        destinationId: 'receiver-0',
    });
    try {
        return await _join(receiver.getStatus(), (sourceId, destinationId) => factory(sourceId, destinationId));
    }
    finally {
        receiver.dispose();
    }
};
//# sourceMappingURL=application.js.map