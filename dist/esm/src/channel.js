import { z } from 'zod';
import { fromZodError } from 'zod-validation-error';
import { fromValidationError, Result, tryParseJSON } from './utils';
export const createChannel = (client) => (sourceId, destinationId, namespace, onMessage = () => { }) => {
    let lastRequestId = 0;
    const channel = client.createChannel(sourceId, destinationId, namespace);
    client.send(sourceId, destinationId, 'urn:x-cast:com.google.cast.tp.connection', JSON.stringify({ type: 'CONNECT' }));
    channel.on('message', (data, isBroadcast) => {
        if (typeof data === 'object')
            return onMessage(data, isBroadcast);
        const json = tryParseJSON(data);
        if (json !== undefined)
            return onMessage(json, isBroadcast);
    });
    const send = (data) => client.send(sourceId, destinationId, namespace, JSON.stringify(data));
    return {
        send: data => client.send(sourceId, destinationId, namespace, JSON.stringify(data)),
        sendWithResponse: ({ data, type = z.any(), timeout = 5000 }) => new Promise(resolve => {
            const requestId = ++lastRequestId;
            channel.on('message', function onMessage(data) {
                const json = typeof data === 'string' ? tryParseJSON(data) : data;
                if (json !== undefined && json.requestId === requestId) {
                    channel.removeListener('message', onMessage);
                    const parsed = type.safeParse(json);
                    if (parsed.success) {
                        resolve(Result.Ok(parsed.data));
                    }
                    else {
                        const err = fromValidationError(fromZodError(parsed.error, { prefix: `response had unexpected shape` }), json);
                        resolve(Result.Err(err));
                    }
                }
            });
            setTimeout(() => {
                channel.removeListener('message', onMessage);
                resolve(Result.Err(new Error(`timed out for request ${requestId}`)));
            }, timeout);
            send({ ...data, requestId });
        }),
        close: () => {
            channel.close();
            channel.removeAllListeners();
        },
    };
};
//# sourceMappingURL=channel.js.map