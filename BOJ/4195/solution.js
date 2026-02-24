function find(name) {
	if (!parent.has(name)) {
		parent.set(name, name);
		size.set(name, 1);
		return name;
	}

	if (parent.get(name) !== name) {
		parent.set(name, find(parent.get(name)));
	}
	return parent.get(name);
}

function union(name1, name2) {
	const parent = new Map();
	const size = new Map();

	let root1 = find(name1);
	let root2 = find(name2);

	if (root1 !== root2) {
		parent.set(root2, root1);

		const newSize = size.get(root1) + size.get(root2);
		size.set(root1, newSize);
		return newSize;
	}

	return size.get(root1);
}

function solution(friendships) {
	const results = [];

	for (const [p1, p2] of friendships) {
		results.push(union(p1, p2));
	}

	return results;
}
