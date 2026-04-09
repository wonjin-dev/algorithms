function solution(n, points) {
	let area = 0;

	for (let i = 0; i < n; i++) {
		const [x1, y1] = points[i];
		const [x2, y2] = points[(i + 1) % n];

		area += x1 * y2 - x2 * y1;
	}

	const result = Math.abs(area) / 2;

	return result.toFixed(1);
}
