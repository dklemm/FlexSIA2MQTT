
const regex = /^ti(?<time>[0-9]{2}:[0-9]{2})\/(?<state>[a-zA-Z]{2})(?<zone>[0-9]{4})$/mg;

export class ZoneEvent {

    constructor(public time: string, public zone: string, public state: string  ) {

    }

    static tryParse(eventData: string) : ZoneEvent {

        let parsed = regex.exec(eventData);
        regex.lastIndex = 0;

        if (parsed) {
            return new ZoneEvent(parsed.groups.time, parsed.groups.zone, parsed.groups.state)
        } else {
            return null
        }
    }
}
