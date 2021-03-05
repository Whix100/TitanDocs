# Titan Documentation
[![Discord](https://img.shields.io/discord/697526380400869386?label=Support%20Server)](https://whix100.github.io/r/ipcd)
[![Discord Bots](https://top.gg/api/widget/status/471489146238533633.svg?noavatar=true)](https://top.gg/bot/471489146238533633)
[![Discord Bots](https://top.gg/api/widget/upvotes/471489146238533633.svg?noavatar=true)](https://top.gg/bot/471489146238533633)
[![License](https://img.shields.io/badge/license-No%20License-blue)](https://choosealicense.com/no-permission/)
[![Discord Bots](https://top.gg/api/widget/owner/471489146238533633.svg?noavatar=true)](https://top.gg/bot/471489146238533633)

Titan is a multipurpose Discord bot with many features useful for running a server, moderating users, and having fun. Titan's commands are split up into modules by what the commands are used for to help users be able to find commands in the help menu and in this documentation.

## Features

Event Announcements
- User Joined
- User Left
- User Banned/Unbanned
- Message Deleted
- User Muted/UnMuted
- Bot Updated

Moderation
- User Banning
- Word Blacklist
- User Muting

Configuration
- Server Embed Color
- User Embed Color
- Server Admin Role
- Server Muted Role
- User Can be Mentioned Permission
- User Can be DMed Permission

Fun Commands
- Dice Rolling
- Coin Flipping
- Math Solving
- Joke Telling
- Magic 8ball
- Love Meter

## Commands
### Help Module
- t!help: Get a list of available command modules.
- t!help &lt;moduleid&gt;: Get a list of available commands in the module that matches the given id. The module ids are automatically generated and might change as modules are added or removed.
- t!help &lt;commands&gt;: Lists commands that match the provided commands. You can search for up to 5 commands at a time and they can be separated by many different delimiters.
### Support Module
COMING SOON
### Moderation Module
COMING SOON
### Configuration Module (Server Configs)
- t!config: See what the server's configs are set to.
- t!config prefix &lt;prefix&gt;: Set the prefix for Titan to use in a server. Titan will no longer respond to t! after this is set but will always respond to being mentioned at the beginning of a message.
- t!config color &lt;color&gt;: Set the color to be used in embedded messages. If a server color is not set, then Titan will use the color from the configs of the user executing the command or the default color.
- t!config admin_role &lt;role&gt;: Set the role for the Titan to recognize as administrators. Anyone with this role will be able to use commands from the moderation module and will be able to change the server's configs. Anyone with the Administration permission will also be able to do those things.
- t!config muted_role &lt;role&gt;: Set the role for users who are muted. Any message sent by someone with this role will automatically be deleted.
- t!config admin_log_channel &lt;channel&gt;: Set the channel for Titan to log admin actions like user banning, user muting, and message deleting.
- t!config announce_user_banned &lt;permission&gt;: Allow Titan to send a message in the admin_log_channel when a user gets banned or unbanned. Allows True or False.
- t!config announce_user_muted &lt;permission&gt;: Allow Titan to send a message in the admin_log_channel when a user gets muted or unmuted. Allows True or False.
- t!config announce_message_deleted &lt;permission&gt;: Allow Titan to send a message in the admin_log_channel when a message gets deleted. Allows True or False.
- t!config greetings_channel &lt;channel&gt;: Set the channel for Titan to announce when a user joins or leaves a server.
- t!config announce_user_joined &lt;permission&gt;:Allow Titan to send a message in the greetings_channel when someone joins the server.
- t!config announce_user_left &lt;permission&gt;:Allow Titan to send a message in the greetings_channel when someone leaves the server.
- t!config bot_announcements_channel &lt;channel&gt;: Set the channel for Titan to send announcements about itself. This is automatically set to the default channel for the server when Titan joins. This cannot be turned off because announcements from Titan are important information about updates, shutdowns, or bugs.
### Configuration Module (User Configs)
- t!uconfig: See what the server's configs are set to.
- t!uconfig color &lt;color&gt;: Set the color to be used in embedded messages. If in a server, then Titan will use the server's color unless one is not set.
- t!uconfig can_mention &lt;permission&gt;:Allow Titan to mention you in command responses. Default value: True
- t!uconfig can_dm &lt;permission&gt;:Allow Titan to send you direct messages. Default value: True
### Fun Module
- t!roll &lt;expression&gt;: Roll a die. Supports (), d, ^, *, /, !, %, +, -. (Can also do math expressions).
- t!coin: Flip a coin.
- t!math &lt;expression&gt;: Solves a math expression. Supports (), d, ^, *, /, !, %, +, -. (Can also do dice rolling).
- t!8ball &lt;question&gt;: Ask the magic 8ball something.
- t!joke: Have the bot tell you a joke.
- t!love &lt;user1&gt; &lt;user2&gt;: Get a meter of how much two users love each other. The meter is randomly generated based on mutual servers both users have in common with Titan. For each user not supplied, the bot will replace with the user executing the command. COMING SOON: Titan will also factor in if the users are relatives based on their profiles.
### Social Module
COMING SOON
