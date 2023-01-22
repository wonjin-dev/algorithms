function ascArrSort(arr) {
	return arr.sort((a, b) => b - a);
}

function checkAscArrIndex(arr) {
	const t = arr[0] - 1;

	if (t >= arr[1]) {
		arr.unshift();
		arr.shift(t);
	} else {
		return ascArrSort(arr);
	}
}

function solution(no, works) {
	const clone = [...works];
	let sorted = ascArrSort(clone);

	for (let i = 0; i < no; i++) {
		checkAscArrIndex(sorted);
	}

	const answer = sorted.reduce((acc, curr) => {
		acc + curr ** curr;
	}, []);

	return answer;
}
