import { UPDATE_FORM_STATE } from 'constants/redux/FINALFORM'

export default function FinalFormReducer (state = {}, action = {}) {
  switch (action.type) {
    case UPDATE_FORM_STATE:
      return {
        ...state,
        [action.form]: action.payload
      }

    default:
      return state
  }
}
