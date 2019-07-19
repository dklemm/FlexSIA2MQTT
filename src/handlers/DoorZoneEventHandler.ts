import {ZoneEventHandler} from "./ZoneEventHandler";
import {ZoneEvent} from "../events/ZoneEvent";
import {Publisher} from "../publisher";
import {ZoneConfig} from "../config";

const stateMap : { [state: string] : string } = {
    "RO" : "open",
    "RC" : "closed"
};

export class DoorZoneEventHandler implements ZoneEventHandler {

    constructor(private zoneConfig : ZoneConfig) {}

    async handleZoneEvent(event : ZoneEvent, publisher: Publisher) : Promise<any> {
        return await publisher.publish(`zones/${this.zoneConfig.name}`, {
            state : stateMap[event.state]
        });
    }
}
