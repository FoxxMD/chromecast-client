"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = exports.launchAndJoin = void 0;
const receiver_1 = require("../controllers/receiver");
const utils_1 = require("../utils");
const _getJoinableTransportId = (status) => {
    const app = status.applications === undefined
        ? undefined
        : status.applications.find(a => a.namespaces.map(e => e.name).includes('urn:x-cast:com.google.cast.media'));
    return app === undefined ? utils_1.Result.Err(new Error('failed to find joinable application')) : utils_1.Result.Ok(app.transportId);
};
const _join = async (status, factory) => {
    const transportIdMaybe = await status.then(utils_1.Result.flatMap(_getJoinableTransportId)).then(r => r.unwrapWithErr());
    return transportIdMaybe.isOk
        ? utils_1.Result.Ok(await factory((0, utils_1.generateRandomSourceId)(), transportIdMaybe.value))
        : utils_1.Result.Err(transportIdMaybe.value);
};
const launchAndJoin = async ({ client, appId, factory, }) => {
    const receiver = (0, receiver_1.createReceiver)({
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
exports.launchAndJoin = launchAndJoin;
const join = async ({ client, factory, }) => {
    const receiver = (0, receiver_1.createReceiver)({
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
exports.join = join;
//# sourceMappingURL=application.js.map