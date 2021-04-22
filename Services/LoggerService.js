const fs = require('fs');

const {getAppRootFolder} = require('./DirectoryService.js');

function log(request)
{
	let rootDirectory = getAppRootFolder();

	//save other client stuff here!
	let clientInfo = JSON.stringify({
		'ip': request.connection.remoteAddress
	});
	
	fs.writeFile(rootDirectory + '/logs.txt', clientInfo, function (err) {
	  if (err) return console.log(err);
	  console.log(clientInfo);
	});
}

module.exports = {log: log}
