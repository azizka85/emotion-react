import React from "react"

function ChildSelector() {
  return (
    <div
      css={{
        color: 'darkorchid',
        '& .name': {
          color: 'orange'
        }
      }}
    >
      This is darkorchid.
      <div className="name">This is orange</div>
    </div>
  )
}

export default ChildSelector
