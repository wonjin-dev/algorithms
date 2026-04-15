function solution(T, N, A, M, B) {
	let answer = 0;
	const sumMapA = new Map();

	for (let i = 0; i < N; i++) {
		let currentSum = 0;

		for (let j = i; j < N; j++) {
			currentSum += A[j];

			sumMapA.set(currentSum, (sumMapA.get(currentSum) || 0) + 1);
		}
	}

	for (let i = 0; i < M; i++) {
		let currentSum = 0;

		for (let j = i; j < M; j++) {
			currentSum += B[j];

			const target = T - currentSum;

			if (sumMapA.has(target)) {
				answer += sumMapA.get(target);
			}
		}
	}

	return answer;
}
