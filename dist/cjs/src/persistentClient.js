"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const castv2_1 = require("castv2");
const debug_1 = __importDefault(require("debug"));
const channel_1 = require("./channel");
const utils_1 = require("./utils");
const debug = (0, debug_1.default)('persistent-client');
const connect = ({ host, client = new castv2_1.Client(), retryDelay = 5000, port = 8009, timeout = 3000, }) => {
    let shouldReconnect = true;
    let isConnected = false;
    const close = () => {
        debug('permanently closing client...');
        shouldReconnect = false;
        client.close();
    };
    const sendHeartbeat = () => client.send('sender-0', 'receiver-0', 'urn:x-cast:com.google.cast.tp.heartbeat', JSON.stringify({ type: 'PING' }));
    const send = client.send.bind(client);
    return (0, utils_1.withTimeout)({ timeout })(new Promise(resolve => {
        if (isConnected)
            return resolve({ close, send, createChannel: (0, channel_1.createChannel)(client) });
        client.connect({ host, port }, () => {
            isConnected = true;
            sendHeartbeat();
            const timer = setInterval(sendHeartbeat, 5000);
            client.once('close', () => {
                isConnected = false;
                clearInterval(timer);
                if (shouldReconnect) {
                    debug(`client reconnecting in ${retryDelay}ms`);
                    setTimeout(() => {
                        (0, exports.connect)({ host, client, retryDelay, port, timeout });
                    }, retryDelay);
                }
            });
            resolve({ close, send, createChannel: (0, channel_1.createChannel)(client) });
        });
    }));
};
exports.connect = connect;
//# sourceMappingURL=persistentClient.js.map