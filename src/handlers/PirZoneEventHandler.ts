import {ZoneEventHandler} from "./ZoneEventHandler";
import {ZoneEvent} from "../events/ZoneEvent";
import {Publisher} from "../publisher";
import {ZoneConfig} from "../config";

const stateMap : { [state: string] : string } = {
    "RO" : "motion"
};

export class PirZoneEventHandler implements ZoneEventHandler {

  constructor(private zoneConfig : ZoneConfig) {}

  async handleZoneEvent(event : ZoneEvent, publisher: Publisher) : Promise<any> {

      let state = stateMap[event.state];

      if (state) {
        return await publisher.publish(`zones/${this.zoneConfig.name}`, {
            state : state
        });
      }
  }
}
