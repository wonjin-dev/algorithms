function solution(V, E) {
	const adj = Array.from({ length: V + 1 }, () => []);

	for (let i = 1; i <= E; i++) {
		if (!input[i]) break;
		const [u, v] = input[i].split(' ').map(Number);
		adj[u].push(v);
		adj[v].push(u);
	}

	const dfn = new Array(V + 1).fill(0);
	const low = new Array(V + 1).fill(0);
	let timer = 0;
	const bridges = [];

	function dfs(curr, parent) {
		dfn[curr] = low[curr] = ++timer;

		for (const next of adj[curr]) {
			if (next === parent) continue;

			if (dfn[next] > 0) {
				low[curr] = Math.min(low[curr], dfn[next]);
			} else {
				dfs(next, curr);
				low[curr] = Math.min(low[curr], low[next]);

				if (low[next] > dfn[curr]) {
					bridges.push(curr < next ? [curr, next] : [next, curr]);
				}
			}
		}
	}

	for (let i = 1; i <= V; i++) {
		if (dfn[i] === 0) dfs(i, 0);
	}

	bridges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

	let result = `${bridges.length}\n`;
	bridges.forEach((b) => {
		result += `${b[0]} ${b[1]}\n`;
	});

	return result.trim();
}
