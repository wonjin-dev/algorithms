function solution(N) {
	if (N < 2) return 0;

	const isPrime = new Array(N + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i * i <= N; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= N; j += i) {
				isPrime[j] = false;
			}
		}
	}

	const primes = [];
	for (let i = 2; i <= N; i++) {
		if (isPrime[i]) primes.push(i);
	}

	let count = 0;
	let sum = 0;
	let start = 0;
	let end = 0;

	while (true) {
		if (sum >= N) {
			if (sum === N) count++;
			sum -= primes[start++];
		} else if (end === primes.length) {
			break;
		} else {
			sum += primes[end++];
		}
	}

	return count;
}
