function solution(L, S) {
	let low = 1;
	let high = L - 1;
	let answer = 0;

	const MOD = (1n << 61n) - 1n;
	const BASE = 31n;

	function hasDuplicate(len) {
		if (len === 0) return true;

		const hashSet = new Set();
		let currentHash = 0n;
		let power = 1n;

		for (let i = 0; i < len; i++) {
			currentHash = (currentHash * BASE + BigInt(S.charCodeAt(i) - 96)) % MOD;
			if (i < len - 1) power = (power * BASE) % MOD;
		}

		hashSet.add(currentHash);

		for (let i = 1; i <= L - len; i++) {
			let prevChar = BigInt(S.charCodeAt(i - 1) - 96);
			let nextChar = BigInt(S.charCodeAt(i + len - 1) - 96);

			currentHash = (currentHash - ((prevChar * power) % MOD) + MOD) % MOD;
			currentHash = (currentHash * BASE + nextChar) % MOD;

			if (hashSet.has(currentHash)) {
				return true;
			}
			hashSet.add(currentHash);
		}

		return false;
	}

	while (low <= high) {
		let mid = Math.floor((low + high) / 2);

		if (hasDuplicate(mid)) {
			answer = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return answer;
}
