import React from "react"

function GradientBackground() {
  return (
    <div
      css={{
        background: [
          'red',
          'linear-gradient(#e66465, #9198e5)'
        ],
        height: 100
      }}
    >
      This has a gradient background in browsers that support
      gradients and is red in browsers that don't support
      gradients
    </div>
  )
}

export default GradientBackground
