function makeTrie(words) {
	const root = {};

	for (const word of words) {
		let current = root;

		for (const letter of word) {
			// 단어의 글자를 하나씩 추출한 후 값을 넣는다. 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅하고 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다.
			if (!current[letter]) {
				current[letter] = [0, {}];
			}
			current[letter][0] = 1 + (current[letter][0] || 0); // 카운팅을 위해 1 더해준다.
			current = current[letter][1]; // current는 letter에 해당되는 노드로 이동한다.
		}
	}

	return root;
}

function solution(words) {
	let answer = 0;
	const trie = makeTrie(words);

	for (const word of words) {
		// 입력받은 수 만큼 루프
		let count = 0; // 카운팅을 위한 변수
		let current = trie;

		for (const [index, letter] of [...word].entries()) {
			count += 1;
			if (current[letter][0] <= 1) {
				// 단어가 하나 이하로 남을 경우 종료
				break;
			}
			current = current[letter][1]; // 다음 노드로 이동
		}
		answer += count; // 카운팅을 더해준다
	}

	return answer;
}
