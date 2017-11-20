import React from 'react'

const AnotherPage = ({ ...props }) => {
  return (
    <Container>
      <Box>
        <H1>Routing!</H1>
        <p>With Gatsby, every page you create in <mark>src/pages/</mark> becomes a route. Easy!</p>
      </Box>
    </Container>
  )
}

export default AnotherPage;
