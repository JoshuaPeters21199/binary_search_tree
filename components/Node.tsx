import React from 'react'
import '../styles/custom.css'

interface NodeProps {
    activeNode: boolean,
    edgeRight?: boolean,
    edgeLeft?: boolean,
    value?: number
}

const Node: React.FC<NodeProps> = ({ activeNode, edgeRight, edgeLeft, value }) => {
  return (
    <div className={`
      ${activeNode ? 'outline-dotted outline-2 outline-offset-2' : ''}
      ${edgeRight ? 'diagonal-line-right' : ''}
      ${edgeLeft ? 'diagonal-line-left' : ''}
      flex items-center justify-center w-12 h-12 rounded-full
    `}>
      {value}
    </div>
  )
}

export default Node
