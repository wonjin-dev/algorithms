function solution(priorities, location) {
	const target = priorities[location];
	const before = [];
	const equal = [];
	const queue = [];

	for (let i = location + 1; i < priorities.length; i++) {
		if (priorities[i] > target) {
			before.push(priorities[i]);
		}
		if (priorities[i] === target) {
			equal.push(priorities[i]);
		}
	}

	for (let i = 0; i < location + 1; i++) {
		if (priorities[i] >= target) {
			queue.push(priorities[i]);
		}
	}

	if (before.length > 0) {
		return before.length + queue.length + equal.length - 1;
	} else {
		return before.length + queue.length;
	}
}
