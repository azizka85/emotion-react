import { useTheme } from "@emotion/react"
import React from "react"

function P(props) {
  const { children, ...rest } = props

  return (
    <p 
      css={theme => ({
        margin: 0,
        fontSize: 12,
        lineHeight: 1.5,
        fontFamily: 'Sans-Serif',
        color: theme.colors.primary
      })}   
      {...rest} 
    >
      {children}
    </p>
  )
}

function Article(props) {
  const { children, ...rest } = props

  return (
    <P 
      css={theme => ({
        fontSize: 14,
        fontFamily: 'Georgia, serif',
        color: 'darkorchid'
      })}
      {...rest} 
    >
      {children}
    </P>
  )
}

function PrecedenceComponent() {
  const theme = useTheme()

  return (
    <div css={{
      color: theme.colors.primary
    }}>
      Hello I'm Precedence component and i consist of:
      <P>I'm paragraph</P>
      <Article>I'm article</Article>
    </div>
  )
}

export default PrecedenceComponent

