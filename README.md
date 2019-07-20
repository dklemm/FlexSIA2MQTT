# FlexSIA2MQTT
Galaxy Flex SIA to MQTT server

TypeScript/Node service brokers SIA Event from Honeywell Galaxy Flex Alarm to mqtt

Requires (tested with)
* Galaxy Flex 20, 50 or 100 with v3 Firmware
* Galaxy Flex Ethernet Module A083-00-02

https://www.security.honeywell.com/uk/All-Categories/intruder-detection-systems/control-panels/galaxy-flex-series

# Docker 

docker run sia2mqtt -p 10500:10500 -v /config.yml:/config.yml
