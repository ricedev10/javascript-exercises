const repeatString = function (string, count) {
	let repeat = "";
	for (let i = 0; i < count; i++) repeat += string;
	return count < 0 ? "ERROR" : repeat;
};

// Do not edit below this line
module.exports = repeatString;
