
import yaml from 'js-yaml';
import fs from 'fs';

export interface Config {
    mqtt: MqttConfig
    sia: SiaServerConfig
    zones: { [zoneId: string] : ZoneConfig; };
}

export interface SiaServerConfig {
    port: number
    hostname: string
}

export interface MqttConfig {
    brokerUrl: string
    baseTopic: string
}

export interface ZoneConfig {
    name: string;
    handler: string;
}

export function getConfig() : Config {
    return yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'));
}
