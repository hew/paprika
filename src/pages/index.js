import React from 'react'

const Home = () => (
  <Container>
    <H1>Paprika</H1>
    <p>A Gatsby starter for people who love forms but hate servers.</p> 

    <H2>Why:</H2>
    <ul className="features">
      <li><Box py={1}>☑️ &nbsp; You want a page/website with a form</Box></li>
      <li><Box py={1}>☑️ &nbsp; You want that page/website to be static</Box></li>
      <li><Box py={1}>☑️ &nbsp; You want to use React/Redux</Box></li>
      <li><Box py={1}>☑️ &nbsp; You want to use, but not configure or worry about React Router or Webpack.</Box></li>
    </ul>

    <H2>Features:</H2>
    <ul className="features">
      <li>
        <Box py={1}>☑️ &nbsp;
          <a href='https://github.com/styled-components/styled-components#docs'>Styled Components</a> /&nbsp;
          <a href='https://github.com/jxnblk/styled-system#usage'>Styled System</a>&nbsp;
        </Box>
      </li>
      <li>
        <Box py={1}>☑️ &nbsp;
          <a href='https://github.com/reactjs/redux'>Redux</a> /&nbsp;
          <a href='https://github.com/reactjs/react-redux'>React Redux</a>
        </Box>
      </li>
      <li>
        <Box py={1}>☑️ &nbsp; 
          <a href="https://www.netlify.com/docs/form-handling/">Form submission</a> via&nbsp;
          <a href="https://netlify.com">Netlify</a>
        </Box>
      </li>
      <li>
        <Box py={1}>☑️ &nbsp;Client-side form validation with&nbsp;
          <a href='https://github.com/jeffbski/joi-browser'>Joi</a> (browser)
        </Box>
      </li>
      <li>
        <Box py={1}>☑️ &nbsp; Portals! (mobile nav, modal)</Box>
      </li>
    </ul>

  </Container>
)

export default Home
