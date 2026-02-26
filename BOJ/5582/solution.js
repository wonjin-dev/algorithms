function solution(s1, s2) {
	const n = s1.length;
	const m = s2.length;
	let prev = new Int32Array(m + 1);
	let maxLen = 0;

	for (let i = 1; i <= n; i++) {
		let curr = new Int32Array(m + 1);

		for (let j = 1; j <= m; j++) {
			if (s1[i - 1] === s2[j - 1]) {
				curr[j] = prev[j - 1] + 1;

				if (curr[j] > maxLen) {
					maxLen = curr[j];
				}
			}
		}

		prev = curr;
	}

	return maxLen;
}
