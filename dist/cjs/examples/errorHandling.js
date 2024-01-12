"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
(async () => {
    const client = await (0, src_1.connect)({ host: '192.168.1.150' });
    const platform = await (0, src_1.createPlatform)(client);
    const status = await platform.getStatus();
    // error handling using try/catch/throw
    try {
        const unwrappedStatus = status.unwrapAndThrow();
        console.log('try/catch', unwrappedStatus);
    }
    catch (e) {
        console.error('try/catch', e);
    }
    // error handling without throwing by checking Result type
    const unwrappedStatus = status.unwrapWithErr();
    if (!unwrappedStatus.isOk) {
        // value is of type Error, so log it
        console.error('err check', unwrappedStatus.value);
    }
    else {
        // value is of type ReceiverStatus, so log it
        console.log('err check', unwrappedStatus.value);
    }
    // use successful Result without unwrapping
    // if status failed, map will not run and throw, it will forward the error
    const volume = status.map(r => r.volume.level);
    const { isOk, value } = volume.unwrapWithErr();
    if (!isOk) {
        // value is of type Error, so log it
        console.error('mapping', value);
    }
    else {
        // value is of type ReceiverStatus, so log it
        console.log('mapping', value);
    }
    platform.close();
    client.close();
})();
//# sourceMappingURL=errorHandling.js.map