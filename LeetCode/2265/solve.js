/**
 * @param {TreeNode} root
 * @return {number}
 */
const averageOfSubtree = (root) => {
	let count = 0;

	function dfs(node) {
		if (!node) return [0, 0];

		const [lsum, lnum] = dfs(node.left);
		const [rsum, rnum] = dfs(node.right);
		const sum = node.val + lsum + rsum;
		const num = 1 + lnum + rnum;
		if (Math.floor(sum / num) === node.val) count++;

		return [sum, num];
	}

	dfs(root);

	return count;
};
