<p align="center"> <img src="https://user-images.githubusercontent.com/3103241/33089417-63897496-cea5-11e7-8d35-2b5c414944eb.png"/> </p>

A Netlify-hosted Gatsby starter for people who <del>love</del> need forms but hate servers.

Demo: https://goofy-swanson-215279.netlify.com/

## Why:

* You need a page/website with a form
* You need that page/website to be static
* You need to use React/Redux
* You need to use, but not configure or worry about React Router or Webpack

## Features:

*  [Styled Components](https://github.com/styled-components) / [Styled System](https://github.com/jxnblk/styled-system) 
*  [Redux](https://github.com/reactjs/redux) / [React Redux](https://github.com/reactjs/react-redux)
*  Form submission via [Netlify](https://www.netlify.com/)
*  Client-side form validation with [Joi](https://github.com/jeffbski/joi-browser) (browser)
*  Portals! (mobile nav, modal)

## Using Styled System

You can get by for basic layouts with a mixture of `<Box>` and `<Flex>` elements.
The width of the columns can be managed with the responsive width property. 

All these 'inline' styles are extracted out to Styled Components classes. This atomic-based
approach keeps your stylesheet nice and light.

```js
  // Row, 50% Columns
  <Flex wrap justify="center">
    <Box width={[1, 1/2]}>
      <H4>Email</H4>
      <P>
        Hummus
      </P>
    </Box>
    <Box width={[1, 1/2]}>
      <P>
        Tahini
      </P>
    </Box>
  </Flex>
```

```js
  // For conveinience, I've added a <Row> helper
  <Row>
    <Box width={[1, 1/2]}>
      <H4>Email</H4>
      <P>
        Hummus
      </P>
    </Box>
    <Box width={[1, 1/2]}>
      <P>
        Tahini
      </P>
    </Box>
  </Flex>
```

```js
  // Also, a few others.
  <Container>
  <H1>
  <P>
  // etc
```

## Try It Out:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hew/paprika)
