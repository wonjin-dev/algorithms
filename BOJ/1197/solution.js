function solution(V, E, edges) {
	edges.sort((a, b) => a[2] - b[2]);
	const parent = Array.from({ length: V + 1 }, (_, i) => i);

	function find(x) {
		if (parent[x] === x) return x;
		return (parent[x] = find(parent[x]));
	}

	function union(a, b) {
		const rootA = find(a);
		const rootB = find(b);

		if (rootA !== rootB) {
			parent[rootB] = rootA;
			return true;
		}
		return false;
	}

	let totalWeight = 0;
	let edgeCount = 0;

	for (let i = 0; i < E; i++) {
		const [u, v, weight] = edges[i];

		if (union(u, v)) {
			totalWeight += weight;
			edgeCount++;

			if (edgeCount === V - 1) break;
		}
	}

	return totalWeight;
}
