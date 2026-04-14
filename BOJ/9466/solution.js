function solution(n, students) {
	const visited = new Array(n + 1).fill(false);
	const finished = new Array(n + 1).fill(false);
	let cycleNodesCount = 0;

	function dfs(curr) {
		visited[curr] = true;
		const next = students[curr];

		if (!visited[next]) {
			dfs(next);
		} else if (!finished[next]) {
			let temp = next;
			while (temp !== curr) {
				cycleNodesCount++;
				temp = students[temp];
			}
			cycleNodesCount++;
		}

		finished[curr] = true;
	}

	for (let i = 1; i <= n; i++) {
		if (!visited[i]) {
			dfs(i);
		}
	}

	return n - cycleNodesCount;
}
