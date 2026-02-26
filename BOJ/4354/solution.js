function solution(s) {
	const n = s.length;
	if (n === 0) return 0;

	const pi = new Int32Array(n);
	let j = 0;

	for (let i = 1; i < n; i++) {
		while (j > 0 && s[i] !== s[j]) {
			j = pi[j - 1];
		}
		if (s[i] === s[j]) {
			pi[i] = ++j;
		}
	}

	const lastPi = pi[n - 1];
	const patternLen = n - lastPi;

	if (n % patternLen === 0) {
		return n / patternLen;
	} else {
		return 1;
	}
}
