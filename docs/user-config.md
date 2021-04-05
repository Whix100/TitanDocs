---
title: User Configs
---

Interacting with your user configs is done through the `t!uconfig` command. If you want to view your current configs, use the `t!uconfig` command with no arguments.

## Available Configs
- Color (color): This is the color you want Titan to use in dms and in servers without a server color assigned.
- Can DM (can_dm): This is whether or not Titan is allowed to DM you.
- Can Mention (can_mention): This is whether or not Titan has permission to mention you in messages.
- Can Announce Birthday (can_announce_birthday): This is whether or not Titan has permission to announce your birthday in servers.
- Time Zone (time_zone): This is the time zone that Titan uses when displaying times in responses.

## Settings Up Configs
To modify a server config, use the config command with the config id and the value you want it to have. Command formats for each config can be seen below.
- `t!uconfig color <color>`: Set the color you want Titan to use in dms and in servers without a server color assigned.
- `t!uconfig can_dm <permission>`: Set whether Titan is allowed to dm you. Some commands will not work properly if this is set to false. Allows true or false.
- `t!uconfig can_mention <permission>`: Set whether Titan is allowed to mention you in responses. Accepts true or false.
- `t!uconfig can_announce_birthday <permission>`: Set whether Titan can announce your birthday in servers that have birthday announcements setup. Accepts true or false.
- `t!uconfig time_zone <time_zone>`: Set what time zone Titan uses in responses. Please visit https://kevinnovak.github.io/Time-Zone-Picker/ for help picking a time zone.

## Resetting Configs
You can reset a user config to its default value by using the command `t!uconfig reset <config_id>`. You could also instead of using a config id, use the command `t!uconfig reset all` to reset all of your configs to default values.