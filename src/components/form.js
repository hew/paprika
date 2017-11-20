import React from 'react'
import Input from 'react-enhanced-form'
import { navigateTo } from 'gatsby-link'
import Joi from 'joi-browser'
import Button from './button'
import { nameSchema, emailSchema, encode } from '../utils/helpers'
import { closeFormModal } from '../state/form-modal-state.js'
import { connect } from 'react-redux'
import '../styles'

const stylized = {
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 3,
  paddingLeft: 10
}

const style = {
  default: {
    color: 'black',
    outline: 'none',
    border: 'none',
    width: '100%',
    ...stylized
  },
  onFocus: { borderBottom: '1px solid #44bc8f', ...stylized },
  onError: { borderBottom: '1px solid #fc585f', ...stylized }
}

class Form extends React.Component {

  state = {
    submitError: null
  }

  validateName = e => {
    const result = Joi.validate({ name: e }, nameSchema)

    return !result.error
  }

  validateEmail = e => {
    const result = Joi.validate({ email: e }, emailSchema)

    return !result.error
  }

  handleSubmit = e => {
    e.preventDefault()

    const validName = this.inputName.state.error
    const validEmail = this.inputEmail.state.error

    const email = this.inputEmail.input.defaultValue
    const name = this.inputName.input.defaultValue

    if (!validEmail && !validName) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': this.props.listId, name: name, email: email })
      })
        .then(() => { 
          console.log('[Paprika] Form submission success')
          this.props.closeFormModal()
          navigateTo('/success')
        })
        .catch(error => { console.error('[Paprika] Form submission error:', error); this.handleNetworkError() })
    }

    else {
      this.handleFormError()
    }
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e)
    }
  }

  handleFormError = e => {
    this.setState({ submitError: 'There was an error with your name/email.' })
  }

  handleNetworkError = e => {
    this.setState({ submitError: 'There was a network error.' })
  }

  render() {
    const { submitError } = this.state

    return (
      <form
        ref={f => (this.form = f)}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
        onKeyDown={this.handleKeyDown}
      >
        <Box mb={1} borderColor={color.offWhite[1]} borderWidth={1}>
          <Input 
            type="text" 
            name="name" 
            ref={f => (this.inputName = f)} 
            value="" 
            placeholder="name" 
            check={this.validateName} 
            style={style} 
          />
        </Box>
        <Box borderColor={color.offWhite[1]} borderWidth={1}>
          <Input 
            type="text" 
            name="email" 
            ref={f => (this.inputEmail = f)} 
            value="" 
            placeholder="name@domain.com" 
            check={this.validateEmail} 
            style={style} 
          />
        </Box>
        <Button w={1} mt={2} onClick={this.handleSubmit}>
          Submit
        </Button>
        {submitError && 
          <P mt={2} align="center">
            <mark>{submitError}</mark>
          </P>}
      </form>
    )
  }

}

export default connect(
  store => ({}),
  dispatch => ({ closeFormModal: () => dispatch(closeFormModal()) })
)(Form);
