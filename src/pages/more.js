import React from 'react'
import FormModal from '../components/form-modal'
import { Secondary as ButtonSecondary } from '../components/button.js'

// Wire it up to the modal
import { connect } from 'react-redux'
import { openFormModal } from '../state/form-modal-state'

const Resources = ({ ...props }) => {
  const handleOpenModal = e => {
    props.openFormModal(e.currentTarget.dataset.id)
  }
  const download = { cursor: 'pointer' }
  const { formModal } = props.modal

  return (
    <Container>
      <Box w={[1, 2 / 3]} >
        <H1>Another page, another broken heart</H1>
        <p>Routing is the best, Jerry, the best.</p>
      </Box>
      <FormModal open={formModal.show} list={formModal.list} />
    </Container>
  )
}
export default connect(
  store => ({ modal: store.formModal }),
  dispatch => ({
    openFormModal: i => dispatch(openFormModal(i)),
    closeFormModal: i => dispatch(closeFormModal(i))
  })
)(Resources)
