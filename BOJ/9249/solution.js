function solution(s1, s2) {
	const combined = s1 + '#' + s2;
	const n = combined.length;
	const s1Len = s1.length;

	let sa = new Int32Array(n);
	let rank = new Int32Array(n);
	let tmp = new Int32Array(n);

	for (let i = 0; i < n; i++) {
		sa[i] = i;
		rank[i] = combined.charCodeAt(i);
	}

	let k = 1;
	const compareSuffix = (i, j) => {
		if (rank[i] !== rank[j]) return rank[i] - rank[j];
		const ri = i + k < n ? rank[i + k] : -1;
		const rj = j + k < n ? rank[j + k] : -1;
		return ri - rj;
	};

	while (k < n) {
		sa.sort(compareSuffix);

		tmp[sa[0]] = 0;
		for (let i = 1; i < n; i++) {
			tmp[sa[i]] =
				tmp[sa[i - 1]] + (compareSuffix(sa[i - 1], sa[i]) < 0 ? 1 : 0);
		}
		for (let i = 0; i < n; i++) rank[i] = tmp[i];

		if (rank[sa[n - 1]] === n - 1) break;
		k <<= 1;
	}

	let lcp = new Int32Array(n);
	let h = 0;
	for (let i = 0; i < n; i++) {
		if (rank[i] > 0) {
			let j = sa[rank[i] - 1];
			while (i + h < n && j + h < n && combined[i + h] === combined[j + h]) {
				h++;
			}
			lcp[rank[i]] = h;
			if (h > 0) h--;
		}
	}

	let maxLen = 0;
	let startIdx = 0;

	for (let i = 1; i < n; i++) {
		const isPrevInS1 = sa[i - 1] < s1Len;
		const isCurrInS1 = sa[i] < s1Len;

		if (isPrevInS1 !== isCurrInS1 && sa[i - 1] !== s1Len && sa[i] !== s1Len) {
			if (lcp[i] > maxLen) {
				maxLen = lcp[i];
				startIdx = sa[i];
			}
		}
	}
}
