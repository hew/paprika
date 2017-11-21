import React from 'react'

const Success = ({ ...props }) => {
  return (
    <Container>
      <Box>
        <H1>Thanks!</H1>
        <h2>Your form submission was a success.</h2>
        <p>(Check the 'forms' section of your Netlify UI to see this submission.)</p>
      </Box>
    </Container>
  )
}

export default Success;
