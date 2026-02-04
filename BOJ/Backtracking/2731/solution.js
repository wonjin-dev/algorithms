function solve2731(str) {
	const S = BigInt(str);
	const n = str.length;
	let ans = 0n;
	let currentMod = 1n;

	for (let i = 1; i <= n; i++) {
		const nextMod = currentMod * 10n;
		const targetRemainder = S % nextMod;

		for (let digit = 0n; digit < 10n; digit++) {
			const candidate = digit * currentMod + ans;
			if (candidate ** 3n % nextMod === targetRemainder) {
				ans = candidate;
				break;
			}
		}
		currentMod = nextMod;
	}
	return ans.toString();
}
