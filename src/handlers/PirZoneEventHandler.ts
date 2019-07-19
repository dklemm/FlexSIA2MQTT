import {ZoneEventHandler} from "./ZoneEventHandler";
import {ZoneEvent} from "../events/ZoneEvent";
import {Publisher} from "../publisher";

export class PirZoneEventHandler implements ZoneEventHandler {
    handleZoneEvent(event : ZoneEvent, publisher: Publisher) : Promise<any> {
        return null;
    }
}
