"use strict";
let postSlack = require("./slackPost.js");
postSlack("こんにちは！")
.then((res)=>{
	console.log(res);
	return postSlack("続けてこんにちは！")
})
.then((res)=>{
	console.log(res);
})
.catch((err)=>{
	console.log(err);
});
