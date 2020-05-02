"use strict";
const Slack = require('./slack.js');
const slack = new Slack(process.env.RAN_TOKEN);

async function slackPostTest() {
	slack.setPostChannel('#test');
	await slack.postSlack("こんにちは！");
	// Usernameとアイコンを変えて投稿
	slack.setAsUser(false);
	slack.setIconEmoji(':smiley:');
	slack.setUserName('test');
	await slack.postSlack("こんにちは！");
}

slackPostTest();
