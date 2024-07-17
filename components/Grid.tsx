import React from 'react'
import Node from './Node'
import { BinarySearchTree } from '@/logic/binarySearchTree'
import { BinarySearchTreeNodePlain } from '@/logic/types';

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

  const rootNode = bst.getRootAsPlainObject();
  return (
    <>
      <pre>{JSON.stringify(rootNode, null, 2)}</pre>
      {/* <p>{bst.getDepth() + (bst.getDepth() - 1)}</p>
      <p>{(bst.getWidth() * 2) - 1}</p> */}
      <div className={`grid grid-cols-${(bst.getWidth() * 2) - 1} grid-row-${bst.getDepth() + (bst.getDepth() - 1)} gap-2`}></div>
    </>
  )
}

export default Grid
