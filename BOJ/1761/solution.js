function solution(n, edges, queries) {
	const LOG = 16;
	const adj = Array.from({ length: n + 1 }, () => []);

	for (const [u, v, w] of edges) {
		adj[u].push([v, w]);
		adj[v].push([u, w]);
	}

	const parent = Array.from({ length: n + 1 }, () => Array(LOG).fill(0));
	const depth = Array(n + 1).fill(-1);
	const distFromRoot = Array(n + 1).fill(0);

	const queue = [1];
	depth[1] = 0;
	distFromRoot[1] = 0;

	let head = 0;
	while (head < queue.length) {
		const curr = queue[head++];
		for (const [next, weight] of adj[curr]) {
			if (depth[next] === -1) {
				depth[next] = depth[curr] + 1;
				distFromRoot[next] = distFromRoot[curr] + weight;
				parent[next][0] = curr;
				queue.push(next);
			}
		}
	}

	for (let k = 1; k < LOG; k++) {
		for (let i = 1; i <= n; i++) {
			if (parent[i][k - 1] !== 0) {
				parent[i][k] = parent[parent[i][k - 1]][k - 1];
			}
		}
	}

	function getLCA(u, v) {
		if (depth[u] < depth[v]) [u, v] = [v, u];

		for (let k = LOG - 1; k >= 0; k--) {
			if (depth[u] - depth[v] >= 1 << k) {
				u = parent[u][k];
			}
		}

		if (u === v) return u;

		for (let k = LOG - 1; k >= 0; k--) {
			if (parent[u][k] !== parent[v][k]) {
				u = parent[u][k];
				v = parent[v][k];
			}
		}
		return parent[u][0];
	}

	return queries.map(([u, v]) => {
		const lca = getLCA(u, v);
		return distFromRoot[u] + distFromRoot[v] - 2 * distFromRoot[lca];
	});
}
