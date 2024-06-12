const solution = (s) => {
	const length = s.length;
	let startArr = [];
	let endArr = [];

	if (s.length % 2 !== 0) {
		return false;
	} else if (s[0] !== '(') {
		return false;
	} else if (s[length - 1] !== ')') {
		return false;
	} else {
		for (let i = 0; i < s.length; i++) {
			if (s[i] === '(') {
				startArr.push(s[i]);
			} else {
				endArr.push(s[i]);
			}
		}

		return startArr.length === endArr.length;
	}
};
