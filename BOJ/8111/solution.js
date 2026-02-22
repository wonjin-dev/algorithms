function bfs(N) {
	const visited = new Array(N).fill(null);
	const queue = [];

	function reconstructPath(visited, lastMod) {
		let path = '';
		let curr = lastMod;

		while (curr !== -1) {
			const [prevMod, digit] = visited[curr];
			path = digit + path;
			curr = prevMod;
		}
		return path;
	}

	const startMod = 1 % N;
	queue.push(startMod);
	visited[startMod] = [-1, '1'];

	let head = 0;
	while (head < queue.length) {
		const currMod = queue[head++];

		if (currMod === 0) {
			return reconstructPath(visited, 0);
		}

		const nextDigits = [0, 1];
		for (const digit of nextDigits) {
			const nextMod = (currMod * 10 + digit) % N;

			if (visited[nextMod] === null) {
				visited[nextMod] = [currMod, digit.toString()];
				queue.push(nextMod);
			}
		}
	}

	return 'BRAK';
}

function solution(T) {
	let result = [];

	for (let i = 1; i <= T; i++) {
		const N = parseInt(input[i]);
		if (N === 1) {
			result.push('1');
			continue;
		}
		result.push(bfs(N));
	}

	console.log(result.join('\n'));
}
