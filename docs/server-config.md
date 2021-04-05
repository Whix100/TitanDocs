---
title: Server Configs
---

Interacting with your server configs is done through the `t!config` command. If you want to view your server's current configs, use the `t!config` command with no arguments in that server.

## Available Configs
- Prefix (prefix): This is the prefix that Titan uses for commands.
- Color (color): This is the color that Titan uses for various things while in this server.
- Admin Role (admin_role): Users with this role, or with the Administrator permission, can use admin commands.
- Muted Role (muted_role): Users with this role cannot speak or send messages.
- Time Zone (time_zone): This is the time zone that Titan uses when displaying times in the server.
- Force Server Time (force_server_time): Tell Titan whether or not it should use the server time zone or user time zone in command responses.

## Settings Up Configs
To modify a server config, use the config command with the config id and the value you want it to have. Command formats for each config can be seen below.
- `t!config prefix <prefix>`: Assign the prefix you want Titan to use.
- `t!config color <color>`: Set the color you want Titan to use in this server. Currently supports color names and hexcodes. Accepts color name or hex code.
- `t!config admin_role <role>`: Set the role that Titan uses to determine who are the administrators of the server.
- `t!config muted_role <role>`: Set the role that prevents users from speaking and sending messages.
- `t!config time_zone <time_zone>`: Set what time zone Titan uses in responses in the server. Please visit https://kevinnovak.github.io/Time-Zone-Picker/ for help picking a time zone.
- `t!config force_server_time <permission>`: Set whether Titan uses the server's time zone even if a user has their own time zone set. Accepts true or false.

## Resetting Configs
You can reset a server config to its default value by using the command `t!config reset <config_id>`. You could also instead of using a config id, use the command `t!config reset all` to reset all of the server's configs to default values.