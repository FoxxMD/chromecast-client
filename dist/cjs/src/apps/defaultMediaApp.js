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
const media_1 = require("../controllers/media");
const Application = __importStar(require("./application"));
const launchAndJoin = ({ client }) => Application.launchAndJoin({
    client,
    appId: 'CC1AD845',
    factory: async (sourceId, destinationId) => (0, media_1.createMediaController)({ client, sourceId, destinationId }),
});
exports.launchAndJoin = launchAndJoin;
const join = ({ client }) => Application.join({
    client,
    factory: async (sourceId, destinationId) => (0, media_1.createMediaController)({ client, sourceId, destinationId }),
});
exports.join = join;
//# sourceMappingURL=defaultMediaApp.js.map