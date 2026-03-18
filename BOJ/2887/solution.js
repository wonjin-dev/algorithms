function solution(N, planetCoords) {
	const planets = planetCoords.map((coords, index) => ({
		x: coords[0],
		y: coords[1],
		z: coords[2],
		id: index,
	}));

	const edges = [];
	const axes = ['x', 'y', 'z'];

	axes.forEach((axis) => {
		planets.sort((a, b) => a[axis] - b[axis]);
		for (let i = 0; i < N - 1; i++) {
			const cost = Math.abs(planets[i][axis] - planets[i + 1][axis]);
			edges.push({
				cost,
				u: planets[i].id,
				v: planets[i + 1].id,
			});
		}
	});

	edges.sort((a, b) => a.cost - b.cost);

	const parent = Array.from({ length: N }, (_, i) => i);

	function find(x) {
		if (parent[x] === x) return x;
		return (parent[x] = find(parent[x]));
	}

	function union(a, b) {
		const rootA = find(a);
		const rootB = find(b);
		if (rootA !== rootB) {
			parent[rootA] = rootB;
			return true;
		}
		return false;
	}

	let totalMinCost = 0;
	let edgeCount = 0;

	for (const { cost, u, v } of edges) {
		if (union(u, v)) {
			totalMinCost += cost;
			edgeCount++;
			if (edgeCount === N - 1) break;
		}
	}

	return totalMinCost;
}
