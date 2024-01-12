"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReceiver = void 0;
const zod_1 = require("zod");
const cast_types_1 = require("../cast-types");
const utils_1 = require("../utils");
const StatusResponse$ = zod_1.z.object({ status: cast_types_1.ReceiverStatus$ });
const createReceiver = ({ client, sourceId = 'sender-0', destinationId = 'receiver-0', }) => {
    const channel = client.createChannel(sourceId, destinationId, 'urn:x-cast:com.google.cast.receiver');
    const getStatus = async () => channel.sendWithResponse({ data: { type: 'GET_STATUS' }, type: StatusResponse$ }).then(utils_1.Result.map(r => r.status));
    return {
        getStatus,
        isAppAvailable: (appId) => channel
            .sendWithResponse({
            data: { type: 'GET_APP_AVAILABILITY', appId: [appId] },
            type: zod_1.z.object({ availability: zod_1.z.record(zod_1.z.union([zod_1.z.literal('APP_AVAILABLE'), zod_1.z.literal('APP_UNAVAILABLE')])) }),
        })
            .then(utils_1.Result.map(e => e.availability[appId] === 'APP_AVAILABLE')),
        getVolume: () => getStatus().then(utils_1.Result.map(r => r.volume)),
        setVolume: async (options) => {
            if (options.level !== undefined && (options.level < 0 || options.level > 1))
                throw new Error('level must be between 0 and 1');
            return channel
                .sendWithResponse({
                data: { type: 'SET_VOLUME', volume: options },
                type: StatusResponse$,
            })
                .then(utils_1.Result.map(e => e.status.volume));
        },
        stop: (sessionId) => channel
            .sendWithResponse({ data: { type: 'STOP', sessionId }, type: StatusResponse$ })
            .then(utils_1.Result.map(r => r.status)),
        launch: (appId) => channel.sendWithResponse({ data: { type: 'LAUNCH', appId }, type: StatusResponse$ }).then(utils_1.Result.map(r => r.status)),
        dispose: () => channel.close(),
    };
};
exports.createReceiver = createReceiver;
//# sourceMappingURL=receiver.js.map