"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaStatus$ = exports.PlayerState$ = exports.Volume$ = exports.SupportedMediaCommands$ = exports.SupportedMediaCommands = exports.MediaInformation$ = void 0;
const zod_1 = require("zod");
const messages_types_1 = require("./messages.types");
// https://developers.google.com/cast/docs/media/messages#MediaInformation
exports.MediaInformation$ = messages_types_1.MediaInformation$;
var SupportedMediaCommands;
(function (SupportedMediaCommands) {
    SupportedMediaCommands[SupportedMediaCommands["PAUSE"] = 1] = "PAUSE";
    SupportedMediaCommands[SupportedMediaCommands["SEEK"] = 2] = "SEEK";
    SupportedMediaCommands[SupportedMediaCommands["STREAM_VOLUME"] = 4] = "STREAM_VOLUME";
    SupportedMediaCommands[SupportedMediaCommands["STREAM_MUTE"] = 8] = "STREAM_MUTE";
    SupportedMediaCommands[SupportedMediaCommands["SKIP_FORWARD"] = 16] = "SKIP_FORWARD";
    SupportedMediaCommands[SupportedMediaCommands["SKIP_BACKWARD"] = 32] = "SKIP_BACKWARD";
})(SupportedMediaCommands = exports.SupportedMediaCommands || (exports.SupportedMediaCommands = {}));
exports.SupportedMediaCommands$ = zod_1.z.nativeEnum(SupportedMediaCommands);
// https://developers.google.com/cast/docs/media/messages#Volume
exports.Volume$ = zod_1.z.object({ level: zod_1.z.number().nullish(), muted: zod_1.z.boolean().nullish() });
exports.PlayerState$ = messages_types_1.PlayerState$;
// https://developers.google.com/cast/docs/media/messages#MediaStatus
exports.MediaStatus$ = zod_1.z.object({
    currentTime: zod_1.z.number(),
    customData: zod_1.z.record(zod_1.z.unknown()).nullish(),
    idleReason: messages_types_1.IdleReason$.nullish(),
    media: exports.MediaInformation$.nullish(),
    mediaSessionId: zod_1.z.number(),
    playbackRate: zod_1.z.number(),
    playerState: exports.PlayerState$,
    supportedMediaCommands: zod_1.z.number(),
    volume: exports.Volume$.nullish(),
});
//# sourceMappingURL=media.types.js.map