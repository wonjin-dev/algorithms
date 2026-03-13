function solution(n, k, numbs) {
	const stack = [];
	let toRemove = k;

	for (let i = 0; i < n; i++) {
		const current = numbs[i];
		while (
			toRemove > 0 &&
			stack.length > 0 &&
			stack[stack.length - 1] < current
		) {
			stack.pop();
			toRemove--;
		}

		stack.push(current);
	}

	return stack.slice(0, n - k).join('');
}
