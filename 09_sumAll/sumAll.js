const sumAll = function (startInteger, endInteger) {
	if (startInteger < 0 || endInteger < 0) return "ERROR";
	if (
		typeof startInteger != "number" ||
		typeof endInteger != "number"
	)
		return "ERROR";
	if (
		Math.floor(startInteger) != startInteger ||
		Math.floor(endInteger) != endInteger
	)
		return "ERROR";

	if (endInteger < startInteger) {
		[startInteger, endInteger] = [endInteger, startInteger];
	}

	let total = 0;
	for (let i = startInteger; i < endInteger + 1; i++) {
		total += i;
	}

	return total;
};

// Do not edit below this line
module.exports = sumAll;
