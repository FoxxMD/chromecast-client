import { createReceiver } from './controllers/receiver';
export const createPlatform = (client) => {
    const receiver = createReceiver({ client });
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
//# sourceMappingURL=platform.js.map