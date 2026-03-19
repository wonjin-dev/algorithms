function solution(N, A, B) {
	const posB = new Map();
	for (let i = 0; i < N; i++) {
		posB.set(B[i], i + 1);
	}

	const tree = new BigUint64Array(N + 1);

	function update(idx, val) {
		const bigVal = BigInt(val);
		while (idx <= N) {
			tree[idx] += bigVal;
			idx += idx & -idx;
		}
	}

	function query(idx) {
		let sum = 0n;
		while (idx > 0) {
			sum += tree[idx];
			idx -= idx & -idx;
		}
		return sum;
	}

	let crossCount = 0n;
	let currentPlaced = 0n;

	for (let i = 0; i < N; i++) {
		const targetIdx = posB.get(A[i]);

		const rightSideCount = currentPlaced - query(targetIdx);
		crossCount += rightSideCount;

		update(targetIdx, 1);
		currentPlaced += 1n;
	}

	return crossCount.toString();
}
