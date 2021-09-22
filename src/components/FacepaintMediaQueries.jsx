import facepaint from "facepaint"
import React from "react"

const breakpoints = [576, 768, 992, 1200]

const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)

function FacepaintMediaQueries() {
  return (
    <div
      css={mq({
        color: ['green', 'gray', 'hotpink']
      })}
    >
      Some text.
    </div>
  )
}

export default FacepaintMediaQueries
