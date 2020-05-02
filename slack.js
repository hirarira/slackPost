'use strict';

class Slack {
  constructor(token) {
    if(!token) {
      console.log(token);
      throw new Error('token is noting!');
    }
    this.token = token;
    this.postUrl = 'https://slack.com/api/chat.postMessage';
    this.request = require('request-promise');
    this.username = '';
    this.iconEmoji = '';
    this.channel = '#random'
    this.asUser = true 
  }

  setAsUser(asUser) {
    this.asUser = asUser;
  }

  setUserName(name) {
    this.username = name;
  }

  setIconEmoji(emoji) {
    this.iconEmoji = emoji;
  }

  setPostChannel(channel) {
    this.channel = channel;
  }

  async postSlack(message) {
    const params = {
      method: 'post',
      uri: this.postUrl,
      form: {
          token: this.token,
          channel: this.channel,
          text: message,
          parse: 'full',
          username: this.username,
          icon_emoji: this.iconEmoji,
          as_user: this.asUser
      }
    };
    await this.request(params)
    .then((res)=>{
        console.log(res);
    })
    .catch((e)=>{
        console.error(e);
    });
  }
}

module.exports = Slack;
