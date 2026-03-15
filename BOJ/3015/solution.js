function solution(heights) {
	let count = 0n;
	const stack = [];

	for (const h of heights) {
		let sameHeightFreq = 1n;

		while (stack.length > 0 && stack[stack.length - 1][0] < h) {
			count += stack.pop()[1];
		}

		if (stack.length > 0) {
			if (stack[stack.length - 1][0] === h) {
				const [curH, curFreq] = stack.pop();
				count += curFreq;
				sameHeightFreq = curFreq + 1n;

				if (stack.length > 0) {
					count += 1n;
				}
				stack.push([curH, sameHeightFreq]);
			} else {
				count += 1n;
				stack.push([h, 1n]);
			}
		} else {
			stack.push([h, 1n]);
		}
	}

	return count.toString();
}
