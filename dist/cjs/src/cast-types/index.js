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
exports.ReceiverStatus$ = exports.Application$ = exports.Volume$ = exports.VolumeControlType$ = exports.Messages = exports.Media = void 0;
exports.Media = __importStar(require("./media.types"));
exports.Messages = __importStar(require("./messages.types"));
const zod_1 = require("zod");
const utils_1 = require("../utils");
// https://developers.google.com/cast/docs/reference/web_sender/chrome.cast#.VolumeControlType
exports.VolumeControlType$ = (0, utils_1.caseInsensitiveEnum)(['ATTENUATION', 'FIXED', 'MASTER']);
// https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.Volume
exports.Volume$ = zod_1.z.object({
    controlType: exports.VolumeControlType$,
    level: zod_1.z.number().nullish(),
    muted: zod_1.z.boolean().nullish(),
    stepInterval: zod_1.z.number(),
});
// https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.Session
// https://github.com/vitalidze/chromecast-java-api-v2/blob/master/src/main/java/su/litvak/chromecast/api/v2/Application.java
exports.Application$ = zod_1.z.object({
    appId: zod_1.z.string(),
    displayName: zod_1.z.string(),
    iconUrl: zod_1.z.string().nullish(),
    isIdleScreen: zod_1.z.boolean().nullish(),
    launchedFromCloud: zod_1.z.boolean().nullish(),
    namespaces: zod_1.z.array(zod_1.z.object({ name: zod_1.z.string() })),
    sessionId: zod_1.z.string(),
    statusText: zod_1.z.string().nullish(),
    transportId: zod_1.z.string(),
});
exports.ReceiverStatus$ = zod_1.z.object({
    applications: zod_1.z.array(exports.Application$).optional(),
    volume: exports.Volume$,
});
//# sourceMappingURL=index.js.map