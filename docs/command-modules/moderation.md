---
title: Moderation Module
---

## Blacklist
- `t!blacklist`: Get a list of the terms currently on the server's blacklist.
- `t!blacklist <terms>`: Add or remove terms to/from the server's blacklist. Can be separated by spaces, commas, slashes, backslashes, pipes, colons, or semicolons.

## Mute Users
- `t!mute <user>`: Mute the given user. Alternatively, you can just give the user the muted role. Only works if a muted role has been assigned already.
- `t!unmute <user>`: Unmute the given user. Alternatively, you can just remote the muted role from the user. Only works if a muted role has been assigned already.

## Bot Messages
- `t!message <channel> <content>`: Have Titan send a message in a certain channel.
- `t!embed <channel> <json>`: Have Titan send an embeded message in a certain channel using the json code provided.
