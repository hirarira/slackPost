# slackPost
## node上から簡単にSlackに投稿するモジュール

* 使い方
1. `npm install`
1. 以下のコードで実行可能

```javascript
const Slack = require('./slack.js');
const slack = new Slack(process.env.SLACK_TOKEN);

slack.setPostChannel('#test');
await slack.postSlack("こんにちは！");

// Usernameとアイコンを変えて投稿
slack.setAsUser(false);
slack.setIconEmoji(':smiley:');
slack.setUserName('test');
await slack.postSlack("こんにちは！");
```
