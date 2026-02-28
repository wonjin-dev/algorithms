function solution(N, L, arr) {
	const dequeIdx = new Int32Array(N);
	const dequeVal = new Int32Array(N);

	let head = 0;
	let tail = 0;

	let result = '';

	for (let i = 0; i < N; i++) {
		const current = arr[i];

		while (tail > head && dequeVal[tail - 1] > current) {
			tail--;
		}

		dequeIdx[tail] = i;
		dequeVal[tail] = current;
		tail++;

		if (dequeIdx[head] <= i - L) {
			head++;
		}

		result += dequeVal[head] + ' ';
	}

	return result;
}
