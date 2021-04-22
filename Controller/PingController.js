const {getDate, getTime} = require('../Services/DateTimeService.js');
const {log} = require('../Services/LoggerService.js');

function ping(request)
{
	let date_ob = new Date();

	//Get Date/Time
	let date = getDate(date_ob);
	let time = getTime(date_ob);

	//Log here
	log(request);
	
	return {
		date: date,
		time: time,
	}
}



module.exports = {
	ping: ping
}