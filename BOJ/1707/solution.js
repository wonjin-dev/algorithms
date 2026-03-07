function solution(V, adj) {
	const visited = new Array(V + 1).fill(0);

	for (let i = 1; i <= V; i++) {
		if (visited[i] !== 0) continue;

		const queue = [i];
		visited[i] = 1;
		let head = 0;

		while (head < queue.length) {
			const curr = queue[head++];

			for (const next of adj[curr]) {
				if (visited[next] === 0) {
					visited[next] = 3 - visited[curr];
					queue.push(next);
				} else if (visited[next] === visited[curr]) {
					return 'NO';
				}
			}
		}
	}

	return 'YES';
}
