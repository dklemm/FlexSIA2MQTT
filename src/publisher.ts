import { IClientOptions, IClientPublishOptions} from "mqtt";
import MQTT, {AsyncMqttClient} from 'async-mqtt';
import {ZoneEvent} from "./events/ZoneEvent";
import {MqttConfig} from "./config";

export class Publisher {

    mqttClient: AsyncMqttClient;

    constructor(private config: MqttConfig) {

        const options = {
            will: {
                topic: `${config.baseTopic}/bridge/state`,
                payload: 'offline',
                retain: true,
            },
        } as IClientOptions;

        this.mqttClient = MQTT.connect(config.brokerUrl, options);
        //this.mqttClient.on('connect', () => this.publishOnline());
    }

    public async publishOnline() : Promise<any> {

        try {
            await this.mqttClient.publish(`${this.config.baseTopic}/bridge/state`,
                'online',
                { retain : true } as IClientPublishOptions);
        } catch(ex) {
            console.log(ex);
        }
    }

    public async publish(subTopic: string, data: object) {
        await this.mqttClient.publish(`${this.config.baseTopic}/${subTopic}`, JSON.stringify(data))
    }
}
