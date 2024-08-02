const fs = require("fs");
module.exports.config = {
	name: "gf",
    version: "1.1.1",
prefix: true,
	permssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("bosgf") || react.includes("bosbou") || react.includes("boserbou")) {
		var msg = {
				body: "আমার বস SK SHAKIL(TOM)এর কোন জিএফ বা বউ নাই🥵😌"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
