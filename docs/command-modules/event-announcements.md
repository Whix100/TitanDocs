---
title: Event Announcements Module
---

## Events

### User Events
- User Joined (user_joined): User joined the server
- User Left (user_left): User left the server
- User Muted (user_muted): User is muted by the mute command
- User Unmuted (user_unmuted): User is unmuted by the unmute command

### Message Events
- Message Updated (message_updated): A message is edited
- Message Deleted (message_deleted): A message is deleted

### Invite Events
- Invite Created (invite_created): Invite is created
- Invite Deleted (invite_deleted): Invite is deleted

### Bot Events
- Bot Announcements (bot_announcements): Titan has an announcement

:::info

You cannot set this event to none. Titan's announcements can be important for anyone using it so if you unsubscribe a channel from bot announcements, then Titan will send the announcements in the default channel of the server.

:::

- Bot Command Executed (bot_command_executed): Titan has executed a command in the server

### Birthdays
- Birthday (birthdays): A user in the server has a birthday

## Commands
- `t!subscriptions`: See a list of subscriptions set in this server.
- `t!subscribe <events>`: Subscribe the current channel to the given event(s). Can be separated by spaces, commas, slashes, backslashes, pipes, colons, or semicolons.
- `t!subscribe birthday <time>`: Set the time that Titan should announce birthdays for the day.
- `t!unsubscribe <events>`: Unubscribe the current channel from the given event(s). Can be separated by spaces, commas, slashes, backslashes, pipes, colons, or semicolons.
