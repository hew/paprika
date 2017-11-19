// ActionTypes:
const OPEN_FORM_MODAL = 'OPEN_FORM_MODAL'
const CLOSE_FORM_MODAL = 'CLOSE_FORM_MODAL'

// Actions:
export const openFormModal = listId => ({
  type: OPEN_FORM_MODAL,
  payload: {
    show: true,
    list: listId
  }
})

export const closeFormModal = () => ({
  type: CLOSE_FORM_MODAL,
  payload: {
    show: false,
    list: null
  }
})

// Set InitialState
export const initialFormModalState = {
  formModal: {
    show: false,
    list: ''
  }
}

// Reducer
export const formModalReducer = (state = initialFormModalState, action) => {
  switch (action.type) {
    case OPEN_FORM_MODAL:
      return { ...state, formModal: action.payload }
    case CLOSE_FORM_MODAL:
      return { ...state, formModal: action.payload }
    default:
      return state
  }
}
