import React from 'react'
import Node from './Node'
import { BinarySearchTree } from '@/logic/binarySearchTree'

function comparator(a: number, b: number) {
  if (a < b) return -1;

  if (a > b) return 1;

  return 0;
}

const bst = new BinarySearchTree(comparator);

bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(1);
bst.insert(7);
bst.insert(6);
bst.insert(8);

const Grid = () => {
  return (
    <div className='grid grid-cols-7 gap-2'>
      <h2></h2>
      {/* <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={true} value={8} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />

      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} edgeRight={true} />
      <Node activeNode={false} />
      <Node activeNode={false} edgeLeft={true} />
      <Node activeNode={false} />
      <Node activeNode={false} />

      <Node activeNode={false} />
      <Node activeNode={true} value={3} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={true} value={10} />
      <Node activeNode={false} /> */}

    </div>
  )
}

export default Grid
