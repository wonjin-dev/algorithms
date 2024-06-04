const kthSmallest = (root, k) => {
	let a = [];

	function helper(node) {
		if (!node) return;
		helper(node.left);
		a.push(node.val);
		helper(node.right);
	}

	helper(root);

	return a[k - 1];
};
