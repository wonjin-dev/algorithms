function solution(n, meetings) {
	let count = 0;
	let lastEndTime = 0;

	const sorted = [...meetings].sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		}
		return a[1] - b[1];
	});

	for (let i = 0; i < n; i++) {
		const [start, end] = sorted[i];

		if (start >= lastEndTime) {
			count++;
			lastEndTime = end;
		}
	}

	return count;
}
