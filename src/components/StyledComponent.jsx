import React from "react"
import styled from "@emotion/styled"

const StyledComponent = styled.div(props => ({
  color: props.theme.colors.primary || 'hotpink',
  '&:hover': {
    color: props.color || 'white'
  },
  textDecoration: 'underline'
}))

export default StyledComponent
