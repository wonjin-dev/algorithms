function solution(n, edge) {
	const graph = Array.from(Array(n + 1), () => []);

	for (const [src, dest] of edge) {
		graph[src].push(dest);
		graph[dest].push(src);
	}

	const distance = Array(n + 1).fill(0);
	distance[1] = 1;

	const res = [1];
	while (res.length > 0) {
		const src = res.shift();
		for (const dest of graph[src]) {
			if (distance[dest] === 0) {
				res.push(dest);
				distance[dest] = distance[src] + 1;
			}
		}
	}
	const answer = Math.max(...distance);

	return distance.filter((item) => item === answer).length;
}
