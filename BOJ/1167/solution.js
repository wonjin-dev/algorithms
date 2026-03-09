function solution(V, adj) {
	let farthestNode = 0;
	let maxDist = 0;

	const runScan = (start) => {
		const distances = new Array(V + 1).fill(-1);
		const queue = [start];
		distances[start] = 0;
		let head = 0;
		let localFarthest = start;
		let localMax = 0;

		while (head < queue.length) {
			const curr = queue[head++];
			for (const [next, weight] of adj[curr]) {
				if (distances[next] === -1) {
					distances[next] = distances[curr] + weight;
					queue.push(next);
					if (distances[next] > localMax) {
						localMax = distances[next];
						localFarthest = next;
					}
				}
			}
		}
		farthestNode = localFarthest;
		maxDist = localMax;
	};

	runScan(1);
	runScan(farthestNode);

	return maxDist;
}
