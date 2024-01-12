"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
(async () => {
    const client = await (0, src_1.connect)({ host: '192.168.1.150' });
    const platform = await (0, src_1.createPlatform)(client);
    const status = await platform.getStatus();
    console.log('current status', status);
    platform.close();
    client.close();
})();
//# sourceMappingURL=platform.js.map