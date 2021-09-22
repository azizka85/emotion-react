import React from "react"

function MediaQuery() {
  return (
    <div
      css={{
        color: 'darkorchid',
        '@media(min-width: 420px)': {
          color: 'orange'
        }
      }}
    >
      This is orange on a big screen and darkorchid on a small
      screen.
    </div>
  )
}

export default MediaQuery
