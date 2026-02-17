function solution(N, cards) {
	if (N <= 1) return 0;

	const heap = [];

	const push = (val) => {
		heap.push(val);
		let cur = heap.length - 1;
		while (cur > 0) {
			let parent = (cur - 1) >> 1;
			if (heap[parent] <= heap[cur]) break;
			[heap[parent], heap[cur]] = [heap[cur], heap[parent]];
			cur = parent;
		}
	};

	const pop = () => {
		if (heap.length === 1) return heap.pop();
		const min = heap[0];
		heap[0] = heap.pop();
		let cur = 0;
		while (cur * 2 + 1 < heap.length) {
			let L = cur * 2 + 1,
				R = cur * 2 + 2,
				small = L;
			if (R < heap.length && heap[R] < heap[L]) small = R;
			if (heap[cur] <= heap[small]) break;
			[heap[cur], heap[small]] = [heap[small], heap[cur]];
			cur = small;
		}
		return min;
	};

	for (const card of cards) push(card);

	let totalComparison = 0;

	while (heap.length > 1) {
		const sum = pop() + pop();
		totalComparison += sum;
		push(sum);
	}

	return totalComparison;
}
