function solution(n) {
	const count = Array(10).fill(0);
	let start = 1;
	let end = n;
	let digit = 1;

	const updateCount = (num, d) => {
		let current = num;
		while (current > 0) {
			count[current % 10] += d;
			current = Math.floor(current / 10);
		}
	};

	while (start <= end) {
		while (start % 10 !== 0 && start <= end) {
			updateCount(start, digit);
			start++;
		}

		if (start > end) break;

		while (end % 10 !== 9 && start <= end) {
			updateCount(end, digit);
			end--;
		}

		const sets = Math.floor(end / 10) - Math.floor(start / 10) + 1;
		for (let i = 0; i < 10; i++) {
			count[i] += sets * digit;
		}

		start = Math.floor(start / 10);
		end = Math.floor(end / 10);
		digit *= 10;
	}

	return count.join(' ');
}
