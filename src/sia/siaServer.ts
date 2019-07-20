import {createServer, Server, Socket} from 'net';
import {SiaServerConfig} from "../config";
import {SIABlock} from "./siaBlock";
import {FunctionCodes} from "../functionCodes";
import {ZoneEvent} from "../events/ZoneEvent";
import * as events from "events";

const ACK_SIA_BLOCK = new SIABlock(FunctionCodes.acknoledge, "");

export declare type OnZoneEventCallback = (zoneEvent: ZoneEvent) => void

export class SIAServer extends events.EventEmitter {

    server : Server;

    constructor(config: SiaServerConfig) {
        super();
        this.server = createServer();
        this.server.on('connection', (socket: Socket) => this.handleConnection(socket));
        this.server.listen(config.port, config.hostname, () => this.listening());
    }

    listening() {
        console.log('server listening to %j', this.server.address());
        this.emit("Ready");
    }

    handleConnection(socket: Socket) {
        const emitter = this;
        const handleData = function (data: Buffer) {
            const block = SIABlock.fromBuffer(data);

            if (block.funcCode == FunctionCodes.new_event) {
                let zoneEvent = ZoneEvent.tryParse(block.data);
                if (zoneEvent) {
                    console.log(zoneEvent);
                    emitter.emit("ZoneEvent", zoneEvent);
                }
            }
            socket.write(ACK_SIA_BLOCK.toBuffer());
        };
        socket.on('data', handleData);
    }
}
