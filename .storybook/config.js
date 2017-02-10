import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@kadira/storybook'

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const req = require.context('../modules', true, /.stories.js$/)

// Utilize the getTheme utility. Look into material UI
// const theme = getTheme({
//    Override default theme config here!
// })
const theme = {}

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))

configure(loadStories, module)
