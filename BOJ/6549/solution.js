function solution(n, heights) {
	const stack = [];
	let maxArea = BigInt(0);

	for (let i = 0; i <= n; i++) {
		const currentHeight = i === n ? 0 : heights[i];

		while (
			stack.length > 0 &&
			heights[stack[stack.length - 1]] > currentHeight
		) {
			const heightIndex = stack.pop();
			const h = BigInt(heights[heightIndex]);

			const width = BigInt(
				stack.length === 0 ? i : i - stack[stack.length - 1] - 1
			);

			const area = h * width;
			if (area > maxArea) {
				maxArea = area;
			}
		}

		stack.push(i);
	}

	return maxArea.toString();
}
