import React, { Component } from 'react'
import NavModal from '../components/nav-modal'
import FormModal from '../components/form-modal'
import Link from 'gatsby-link'
import Button from './button'
import Icon from 'react-geomicons'
import Logo from '../components/logo'
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
    const { items = [], modal } = this.props
    const { formModal, navModal } = modal
    const noBorder = { borderBottom: 'none' }

    return (
      <Flex>
        <Container>
          <Flex py={3} align='center'>
            <Box mt={2}>
              <Link to="/" style={noBorder}>
                {/* 
                  <H4>Home</H4>
                */}
                <Logo />
              </Link>
            </Box>
            <Row is='ul' display={['none', 'flex']} ml='auto'>
              {items.map((x, i) => (
                <li key={i.toString()}>
                  <Link activeClassName="--active" to={x.link} style={noBorder}>
                    <H4 px={1}>{x.text}</H4>
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" onClick={this.toggleFormModal} style={noBorder}>
                  <Button ml={1}>Form/Modal</Button>
                </a>
              </li>
            </Row>
            <Flex display={['flex', 'none']} align='center' px={2} ml='auto'>
              <a style={{ position: 'relative', zIndex: '9', ...noBorder }} onClick={this.toggleNavModal}>
                <Icon name="chevronDown" />
              </a>
            </Flex>
            <NavModal items={items} open={navModal.show} />
          </Flex>
        </Container>
        <FormModal open={formModal.show} />
      </Flex>
    )
  }

}

export default connect(
  store => ({ modal: { navModal: store.navModal, formModal: store.formModal } }),
  dispatch => ({ 
    openNavModal: i => dispatch(openNavModal(i)),
    closeNavModal: i => dispatch(closeNavModal(i)),
    openFormModal: i => dispatch(openFormModal(i)),
    closeFormModal: i => dispatch(closeFormModal(i))
  })
)(Nav)
