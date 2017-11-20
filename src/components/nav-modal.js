import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import Link from 'gatsby-link'
import Button from './button.js'
import Icon from 'react-geomicons'
import '../styles'

// Wire up Redux
import { connect } from 'react-redux'
import { closeNavModal, openNavModal } from '../state/nav-modal-state.js'

// Not sure how to SC this one, so we stick with js styles
const modalStyles = {
  overlay: { backgroundColor: 'white' },
  content: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40px',
    left: '30px',
    right: '40px',
    bottom: '40px',
    border: 'none',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

class NavModal extends React.Component {

  handleClick = e => {
    event.persist()
    this.props.closeNavModal()
  }
  render() {
    const { open = false, closeNavModal, list } = this.props

    return (
      <Modal isOpen={open} contentLabel="Modal" style={modalStyles}>
        <ul style={{padding: 0}}>
          {this.props.items.map((x, i) => (
            <li key={i} style={{margin: '1em 0'}}>
              <Link onClick={this.handleClick} to={x.link}>
                <h2>{x.text}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
    )
  }

}

export default connect(
  store => ({ modal: store.navModal }),
  dispatch => ({
    openNavModal: () => dispatch(openNavModal()),
    closeNavModal: () => dispatch(closeNavModal())
  })
)(NavModal)

