"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = exports.launchAndJoin = void 0;
const Application = __importStar(require("./application"));
const createDashcast = (client) => async (sourceId, destinationId) => {
    const channel = client.createChannel(sourceId, destinationId, 'urn:x-cast:es.offd.dashcast');
    return {
        loadUrl: ({ url, force = false, reload = false, reloadTime = 0 }) => channel.send({ url, force, reload, reload_time: reloadTime }),
    };
};
const launchAndJoin = ({ client }) => Application.launchAndJoin({
    client,
    appId: 'CC1AD845',
    factory: createDashcast(client),
});
exports.launchAndJoin = launchAndJoin;
const join = async ({ client }) => Application.join({
    client,
    factory: createDashcast(client),
});
exports.join = join;
//# sourceMappingURL=dashcastApp.js.map