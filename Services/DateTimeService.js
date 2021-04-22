
function getDate(date_ob)
{
	let date = ("0" + date_ob.getDate()).slice(-2);

	// current month
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

	// current year
	let year = date_ob.getFullYear();

	return year + "-" + month + "-" + date;
}

function getTime(date_ob)
{
	// current hours
	let hours = date_ob.getHours();

	// current minutes
	let minutes = date_ob.getMinutes();

	// current seconds
	let seconds = date_ob.getSeconds();

	return hours + ":" + minutes + ":" + seconds;
}

module.exports = {getDate: getDate, getTime: getTime}