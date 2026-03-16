function solution(N, lines) {
	const parent = Array.from({ length: N }, (_, i) => i);
	const groupSize = Array(N).fill(1);

	function find(x) {
		if (parent[x] === x) return x;
		return (parent[x] = find(parent[x]));
	}

	function union(a, b) {
		const rootA = find(a);
		const rootB = find(b);

		if (rootA !== rootB) {
			parent[rootB] = rootA;
			groupSize[rootA] += groupSize[rootB];
			return true;
		}
		return false;
	}

	function ccw(p1, p2, p3) {
		const [x1, y1] = p1;
		const [x2, y2] = p2;
		const [x3, y3] = p3;
		const res = x1 * y2 + x2 * y3 + x3 * y1 - (y1 * x2 + y2 * x3 + y3 * x1);
		if (res > 0) return 1;
		if (res < 0) return -1;
		return 0;
	}

	function isIntersect(l1, l2) {
		const p1 = [l1[0], l1[1]];
		const p2 = [l1[2], l1[3]];
		const p3 = [l2[0], l2[1]];
		const p4 = [l2[2], l2[3]];

		const ccw123 = ccw(p1, p2, p3);
		const ccw124 = ccw(p1, p2, p4);
		const ccw341 = ccw(p3, p4, p1);
		const ccw342 = ccw(p3, p4, p2);

		if (ccw123 * ccw124 <= 0 && ccw341 * ccw342 <= 0) {
			if (ccw123 * ccw124 === 0 && ccw341 * ccw342 === 0) {
				const sortPoint = (a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
				const [a, b] = [p1, p2].sort(sortPoint);
				const [c, d] = [p3, p4].sort(sortPoint);

				return (
					c[0] <= b[0] &&
					(c[0] !== b[0] || c[1] <= b[1]) &&
					a[0] <= d[0] &&
					(a[0] !== d[0] || a[1] <= d[1])
				);
			}
			return true;
		}
		return false;
	}

	for (let i = 0; i < N; i++) {
		for (let j = i + 1; j < N; j++) {
			if (isIntersect(lines[i], lines[j])) {
				union(i, j);
			}
		}
	}

	let groupCount = 0;
	let maxGroupSize = 0;

	for (let i = 0; i < N; i++) {
		if (parent[i] === i) {
			groupCount++;
			maxGroupSize = Math.max(maxGroupSize, groupSize[i]);
		}
	}

	return [groupCount, maxGroupSize];
}
