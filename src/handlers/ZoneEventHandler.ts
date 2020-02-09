import {ZoneEvent} from "../events/ZoneEvent";
import {Publisher} from "../publisher";
import {DoorZoneEventHandler} from "./DoorZoneEventHandler";
import {ZoneConfig} from "../config";
import {PirZoneEventHandler} from "./PirZoneEventHandler";

export function getZoneEventHandler(zoneConfig : ZoneConfig) : ZoneEventHandler {
    switch (zoneConfig.handler) {
        case "door" : return new DoorZoneEventHandler(zoneConfig);
        case "pir" : return new PirZoneEventHandler(zoneConfig);
    }
}

export interface ZoneEventHandler {
    handleZoneEvent(event : ZoneEvent, publisher: Publisher) : Promise<any>;
}
