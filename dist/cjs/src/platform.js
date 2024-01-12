"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlatform = void 0;
const receiver_1 = require("./controllers/receiver");
const createPlatform = (client) => {
    const receiver = (0, receiver_1.createReceiver)({ client });
    return {
        getStatus: (...args) => receiver.getStatus(...args),
        getVolume: (...args) => receiver.getVolume(...args),
        setVolume: (...args) => receiver.setVolume(...args),
        isAppAvailable: (...args) => receiver.isAppAvailable(...args),
        stopRunningApp: (...args) => receiver.stop(...args),
        launchApp: (...args) => receiver.launch(...args),
        createChannel: (...args) => client.createChannel(...args),
        close: () => receiver.dispose(),
    };
};
exports.createPlatform = createPlatform;
//# sourceMappingURL=platform.js.map