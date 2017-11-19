import React from 'react'
import styled from 'styled-components'
import { max_width } from './sizes'
import { 
  space, width,
  fontSize, boxShadow,
  color, backgroundColor,
  flex, flexDirection, flexWrap, 
  alignItems, justifyContent, 
  borderWidth, borderColor,
  removeProps,
  cleanElement,
  responsiveStyle
} from 'styled-system'

const BaseComponent = props => {
  const { is = 'div' } = props;

  // Remove invalid props
  const next = removeProps(props)

  // Remove valid(?) props
  // TODO: This is getting a little messy
  delete next.is
  delete next.display
  delete next.width
  delete next.borderColor

  return React.createElement(is, ...next)
}

// Custom helper
const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display'
})

export const Box = styled(BaseComponent)(
  [], 
  width, 
  fontSize, 
  space, 
  color,
  backgroundColor,
  borderWidth,
  borderColor,
  boxShadow,
  display
)

// Here we have a duplicate display because the first is effective a default.
export const Flex = Box.extend`
  display: flex;
  ${display};
  ${flex};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
`

export const Container = styled.div`
  max-width: ${max_width};
  margin: 0 auto;
  width: 100%;
`

export const Row = ({ children, ...props }) => (
  <Flex wrap justify="center" align="center" {...props}>
    {children}
  </Flex>
)
