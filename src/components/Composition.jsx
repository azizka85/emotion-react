import React from "react"
import { css } from "@emotion/react"

const hotpink = css({
  color: 'hotpink'
})

const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
})

const hotpinkWithBlackBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
)

function Composition() {
  return (
    <div>
      <p css={hotpink}>This is hotpink</p>
      <button css={hotpinkHoverOrFocus}>
        This is hotpink on hover or focus
      </button>
      <p css={hotpinkWithBlackBackground}>
        This has a black background and is hotpink. Try moving
        where hotpink is in the css call and see if the color
        changes.
      </p>
    </div>
  )
}

export default Composition
