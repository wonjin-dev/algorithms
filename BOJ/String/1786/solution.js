function solution(T, P) {
	const n = T.length;
	const m = P.length;

	const pi = new Array(m).fill(0);
	let j = 0;
	for (let i = 1; i < m; i++) {
		while (j > 0 && P[i] !== P[j]) {
			j = pi[j - 1];
		}
		if (P[i] === P[j]) {
			pi[i] = ++j;
		}
	}

	const result = [];
	let count = 0;
	j = 0;
	for (let i = 0; i < n; i++) {
		while (j > 0 && T[i] !== P[j]) {
			j = pi[j - 1];
		}
		if (T[i] === P[j]) {
			if (j === m - 1) {
				count++;
				result.push(i - m + 2);
				j = pi[j];
			} else {
				j++;
			}
		}
	}
}
