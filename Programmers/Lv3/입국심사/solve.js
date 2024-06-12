const solution = (n, times) => {
	const sorted = times.sort((a, b) => a - b);
	const target = times.length - 1;

	let left = 1;
	let right = sorted[target] * n;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

		if (sum < n) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return left;
};
