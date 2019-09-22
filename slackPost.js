"use strict";
function getToken(path){
	let fs = require('fs');
	let buf = fs.readFileSync(path);
	let token = buf.toString();
	token = token.replace(/\n/,"");
	return token;
}
// Slack投稿テスト
module.exports = (post_str) => {
	return new Promise((resolve, reject)=>{
		// 投稿するチャンネルID
		const channelID = process.env.SLACK_POST_CHANNNEL;
		const token = process.env.SLACK_TOKEN;
		const request = require('request');
		let set_url = "https://slack.com/api/chat.postMessage?token=" + token;
		set_url += "&channel=" + channelID + "&as_user=true&pretty=1&text=";
		set_url += encodeURIComponent(post_str);
		request(set_url, function (error, response, body) {
		if(!error && response.statusCode == 200){
				resolve(JSON.parse(body));
			}
			else{
				reject('error: '+ response.statusCode);
			}
		});
	});
}

