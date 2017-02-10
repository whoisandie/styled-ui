import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <Block>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
  .add('reverse', () => (
    <Block reverse>Officia aliqua reprehenderit fugiat occaecat quis non eiusmod.</Block>
  ))
