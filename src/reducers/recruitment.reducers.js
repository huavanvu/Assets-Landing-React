import * as actionType from '../constants/actionType'
const initialState = {
  recruitmentList: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case actionType.REQUEST_GET_CRUITMENT_LIST:
    return { ...state, recruitmentList: action.payload }

  default:
    return state
  }
}
