// A interface for the plain object representation of a node. This allows us to render a node in a Next.js component.
export interface BinarySearchTreeNodePlain<T> {
    data: T;
    leftNode?: BinarySearchTreeNodePlain<T>;
    rightNode?: BinarySearchTreeNodePlain<T>;
}

/**
 * Represents a node in a binary tree
 */
export interface TreeNode {
    data: number;
    leftNode?: TreeNode;
    rightNode?: TreeNode;
}