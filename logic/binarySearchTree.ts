import { BinarySearchTreeNodePlain } from "./types";

export class BinarySearchTreeNode<T> {
    data: T;
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

export class BinarySearchTree<T> {
    root?: BinarySearchTreeNode<T>;
    comparator: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.comparator = comparator;
    }

    insert(data: T): BinarySearchTreeNode<T> | undefined {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }

        let current = this.root;

        while(true) {
            if (this.comparator(data, current.data) === 1) {
                if (current.rightNode) {
                    current = current.rightNode;
                } else {
                    current.rightNode = new BinarySearchTreeNode(data);
                    return current.rightNode;
                }
            } else {
                if (current.leftNode) {
                    current = current.leftNode;
                } else {
                    current.leftNode = new BinarySearchTreeNode(data);
                    return current.leftNode;
                }
            }
        }
    }

    search(data: T): BinarySearchTreeNode<T> | undefined {
        if(!this.root) return undefined;

        let current = this.root;

        while (this.comparator(data, current.data) !== 0) {
            if (this.comparator(data, current.data) === 1) {
                if (!current.rightNode) return;

                current = current.rightNode;
            } else {
                if (!current.leftNode) return;

                current = current.leftNode;
            }
        }
        return current;
    }

    inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.inOrderTraversal(node.leftNode);
            console.log(node.data);
            this.inOrderTraversal(node.rightNode);
        }
    }

    preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            console.log(node.data);
            this.preOrderTraversal(node.leftNode);
            this.preOrderTraversal(node.rightNode);
        }
    }

    postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
        if (node) {
            this.postOrderTraversal(node.leftNode);
            this.postOrderTraversal(node.rightNode);
            console.log(node.data);
        }
    }

    getLength(): number {
        if (!this.root) return 0;

        let count = 0;
        const stack: (BinarySearchTreeNode<T> | undefined)[] = [this.root];

        while (stack.length > 0) {
            const node = stack.pop();
            if (node) {
                count++;
                if (node.leftNode) stack.push(node.leftNode);
                if (node.rightNode) stack.push(node.rightNode);
            }
        }
        return count;
    }

    // Method to convert a node to a plain object
    private nodeToPlainObject(node: BinarySearchTreeNode<T> | undefined): BinarySearchTreeNodePlain<T> | undefined {
        if (!node) return undefined;
        return {
            data: node.data,
            leftNode: this.nodeToPlainObject(node.leftNode),
            rightNode: this.nodeToPlainObject(node.rightNode)
        }
    }

    // Method to get the root of the tree as a plalin object
    getRootAsPlainObject(): BinarySearchTreeNodePlain<T> | undefined {
        return this.nodeToPlainObject(this.root);
    }

    // Method to calculate the depth of the tree
    getDepth(): number {
        if (!this.root) return 0;

        let depth = 0;
        const queue: { node: BinarySearchTreeNode<T>, level: number }[] = [{ node: this.root, level: 1}];

        while (queue.length > 0) {
            const { node, level } = queue.shift()!;
            depth = Math.max(depth, level);

            if (node.leftNode) {
                queue.push({ node: node.leftNode, level: level + 1 });
            }
            if (node.rightNode) {
                queue.push({ node: node.rightNode, level: level + 1 });
            }
        }
        return depth;
    }

    // Method to calculate the width of the tree
    getWidth(): number {
        if (!this.root) return 0;

        let maxWidth = 0;
        const queue: BinarySearchTreeNode<T>[] = [];
        queue.push(this.root);

        while (queue.length > 0) {
            const levelSize = queue.length;
            maxWidth = Math.max(maxWidth, levelSize);

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift()!;
                if (node.leftNode) queue.push(node.leftNode);
                if (node.rightNode) queue.push(node.rightNode);
            }
        }
        return maxWidth;
    }
}