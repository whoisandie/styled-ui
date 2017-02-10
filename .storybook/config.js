import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@kadira/storybook'

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const req = require.context('../stories', true, /.stories.js$/)

const theme = {}

addDecorator(story => (
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))

configure(loadStories, module)