// A interface for the plain object representation of a node. This allows us to render a node in a Next.js component.
interface BinarySearchTreeNodePlain<T> {
    data: T;
    leftNode?: BinarySearchTreeNodePlain<T>;
    rightNode?: BinarySearchTreeNodePlain<T>;
}

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
    

    getRoot(): BinarySearchTreeNode<T> | undefined {
        return this.root;
    }
}