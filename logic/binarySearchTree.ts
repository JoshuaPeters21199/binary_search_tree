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

    /**
     * Converts a node and its children to a plain object in BFS order.
     * @param node - The starting node of the subtree.
     * @returns The root in a BFS-ordered plain object form.
     */
    private nodeToPlainObject(node: BinarySearchTreeNode<T> | undefined): BinarySearchTreeNodePlain<T> | undefined {
        if (!node) return undefined;
        
        const rootPlainNode: BinarySearchTreeNodePlain<T> = { data: node.data }; // Initialize the root plain object
        const queue: [BinarySearchTreeNode<T>, BinarySearchTreeNodePlain<T>][] = [[node, rootPlainNode]]; // Initialize the queue with the root node and its plain object

        while (queue.length > 0) { // While there are nodes in the queue
            const [currentNode, currentPlainNode] = queue.shift()!; // Remove and get the first node and its plain object from the queue

            if (currentNode.leftNode) { // If the left child exists
                currentPlainNode.leftNode = { data: currentNode.leftNode.data }; // Create a plain object for the left child
                queue.push([currentNode.leftNode, currentPlainNode.leftNode]);  // Add the left child and its plain object to the queue
            }

            if (currentNode.rightNode) { // If the right child exists
                currentPlainNode.rightNode = { data: currentNode.rightNode.data }; // Create a plain object for the right child
                queue.push([currentNode.rightNode, currentPlainNode.rightNode]); // Add the right child and its plain object to the queue
            }
        }

        return rootPlainNode; // Return the root plain object 
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