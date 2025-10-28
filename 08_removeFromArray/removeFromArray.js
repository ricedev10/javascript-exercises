const removeFromArray = function (array, ...items) {
	for (item of array) {
		let isValid = true;
		for (inValidItem of items) {
			if (item === inValidItem) {
				isValid = false;
			}
		}

		if (isValid) newItems.push(item);
	}

	return newItems;
};

// Do not edit below this line
module.exports = removeFromArray;
