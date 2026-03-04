class Node {
	constructor() {
		this.children = {};
		this.fail = null;
		this.isEnd = false;
	}
}

function solution(patterns, queries) {
	const root = new Node();

	for (const word of patterns) {
		let curr = root;
		for (const char of word) {
			if (!curr.children[char]) {
				curr.children[char] = new Node();
			}
			curr = curr.children[char];
		}
		curr.isEnd = true;
	}

	const queue = [];

	for (const key in root.children) {
		const next = root.children[key];
		next.fail = root;
		queue.push(next);
	}

	let head = 0;
	while (head < queue.length) {
		const curr = queue[head++];

		for (const char in curr.children) {
			const next = curr.children[char];
			let f = curr.fail;

			while (f !== root && !f.children[char]) {
				f = f.fail;
			}

			if (f.children[char]) {
				f = f.children[char];
			}

			next.fail = f;

			if (next.fail.isEnd) {
				next.isEnd = true;
			}

			queue.push(next);
		}
	}

	return queries.map((text) => {
		let curr = root;
		for (const char of text) {
			while (curr !== root && !curr.children[char]) {
				curr = curr.fail;
			}

			if (curr.children[char]) {
				curr = curr.children[char];
			}

			if (curr.isEnd) return 'YES';
		}
		return 'NO';
	});
}
