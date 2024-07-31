const normalizeBlock = (block) => {
	const minX = Math.min(...block.map(([x, y]) => x));
	const minY = Math.min(...block.map(([x, y]) => y));
	return block.map(([x, y]) => [x - minX, y - minY]).sort();
};

const rotateBlock = (block) => {
	const max = Math.max(...block.map(([x, y]) => Math.max(x, y)));
	const rotated = block.map(([x, y]) => [max - y, x]);
	return normalizeBlock(rotated);
};

const bfs = (start, table, targetValue) => {
	const directions = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];
	const queue = [...start];
	const block = [];

	while (queue.length > 0) {
		const [cx, cy] = queue.shift();
		block.push([cx, cy]);

		for (const [dx, dy] of directions) {
			const nx = cx + dx;
			const ny = cy + dy;

			if (
				nx >= 0 &&
				ny >= 0 &&
				nx < table.length &&
				ny < table.length &&
				table[nx][ny] !== targetValue
			) {
				queue.push([nx, ny]);
				table[nx][ny] = targetValue;
			}
		}
	}

	return normalizeBlock(block);
};

const extractBlocks = (board, targetValue) => {
	const blocks = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === targetValue) {
				board[i][j] = 1 - targetValue;
				blocks.push(bfs([[i, j]], board, 1 - targetValue));
			}
		}
	}
	return blocks;
};

const solution = (game_board, table) => {
	const blanks = extractBlocks(game_board, 0);
	const blocks = extractBlocks(table, 1);
	let answer = 0;

	blocks.forEach((block) => {
		for (let i = 0; i < blanks.length; i++) {
			let match = false;

			for (let j = 0; j < 4; j++) {
				block = rotateBlock(block);

				if (JSON.stringify(block) === JSON.stringify(blanks[i])) {
					blanks.splice(i, 1);
					answer += block.length;
					match = true;
					break;
				}
			}

			if (match) break;
		}
	});

	return answer;
};
