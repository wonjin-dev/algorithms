function solution(L, S) {
	const pi = new Array(L).fill(0);
	let j = 0;

	for (let i = 1; i < L; i++) {
		while (j > 0 && S[i] !== S[j]) {
			j = pi[j - 1];
		}

		if (S[i] === S[j]) {
			pi[i] = ++j;
		}
	}

	const result = L - pi[L - 1];
	console.log(result);
}
