import React from 'react'
import Node from './Node'
import { BinarySearchTree } from '@/logic/binarySearchTree'
import { BinarySearchTreeNodePlain, TreeNode } from '@/logic/types';
import { getValuesByLayer } from '@/logic/getValuesByLayer';

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

  const x = JSON.stringify(rootNode, null, 2);
  const tree: TreeNode = JSON.parse(x);
  const layers = getValuesByLayer(tree);

  return (
    <>
      <div className='grid grid-cols-7 gap-2'>
        <p>{layers}</p>
      </div>
    </>
  )
}

export default Grid