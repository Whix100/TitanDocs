---
title: Event Announcements Module
---

## Events

### User Events
- User Joined (user_joined): User joined the server
- User Left (user_left): User left the server
- User Muted (user_muted): User is muted by the mute command
- User Unmuted (user_unmuted): User is unmuted by the unmute command
- User Banned (user_banned): User is banned from the server
- User Unbanned (user_unbanned): User is unbanned from the server
- User Is Typing (user_typing): User is typing in a channel in the server

### Message Events
- Message Received (message_received): A message is received by Titan
- Message Updated (message_updated): A message is edited
- Message Deleted (message_deleted): A message is deleted

### Reaction Events
- Reaction Added (reaction_added): Reaction is added to a message
- Reaction Removed (reaction_removed): Reaction is removed from a message
- Reactions Cleared (reactions_cleared): All the reactions are cleared from a message

### Channel Events
- Channel Created (channel_created): Channel is created in a server
- Channel Updated (channel_updated): Channel is edited
- Channel Destroyed (channel_destroyed): Channel is deleted from a server

### Invite Events
- Invite Created (invite_created): Invite is created
- Invite Deleted (invite_deleted): Invite is deleted

### Role Events
- Role Created (role_created): Role is created
- Role Updated (role_updated): Role is edited
- Role Deleted (role_deleted): Role is deleted

### Bot Events
- Bot Announcements (bot_announcements): Titan has an announcement
- Bot Command Executed (bot_command_executed): Titan has executed a command in the server

:::info

You cannot set this event to none. Titan's announcements can be important for anyone using it so if you unsubscribe a channel from bot announcements, then Titan will send the announcements in the default channel of the server.

:::

### Birthdays
- Birthday (birthdays): A user in the server has a birthday

## Commands
- `t!subscriptions`: See a list of subscriptions set in this server.
- `t!subscribe <events>`: Subscribe the current channel to the given event(s). Can be separated by spaces, commas, slashes, backslashes, pipes, colons, or semicolons.
- `t!subscribe birthday <time>`: Set the time that Titan should announce birthdays for the day.
- `t!unsubscribe <events>`: Unubscribe the current channel from the given event(s). Can be separated by spaces, commas, slashes, backslashes, pipes, colons, or semicolons.
