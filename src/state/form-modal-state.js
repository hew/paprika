// ActionTypes:
const OPEN_FORM_MODAL = 'OPEN_FORM_MODAL'
const CLOSE_FORM_MODAL = 'CLOSE_FORM_MODAL'

// Actions:
export const openFormModal = () => ({
  type: OPEN_FORM_MODAL,
  payload: {
    show: true
  }
})

export const closeFormModal = () => ({
  type: CLOSE_FORM_MODAL,
  payload: {
    show: false
  }
})

// Set InitialState
export const initialFormModalState = {
  show: false
}

// Reducer
export const formModalReducer = (state = initialFormModalState, action) => {
  switch (action.type) {
    case OPEN_FORM_MODAL:
      return { state, ...action.payload }
    case CLOSE_FORM_MODAL:
      return { state, ...action.payload }
    default:
      return state
  }
}
