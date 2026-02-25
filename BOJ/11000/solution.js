class MinHeap {
	constructor() {
		this.heap = [];
	}
	push(val) {
		this.heap.push(val);
		this.bubbleUp();
	}
	pop() {
		if (this.size() === 0) return null;
		if (this.size() === 1) return this.heap.pop();
		const top = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.bubbleDown();
		return top;
	}
	bubbleUp() {
		let index = this.heap.length - 1;
		while (index > 0) {
			let parent = Math.floor((index - 1) / 2);
			if (this.heap[parent] <= this.heap[index]) break;
			[this.heap[parent], this.heap[index]] = [
				this.heap[index],
				this.heap[parent],
			];
			index = parent;
		}
	}
	bubbleDown() {
		let index = 0;
		const length = this.heap.length;
		while (true) {
			let left = index * 2 + 1;
			let right = index * 2 + 2;
			let swap = null;

			if (left < length) {
				if (this.heap[left] < this.heap[index]) swap = left;
			}
			if (right < length) {
				if (
					(swap === null && this.heap[right] < this.heap[index]) ||
					(swap !== null && this.heap[right] < this.heap[left])
				) {
					swap = right;
				}
			}

			if (swap === null) break;
			[this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
			index = swap;
		}
	}
	peek() {
		return this.heap[0];
	}
	size() {
		return this.heap.length;
	}
}

function solution(N, lectures) {
	lectures.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
	const minHeap = new MinHeap();

	minHeap.push(lectures[0][1]);

	for (let i = 1; i < N; i++) {
		const [start, end] = lectures[i];

		if (minHeap.peek() <= start) {
			minHeap.pop();
		}

		minHeap.push(end);
	}

	return minHeap.size();
}
