function solution(board) {
	let minVal = 200;
	let maxVal = 0;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			minVal = Math.min(minVal, board[i][j]);
			maxVal = Math.max(maxVal, board[i][j]);
		}
	}

	const dx = [0, 0, 1, -1];
	const dy = [1, -1, 0, 0];

	function canReach(diff) {
		for (let sMin = minVal; sMin <= maxVal - diff; sMin++) {
			const sMax = sMin + diff;
			if (
				board[0][0] < sMin ||
				board[0][0] > sMax ||
				board[n - 1][n - 1] < sMin ||
				board[n - 1][n - 1] > sMax
			)
				continue;

			const visited = Array.from({ length: n }, () => Array(n).fill(false));
			const queue = [[0, 0]];
			visited[0][0] = true;
			let head = 0;

			while (head < queue.length) {
				const [x, y] = queue[head++];

				if (x === n - 1 && y === n - 1) return true;

				for (let i = 0; i < 4; i++) {
					const nx = x + dx[i];
					const ny = y + dy[i];

					if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
						if (board[nx][ny] >= sMin && board[nx][ny] <= sMax) {
							visited[nx][ny] = true;
							queue.push([nx, ny]);
						}
					}
				}
			}
		}
		return false;
	}

	let left = 0;
	let right = maxVal - minVal;
	let answer = right;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (canReach(mid)) {
			answer = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return answer;
}
