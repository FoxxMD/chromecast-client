"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChannel = void 0;
const zod_1 = require("zod");
const zod_validation_error_1 = require("zod-validation-error");
const utils_1 = require("./utils");
const createChannel = (client) => (sourceId, destinationId, namespace, onMessage = () => { }) => {
    let lastRequestId = 0;
    const channel = client.createChannel(sourceId, destinationId, namespace);
    client.send(sourceId, destinationId, 'urn:x-cast:com.google.cast.tp.connection', JSON.stringify({ type: 'CONNECT' }));
    channel.on('message', (data, isBroadcast) => {
        if (typeof data === 'object')
            return onMessage(data, isBroadcast);
        const json = (0, utils_1.tryParseJSON)(data);
        if (json !== undefined)
            return onMessage(json, isBroadcast);
    });
    const send = (data) => client.send(sourceId, destinationId, namespace, JSON.stringify(data));
    return {
        send: data => client.send(sourceId, destinationId, namespace, JSON.stringify(data)),
        sendWithResponse: ({ data, type = zod_1.z.any(), timeout = 5000 }) => new Promise(resolve => {
            const requestId = ++lastRequestId;
            channel.on('message', function onMessage(data) {
                const json = typeof data === 'string' ? (0, utils_1.tryParseJSON)(data) : data;
                if (json !== undefined && json.requestId === requestId) {
                    channel.removeListener('message', onMessage);
                    const parsed = type.safeParse(json);
                    if (parsed.success) {
                        resolve(utils_1.Result.Ok(parsed.data));
                    }
                    else {
                        const err = (0, utils_1.fromValidationError)((0, zod_validation_error_1.fromZodError)(parsed.error, { prefix: `response had unexpected shape` }), json);
                        resolve(utils_1.Result.Err(err));
                    }
                }
            });
            setTimeout(() => {
                channel.removeListener('message', onMessage);
                resolve(utils_1.Result.Err(new Error(`timed out for request ${requestId}`)));
            }, timeout);
            send({ ...data, requestId });
        }),
        close: () => {
            channel.close();
            channel.removeAllListeners();
        },
    };
};
exports.createChannel = createChannel;
//# sourceMappingURL=channel.js.map