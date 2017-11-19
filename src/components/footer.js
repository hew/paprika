import React from 'react'

const Footer = () => {
  const linkStyles = { fontWeight: 'bold', borderBottom: `2px solid ${color.red[0]}` }
  return (
    <footer>
      <Container>
        <Box mt={2} mb={2}> 
          <p>Made by <a style={linkStyles} href="https://github.com/hew">hew</a></p>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
