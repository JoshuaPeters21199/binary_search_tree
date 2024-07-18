import React from 'react'
// import Node from './Node'
import { BinarySearchTree } from '@/logic/binarySearchTree'
import { TreeNode } from '@/logic/types';
import { getValuesByLayer } from '@/logic/getValuesByLayer';
import { createGridMatrix } from '@/logic/createGridMatrix';

function comparator(a: number, b: number) {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}

const Grid = () => {
  const bst = new BinarySearchTree(comparator);

  bst.insert(5);
  bst.insert(7);
  bst.insert(2);
  bst.insert(1);
  bst.insert(3);
  bst.insert(6);
  bst.insert(8);

  const rootNode = bst.getRootAsPlainObject(); // Extract the tree object
  const x = JSON.stringify(rootNode, null, 2); // Convert the tree object to JSON string
  const tree: TreeNode = JSON.parse(x); // Convert JSON string to JSON
  const layers = getValuesByLayer(tree); // Create an array of array that contain the tree layers
  const gridWidth = (bst.getWidth() * 2) - 2; // Get width of grid to display the tree

  const nodeLocations = createGridMatrix(gridWidth, layers);

  console.log(nodeLocations);

  return (
    <>
      <div className='grid grid-cols-7 gap-2'></div>
    </>
  )
}

export default Grid