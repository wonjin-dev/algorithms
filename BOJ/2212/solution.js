function solution(N, K, sensors) {
	if (K >= N) return 0;
	const sorted = sensors.sort((a, b) => a - b);

	const distances = [];

	for (let i = 0; i < N - 1; i++) {
		distances.push(sorted[i + 1] - sorted[i]);
	}

	const sorted2 = distances.sort((a, b) => a - b);

	let answer = 0;

	for (let i = 0; i < N - K; i++) {
		answer += sorted2[i];
	}

	return answer;
}
