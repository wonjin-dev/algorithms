function solution(n, weights) {
	const sorted = weights.sort((a, b) => a - b);
	let answer = 1;

	for (let i = 0; i < n; i++) {
		if (answer < sorted[i]) {
			break;
		}

		answer += sorted[i];
	}

	return answer;
}
