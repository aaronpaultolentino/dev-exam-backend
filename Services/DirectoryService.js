const path = require('path');

function getAppRootFolder()
{
	return path.dirname(require.main.filename || process.mainModule.filename);
}

module.exports = {
	getAppRootFolder: getAppRootFolder
}