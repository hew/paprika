import color from './color.js'
import {injectGlobal} from 'styled-components'
const normalize = require('!raw-loader!./normalize.css')

injectGlobal`
  ${normalize}
  
  * { box-sizing: border-box; }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "Arial",
      sans-serif;
  }
  html, body, #___gatsby, #___gatsby > div {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  ul, li {
    margin: 0;
  }
  li {
    display: block;
  }
  a {
    text-decoration: none;
    color: ${color.gray[0]};
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  p {
    font-size: 17px;
  }
  .features a {
    border-bottom: 2px solid ${color.gray[0]};
  }
`
