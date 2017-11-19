import { createStore, combineReducers } from 'redux'
import { formModalReducer, initialFormModalState } from './form-modal-state'
import { navModalReducer, initialNavModalState } from './nav-modal-state'

// createStore(reducer, [preloadedState], [enhancer])
const store = () => createStore( 
  combineReducers({
    navModal: navModalReducer,
    formModal: formModalReducer
  }),
)

export default store
