import { TreeNode } from "./types";

/**
 * Performs a level order traversal (breadth-first traversal) on a binary tree.
 * Returns a list of lists, where each inner list contains the values of the nodes at each level of the tree.
 * 
 * @param tree - The root node of the binary tree.
 * @return A list of lists, where each inner  list contains the values of the nodes at each level of the tree.
 */

export function getValuesByLayer(tree: TreeNode): number[][] {
    if (!tree) {
        return [];
    }

    const result: number[][] = [];
    const queue: TreeNode[] = [tree];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node) {
                levelValues.push(node.data);
                if (node.leftNode) {
                    queue.push(node.leftNode);
                }
                if (node.rightNode) {
                    queue.push(node.rightNode);
                }
            }
        }

        result.push(levelValues);
    }

    return result;
}
