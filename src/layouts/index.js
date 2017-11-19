import React from 'react'
import Nav from '../components/nav.js'
import Footer from '../components/footer'

// Global Styles
import '../styles'

// Import (Marketing) Data
import data from '../data'

const Template = ({ children, location }) => {
  const { headerLinks } = data

  return (
    <Box px={[2]}>
      <nav>
        <Nav items={headerLinks} />
      </nav>
      <main>
        {children()}
      </main>
      <Footer />
    </Box>
  )
}

export default Template
