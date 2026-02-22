function solution(input) {
	const MAX = 1000000;
	const tree = new Int32Array(MAX * 4);
	const n = parseInt(input[0]);
	let result = '';

	function updateTree(node, start, end, target, diff) {
		if (diff === null) {
			tree[node]--;
			if (start === end) return start;
			const mid = (start + end) >> 1;
			if (tree[node * 2] >= target)
				return updateTree(node * 2, start, mid, target, null);
			else
				return updateTree(
					node * 2 + 1,
					mid + 1,
					end,
					target - tree[node * 2],
					null
				);
		}

		if (target < start || target > end) return;
		tree[node] += diff;
		if (start !== end) {
			const mid = (start + end) >> 1;
			updateTree(node * 2, start, mid, target, diff);
			updateTree(node * 2 + 1, mid + 1, end, target, diff);
		}
	}

	for (let i = 1; i <= n; i++) {
		const line = input[i].split(' ');
		const a = parseInt(line[0]);
		if (a === 1) {
			result += updateTree(1, 1, MAX, parseInt(line[1]), null) + '\n';
		} else {
			updateTree(1, 1, MAX, parseInt(line[1]), parseInt(line[2]));
		}
	}
	return result;
}
