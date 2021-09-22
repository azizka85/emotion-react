import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ChildSelector from './components/ChildSelector'
import Composition from './components/Composition'
import CssPropComponent from './components/CssPropComponent'
import FacepaintMediaQueries from './components/FacepaintMediaQueries'
import GradientBackground from './components/GradientBackground'
import Keyframes from './components/Keyframes'
import MediaQuery from './components/MediaQuery'
import PrecedenceComponent from './components/PrecedenceComponent'
import ReusableMediaQueries from './components/ReusableMediaQueries'
import SimpleComponent from './components/SimpleComponent'
import StyledComponent from './components/StyledComponent'
import TargetingComponent from './components/TargetingComponent'
import WithComponent from './components/WithComponent'

const theme = {
  colors: {
    primary: 'blue'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div css={{
        color: theme.colors.primary
      }}>
        Hello World
      </div>
      <SimpleComponent />
      <CssPropComponent />
      <PrecedenceComponent />
      <StyledComponent color="red">Hello, I'm styled component</StyledComponent>
      <WithComponent color="brown">Hello, I'm styled article component</WithComponent>
      <TargetingComponent />
      <ChildSelector />
      <MediaQuery />
      <GradientBackground />
      <Composition />
      <ReusableMediaQueries />
      <FacepaintMediaQueries />
      <Keyframes />
    </ThemeProvider>
  )
}

export default App
