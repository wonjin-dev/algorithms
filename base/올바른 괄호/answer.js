/** 정답 풀이
 *
 * 스택 구조를 통해 해결 가능
 * 만약 여는 괄호가 나온다면 push
 * 닫는 괄호가 나온다면 pop
 * 최종적으로 스택이 비어있으면 true
 * 비정상 작동하거나 남아 있으면 false를 리턴
 */

function solution(s) {
	const stack = [];

	for (const c of s) {
		if (c === '(') {
			stack.push(c);
		} else {
			if (stack.length === 0) {
				return false;
			} else {
				stack.pop();
			}
		}

		return stack.length === 0;
	}
}
