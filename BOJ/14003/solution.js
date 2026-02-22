function solution(n, arr) {
	const lis = [];
	const indices = [];

	function lowerBound(target) {
		let left = 0;
		let right = lis.length - 1;
		while (left <= right) {
			let mid = Math.floor((left + right) / 2);
			if (lis[mid] < target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
		return left;
	}

	for (let i = 0; i < n; i++) {
		const current = arr[i];

		if (lis.length === 0 || lis[lis.length - 1] < current) {
			indices[i] = lis.length;
			lis.push(current);
		} else {
			const pos = lowerBound(current);
			lis[pos] = current;
			indices[i] = pos;
		}
	}

	const maxLength = lis.length;
	const result = [];
	let targetIdx = maxLength - 1;

	for (let i = n - 1; i >= 0; i--) {
		if (indices[i] === targetIdx) {
			result.push(arr[i]);
			targetIdx--;
		}
	}

	console.log(maxLength);
	console.log(result.reverse().join(' '));
}
