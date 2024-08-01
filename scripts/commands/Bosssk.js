const fs = require("fs");
module.exports.config = {
	name: "valobasa",
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
	if(react.includes("malkha") || react.includes("kha") || react.includes("malkha")) {
		var msg = {
				body: "বস SK SHAKIL(TOM)আপনার টা ছাড়া কারো টা খাইনা🥵🥵"
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	   }
