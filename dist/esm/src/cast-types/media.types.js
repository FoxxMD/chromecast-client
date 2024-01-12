import { z } from 'zod';
import { IdleReason$, MediaInformation$ as MessageMediaInformation$, PlayerState$ as MessagePlayerState$, } from './messages.types';
// https://developers.google.com/cast/docs/media/messages#MediaInformation
export const MediaInformation$ = MessageMediaInformation$;
export var SupportedMediaCommands;
(function (SupportedMediaCommands) {
    SupportedMediaCommands[SupportedMediaCommands["PAUSE"] = 1] = "PAUSE";
    SupportedMediaCommands[SupportedMediaCommands["SEEK"] = 2] = "SEEK";
    SupportedMediaCommands[SupportedMediaCommands["STREAM_VOLUME"] = 4] = "STREAM_VOLUME";
    SupportedMediaCommands[SupportedMediaCommands["STREAM_MUTE"] = 8] = "STREAM_MUTE";
    SupportedMediaCommands[SupportedMediaCommands["SKIP_FORWARD"] = 16] = "SKIP_FORWARD";
    SupportedMediaCommands[SupportedMediaCommands["SKIP_BACKWARD"] = 32] = "SKIP_BACKWARD";
})(SupportedMediaCommands || (SupportedMediaCommands = {}));
export const SupportedMediaCommands$ = z.nativeEnum(SupportedMediaCommands);
// https://developers.google.com/cast/docs/media/messages#Volume
export const Volume$ = z.object({ level: z.number().nullish(), muted: z.boolean().nullish() });
export const PlayerState$ = MessagePlayerState$;
// https://developers.google.com/cast/docs/media/messages#MediaStatus
export const MediaStatus$ = z.object({
    currentTime: z.number(),
    customData: z.record(z.unknown()).nullish(),
    idleReason: IdleReason$.nullish(),
    media: MediaInformation$.nullish(),
    mediaSessionId: z.number(),
    playbackRate: z.number(),
    playerState: PlayerState$,
    supportedMediaCommands: z.number(),
    volume: Volume$.nullish(),
});
//# sourceMappingURL=media.types.js.map