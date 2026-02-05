function solution(K, N) {
	let result = '-1';
	let isFound = false;
	const ALPHABET_COUNT = 26;

	function hasKRepetition(str) {
		const len = str.length;
		for (let i = 1; i * K <= len; i++) {
			const pattern = str.substring(len - i);
			let isMatch = true;

			for (let j = 1; j < K; j++) {
				const start = len - i * (j + 1);
				const end = len - i * j;
				if (str.substring(start, end) !== pattern) {
					isMatch = false;
					break;
				}
			}
			if (isMatch) return true;
		}
		return false;
	}

	function backtrack(current) {
		if (isFound) return;

		if (current.length === N) {
			result = current;
			isFound = true;
			return;
		}

		for (let i = 0; i < ALPHABET_COUNT; i++) {
			const nextChar = String.fromCharCode(65 + i);
			const nextStr = current + nextChar;

			if (!hasKRepetition(nextStr)) {
				backtrack(nextStr);
				if (isFound) return;
			}
		}
	}

	backtrack('');

	return result;
}
