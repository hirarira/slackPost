# slackPost
## node上から簡単にSlackに投稿するモジュール

* 使い方
1. 前提条件
	1. node と nvmが入っている。
	1. 動作環境（node:v8.9.1 , nvm:5.5.1)
1. `nvm install fs`
1. `nvm install request`
1. `/token/token.txt` に投稿したいSlackワークスペースのtokenを記述
	1. https://api.slack.com/custom-integrations/legacy-tokens から取ってこれる。
1. `/token/channelID.txt` に投稿したいSlackのchannel ID を記述
	1. https://api.slack.com/methods/channels.list/test から取ってこれる。
1. `node slackTalkTest.js` で投稿できる。
