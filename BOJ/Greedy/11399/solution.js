function solution(n, p) {
	return [...p]
		.sort((a, b) => a - b)
		.reduce((acc, cur, i) => acc + cur * (n - i), 0);
}
