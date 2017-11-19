import React, { Component } from 'react'
import NavModal from '../components/nav-modal'
import Link from 'gatsby-link'
import Button from './button'
import Icon from 'react-geomicons'
import '../styles'

// Wire it up to the modal
import { connect } from 'react-redux'
import { openNavModal, closeNavModal } from '../state/nav-modal-state'
import { openFormModal, closeFormModal } from '../state/form-modal-state'

class Nav extends Component {

  toggleNavModal = e => {
    e.preventDefault()
    if (this.props.modal.navModal.show) {
      this.props.closeNavModal()
    }
    else { 
      this.props.openNavModal()
    }
  }

  toggleFormModal = e => {
    e.preventDefault()
    this.props.openFormModal()
  }

  render() {
    const { items = [], dark } = this.props

    return (
      <Flex>
        <Container>
          <Flex py={3} align='center'>
            <Box>
              <Link to="/">
                {/* 
                  Some icon (maybe) 
                  Or: <H4>Home</H4>
                */}
                <Icon name="cloud" size={30} />
              </Link>
            </Box>
            <Row is='ul' display={['none', 'flex']} ml='auto'>
              {items.map((x, i) => (
                <li key={i}>
                  <Link activeClassName="--active" to={x.link} style={{textDecoration: 'none'}}>
                    <H4 px={1}>{x.text}</H4>
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" onClick={this.toggleFormModal}>
                  <Button ml={1}>Modal</Button>
                </a>
              </li>
            </Row>
            <Flex display={['flex', 'none']} align='center' px={2} ml='auto'>
              <a style={{ position: 'relative', zIndex: '9' }} onClick={this.toggleNavModal}>
                <Icon name="chevronDown" />
              </a>
            </Flex>
            <NavModal items={items} open={this.props.modal.navModal.show} />
          </Flex>
        </Container>
      </Flex>
    )
  }

}

export default connect(
  store => ({ modal: store.navModal }),
  dispatch => ({ 
    openNavModal: () => dispatch(openNavModal()),
    closeNavModal: () => dispatch(closeNavModal()),
    openFormModal: i => dispatch(openFormModal(i)),
    closeFormModal: i => dispatch(closeFormModal(i))
  })
)(Nav)
