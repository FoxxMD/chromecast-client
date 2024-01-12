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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultMediaApp = exports.Dashcast = exports.Application = exports.MediaController = exports.ReceiverController = exports.Result = exports.createPlatform = exports.connect = void 0;
__exportStar(require("./cast-types"), exports);
var persistentClient_1 = require("./persistentClient");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return persistentClient_1.connect; } });
var platform_1 = require("./platform");
Object.defineProperty(exports, "createPlatform", { enumerable: true, get: function () { return platform_1.createPlatform; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "Result", { enumerable: true, get: function () { return utils_1.Result; } });
exports.ReceiverController = __importStar(require("./controllers/receiver"));
exports.MediaController = __importStar(require("./controllers/media"));
exports.Application = __importStar(require("./apps/application"));
exports.Dashcast = __importStar(require("./apps/dashcastApp"));
exports.DefaultMediaApp = __importStar(require("./apps/defaultMediaApp"));
//# sourceMappingURL=index.js.map