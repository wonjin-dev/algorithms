function solution(N, arr, queries) {
	const minTree = new Int32Array(N * 4);
	const maxTree = new Int32Array(N * 4);

	function init(node, start, end) {
		if (start === end) {
			minTree[node] = arr[start];
			maxTree[node] = arr[start];
			return;
		}

		const mid = (start + end) >> 1;
		init(node * 2, start, mid);
		init(node * 2 + 1, mid + 1, end);

		minTree[node] = Math.min(minTree[node * 2], minTree[node * 2 + 1]);
		maxTree[node] = Math.max(maxTree[node * 2], maxTree[node * 2 + 1]);
	}

	function getMinMax(node, start, end, left, right) {
		if (left > end || right < start) return [Infinity, -Infinity];
		if (left <= start && end <= right) return [minTree[node], maxTree[node]];

		const mid = (start + end) >> 1;
		const [lMin, lMax] = getMinMax(node * 2, start, mid, left, right);
		const [rMin, rMax] = getMinMax(node * 2 + 1, mid + 1, end, left, right);

		return [Math.min(lMin, rMin), Math.max(lMax, rMax)];
	}

	init(1, 0, N - 1);

	return queries
		.map(([a, b]) => {
			const [minVal, maxVal] = getMinMax(1, 0, N - 1, a - 1, b - 1);
			return `${minVal} ${maxVal}`;
		})
		.join('\n');
}
