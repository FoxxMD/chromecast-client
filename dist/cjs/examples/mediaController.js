"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
(async () => {
    // create a persistent client connected on a given host
    const client = await (0, src_1.connect)({ host: '192.168.1.150' });
    // launch the media app on the Chromecast and join the session (so we can control the CC)
    const controller = src_1.ReceiverController.createReceiver({ client });
    // get the volume from the chromecast and unwrap the result
    const volume = (await controller.getVolume()).unwrapAndThrow();
    // log the volume level since there weren't any errors (or it would've thrown)
    console.log(volume);
    // dispose of the controller and close the client
    controller.dispose();
    client.close();
})();
//# sourceMappingURL=mediaController.js.map