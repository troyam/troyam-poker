class MessageHelpers {
  // Public: Checks whether the message text contains an @-mention for the
  // given user.
  static containsUserMention(messageText, userId) {
    let userTag = `<@${userId}>`;
    let message = messageText && messageText.startsWith(userTag);
    console.log(message)
    return message;
  }
}

module.exports = MessageHelpers;
