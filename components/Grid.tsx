import React from 'react'
import Node from './Node'

const Grid = () => {


  return (
    <div className='grid grid-cols-7 gap-2'>
      {/* Row One */}
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={true} value={8} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />

      {/* Row Two EMPTY */}
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} edgeRight={true} />
      <Node activeNode={false} />
      <Node activeNode={false} edgeLeft={true} />
      <Node activeNode={false} />
      <Node activeNode={false} />

      {/* Row Three */}
      <Node activeNode={false} />
      <Node activeNode={true} value={3} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={false} />
      <Node activeNode={true} value={10} />
      <Node activeNode={false} />

    </div>
  )
}

export default Grid
