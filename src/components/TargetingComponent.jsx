import React from "react"
import styled from "@emotion/styled"
import StyledComponent from "./StyledComponent"

const Child = styled.a({
  color: 'hotpink'
})

const Parent = styled.p({
  [Child]: {
    color: 'green'
  }
})

function TargetingComponent() {
  return (
    <div>
      <Child>Hotpink</Child>
      <Parent>
        <Child>Green</Child>
      </Parent>
    </div>
  )
}

export default TargetingComponent
