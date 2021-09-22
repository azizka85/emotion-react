import { keyframes } from "@emotion/react"
import React from "react"

const bonce = keyframes({
  'from, 20%, 53%, 80%, to': {
    transform: 'translate3d(0,0,0)'
  },
  '40%, 43%': {
    transform: 'translate3d(0, -30px, 0)'
  },
  '70%': {
    transform: 'translate3d(0, -15px, 0)'
  },
  '90%': {
    transform: 'translate3d(0,-4px,0)'
  }
})

function Keyframes() {
  return (
    <div
      css={theme => ({
        animation: `${bonce} 1s ease infinite`,
        color: theme.colors.primary
      })}
    >
      some bouncing text!
    </div>
  )
}

export default Keyframes
