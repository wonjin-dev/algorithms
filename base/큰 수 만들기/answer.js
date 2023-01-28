// 스택을 이용해 해결
// 내림차순으로 정렬 후 더 큰값이 들어오면 나머지는 전부 삭제

function solution(number, k) {
	const stack = [];
	let count = 0;

	for (const item of number) {
		while (count < k && stack[stack.length - 1] < item) {
			stack.pop();
			count++;
		}
		stack.push(item);
	}

	while (count < k) {
		stack.pop();
		count++;
	}

	return stack.join('');
}
