const solution = (genres, plays) => {
	const g = [...new Set(genres)];
	const countArr = g.map((g) => {
		return {
			genre: g,
			count: 0,
			index: [],
		};
	});

	const musics = [];
	for (let i = 0; i < genres.length; i++) {
		musics.push({
			genre: genres[i],
			play: plays[i],
			index: i,
		});
	}

	musics.map((arr) => {
		const i = countArr.findIndex((a) => a.genre === arr.genre);
		countArr[i].count = countArr[i].count + arr.play;
		countArr[i].index.push({ play: arr.play, i: arr.index });
	});
	console.log(countArr);

	const sorted = countArr.sort((a, b) => b.count - a.count);

	const parse = sorted
		.map((arr) => arr.index.sort((a, b) => b.play - a.play).slice(0, 2))
		.flat();

	const answer = parse.flatMap((a) => a.i);

	return answer;
};
