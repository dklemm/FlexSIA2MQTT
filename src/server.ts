import {Publisher} from "./publisher";
import {ZoneEvent} from "./events/ZoneEvent";
import {getConfig} from "./Config";
import {SIAServer} from "./sia/siaServer";
import {getZoneEventHandler} from "./handlers/ZoneEventHandler";

const config = getConfig();
const publisher = new Publisher(config.mqtt);
const siaServer = new SIAServer(config.sia);

siaServer.on('Ready', async function () {
    await publisher.publishOnline();
});



siaServer.on('ZoneEvent', async function (event: ZoneEvent) {

    const zoneConfig = config.zones[event.zone];
    const handler = getZoneEventHandler(zoneConfig);

    await handler.handleZoneEvent(event, publisher);
});
