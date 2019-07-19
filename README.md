# FlexSIA2MQTT
Galaxy Flex SIA to MQTT server

TypeScript/Node service brokers SIA Event from Honeywell Galaxy Flex Alarm to mqtt

Requires (tested with)
* Galaxy Flex 20, 50 or 100 with v3 Firmware
* Galaxy Flex Ethernet Module A083-00-02

https://www.security.honeywell.com/uk/All-Categories/intruder-detection-systems/control-panels/galaxy-flex-series

# Hints and Tips

I'm not an expert in the Galaxy Flex programming but have learnt some 

* Zones are assigned a 'Zone Function' e.g. Entry/Exit, Security, Logging. To use a zone for
logging and security etc you must create a Custom Zone Function, you are limited to 2 Custom Zone Functions (A & B).
This is a real pain because I want ALL sensors to Log ALL off the time.
* The save battery the wireless PIR Module IR8M has a 10min wait between detections,
only any issue if your using it for logging.



