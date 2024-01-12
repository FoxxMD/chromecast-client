import * as Application from './application';
const createDashcast = (client) => async (sourceId, destinationId) => {
    const channel = client.createChannel(sourceId, destinationId, 'urn:x-cast:es.offd.dashcast');
    return {
        loadUrl: ({ url, force = false, reload = false, reloadTime = 0 }) => channel.send({ url, force, reload, reload_time: reloadTime }),
    };
};
export const launchAndJoin = ({ client }) => Application.launchAndJoin({
    client,
    appId: 'CC1AD845',
    factory: createDashcast(client),
});
export const join = async ({ client }) => Application.join({
    client,
    factory: createDashcast(client),
});
//# sourceMappingURL=dashcastApp.js.map