---
title: Config Module
---

## Server Configs

### Setting Configs
- `t!config prefix <prefix>`: Assign the prefix you want Titan to use.
- `t!config color <color>`: Set the color you want Titan to use in this server. Currently supports color names and hexcodes. Accepts color name or hex code.
- `t!config admin_role <role>`: Set the role that Titan uses to determine who are the administrators of the server.
- `t!config muted_role <role>`: Set the role that prevents users from speaking and sending messages.
- `t!config time_zone <time_zone>`: Set what time zone Titan uses in responses in the server. Please visit https://kevinnovak.github.io/Time-Zone-Picker/ for help picking a time zone.
- `t!config force_server_time <permission>`: Set whether Titan uses the server's time zone even if a user has their own time zone set. Accepts true or false.

### Resetting Configs
- `t!uconfig reset <config>`: Reset a user config to its default value or reset all of them by using the all argument.

### Updating Channel Permissions
- `t!update_channel_permissions`: Update the permissions of all of the channels to match the muted roles permissions.

:::tip

If you want Titan to not modify a channel's permissions, update Titan's permissions for that channel so thatnit doesn't have the Manage Channel permission or the View Channel Permission.

:::

## User Configs

### Settings Configs
- `t!uconfig color <color>`: Set the color you want Titan to use in dms and in servers without a server color assigned.
- `t!uconfig can_dm <permission>`: Set whether Titan is allowed to dm you. Some commands will not work properly if this is set to false. Allows true or false.
- `t!uconfig can_mention <permission>`: Set whether Titan is allowed to mention you in responses. Accepts true or false.
- `t!uconfig can_announce_birthday <permission>`: Set whether Titan can announce your birthday in servers that have birthday announcements setup. Accepts true or false.
- `t!uconfig time_zone <time_zone>`: Set what time zone Titan uses in responses. Please visit https://kevinnovak.github.io/Time-Zone-Picker/ for help picking a time zone.

### Resetting Configs
- `t!uconfig reset <config>`: Reset a user config to its default value or reset all of them by using the all argument.
