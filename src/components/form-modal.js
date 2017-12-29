import React from 'react';
import Modal from 'react-modal';
import Form from '../components/form';
import styled from 'styled-components';
import Icon from 'react-geomicons';
import {formId} from '../data';
import {connect} from 'react-redux';
import {closeFormModal, openFormModal} from '../state/form-modal-state.js';

const styles = {
  overlay: {
    zIndex: 10, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  content: {
    width: '70%', 
    maxWidth: '800px',
    height: 'auto',
    minHeight: '500px',
    position: 'static'
  }
};

const Pointer = styled.div`
  cursor: pointer;
`;

class FormModal extends React.Component {
  render() {
    const {open = false, openFormModal, closeFormModal} = this.props;

    return (
      <Modal isOpen={open} contentLabel="Modal" style={styles}>
        <Flex justify="flex-end">
          <Pointer>
            <Box onClick={() => closeFormModal()}>
              <Icon name="close" />
            </Box>
          </Pointer>
        </Flex>
        <H1 mb={2}>
          Netlify static form submission. It's awesome.
        </H1>
        <Flex wrap justify="center" py={3}>
          <Box width={[1, 1, 1/2]} p={1}>
            <H4 mb={2}>Email</H4>
            <P mr={[0, 0, 2]}>
              Throw in soome client-side form validation 😈 and you are good to go.
              Use the Netlify UI to connect each form to <a href="https://ifttt.com/">IFTTT</a>, <a href="https://zapier.com/">Zapier</a>, etc.
            </P>
          </Box>
          <Box width={[1, 1, 1/2]} p={1}>
            <H4 mb={2}>Give it a shot.</H4>
            <Form formId={formId} />
          </Box>
        </Flex>
      </Modal>
    );
  }
}

export default connect(
  store => ({modal: store.formModal, }),
  dispatch => ({
    openFormModal: () => dispatch(openFormModal()),
    closeFormModal: () => dispatch(closeFormModal())
  })
)(FormModal);
