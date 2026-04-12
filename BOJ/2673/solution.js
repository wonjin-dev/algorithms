function solution(lines) {
	const cost = Array.from({ length: 101 }, () => Array(101).fill(0));
	const dp = Array.from({ length: 101 }, () => Array(101).fill(0));

	for (const [u, v] of lines) {
		cost[u][v] = cost[v][u] = 1;
	}

	for (let d = 1; d <= 100; d++) {
		for (let i = 1; i <= 100 - d; i++) {
			const j = i + d;

			for (let k = i; k < j; k++) {
				dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + cost[i][j]);
			}
		}
	}

	return dp[1][100];
}
