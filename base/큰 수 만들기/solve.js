function solution(number, k) {
	const arr = number.split('');
	const filter = arr.map((numb, i) => {
		return {
			index: i,
			number: numb,
		};
	});

	let sorted = filter.sort((a, b) => b.number - a.number);

	for (let i = 0; i < k; i++) {
		sorted.pop();
	}
	const encode = sorted.sort((a, b) => a.index - b.index);

	const decode = encode.map((arr) => arr.number).join('');

	return decode;
}
