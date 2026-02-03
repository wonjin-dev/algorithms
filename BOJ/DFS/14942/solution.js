function solution(n, energy, edges) {
	const adj = Array.from({ length: n + 1 }, () => []);
	for (const [u, v, w] of edges) {
		adj[u].push([v, w]);
		adj[v].push([u, w]);
	}

	const parent = Array.from({ length: n + 1 }, () => [0, 0]);
	const visited = new Array(n + 1).fill(false);

	const stack = [1];
	visited[1] = true;

	while (stack.length > 0) {
		const curr = stack.pop();

		for (const [next, dist] of adj[curr]) {
			if (!visited[next]) {
				visited[next] = true;
				parent[next] = [curr, dist];
				stack.push(next);
			}
		}
	}

	const result = [];
	for (let i = 1; i <= n; i++) {
		let currNode = i;
		let currEnergy = energy[i - 1];

		while (currNode !== 1) {
			const [nextParent, dist] = parent[currNode];
			if (currEnergy >= dist) {
				currEnergy -= dist;
				currNode = nextParent;
			} else {
				break;
			}
		}
		result.push(currNode);
	}

	return result.join('\n');
}
