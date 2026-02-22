function solution(n) {
	const dp = new Array(n + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 3; i <= n; i++) {
		if (dp[i - 3] !== Infinity) {
			dp[i] = Math.min(dp[i], dp[i - 3] + 1);
		}
		if (i >= 5 && dp[i - 5] !== Infinity) {
			dp[i] = Math.min(dp[i], dp[i - 5] + 1);
		}
	}

	return dp[n] === Infinity ? -1 : dp[n];
}
