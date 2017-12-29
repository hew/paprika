// ActionTypes:
const OPEN_NAV_MODAL = 'OPEN_NAV_MODAL'
const CLOSE_NAV_MODAL = 'CLOSE_NAV_MODAL'

// Actions:
export const openNavModal = () => ({
  type: OPEN_NAV_MODAL,
  payload: {
    show: true
  }
})

export const closeNavModal = () => ({
  type: CLOSE_NAV_MODAL,
  payload: {
    show: false
  }
})

// Set InitialState
export const initialNavModalState = {
  show: false
}

// Reducer
export const navModalReducer = (state = initialNavModalState, action) => {
  switch (action.type) {
    case OPEN_NAV_MODAL:
      return { state, ...action.payload }
    case CLOSE_NAV_MODAL:
      return { state, ...action.payload }
    default:
      return state
  }
}
