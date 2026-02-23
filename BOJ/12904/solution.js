function solution(S, T) {
	let targetArr = T.split('');

	while (targetArr.length > S.length) {
		const lastChar = targetArr.pop();

		if (lastChar === 'B') {
			targetArr.reverse();
		}
	}

	return targetArr.join('') === S ? 1 : 0;
}
