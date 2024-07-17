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
  bst.insert(2);
  bst.insert(3);
  bst.insert(1);
  bst.insert(7);
  bst.insert(6);
  bst.insert(8);

  const rootNode = bst.getRootAsPlainObject();
  return (
    <>
      <pre>{JSON.stringify(rootNode, null, 2)}</pre>
      <div className='grid grid-cols-7 gap-2'></div>
    </>
  )
}

export default Grid
