class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	enqueue(newValue) {
		const newNode = new Node(newValue);

		if (this.head === null) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	dequeue() {
		const value = this.head.value;
		this.head = this.head.next;

		return value;
	}

	peek() {
		return this.head.value;
	}
}

const solution = (priorities, location) => {
	const queue = new Queue();

	for (let i = 0; i < priorities.length; i++) {
		queue.enqueue([priorities[i], i]);
	}

	priorities.sort((a, b) => b - a);

	let count = 0;

	while (true) {
		const curr = queue.peek();
		if (curr[0] < priorities[count]) {
			queue.enqueue(queue.dequeue());
		} else {
			const v = queue.dequeue();
			count++;
			if (location === v[1]) {
				return count;
			}
		}
	}
};
