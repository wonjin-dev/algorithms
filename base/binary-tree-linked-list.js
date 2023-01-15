class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor(node) {
		this.root = node;
	}

	display() {
		const queue = new Queue();
		queue.enqueue(this.root);

		while (queue.size) {
			const currentNode = queue.dequeue();

			if (currentNode.left) {
				queue.enqueue(currentNode.left);
			}
			if (currentNode.right) {
				queue.enqueue(currentNode.right);
			}
		}
	}
}

const tree = new BinaryTree(new Node(9));

this.root.left = new Node(3);
this.root.right = new Node(8);

/**
 *   9
 *  / \
 * 3   8
 */
