import { Row, Flex, Box, Container } from './layout'
import { max_width, sm_screen, md_screen, lg_screen } from './sizes'
import { H1, H2, H3, H4, P, Span, Ul, Li } from './type'
import color from './color'
import './global'

/*
 * RE Globals: 
 * I actually think this is an OK use case for globals, given that the context here
 * is a static website, probably just sitting in isolation. __But if that is not the case,
 * you can simply delete this file and then import all these values indidivually__.
 */

global.Row = Row
global.Flex = Flex
global.Box = Box
global.Container = Container

global.max_width = max_width
global.sm_screen = sm_screen
global.md_screen = md_screen
global.lg_screen = lg_screen

global.color = color

global.H1 = H1
global.H2 = H2
global.H3 = H3
global.H4 = H4
global.Span = Span
global.P = P
global.Ul = Ul
global.Li = Li
