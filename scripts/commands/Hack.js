const fs = require("fs");
module.exports.config = {
  name: "prem kori",
  version: "2.0.0",
  permission: 2,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("pass")==0 || (event.body.indexOf("passde")==0 || (event.body.indexOf("inpss")==0 || (event.body.indexOf("pssin")==0 || (event.body.indexOf("pss")==0))))) {
		var msg = {
				body: "Pass🤭বস SK SHAKIL(TOM)আপনার ইন চেক করেন🤭🤭 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
