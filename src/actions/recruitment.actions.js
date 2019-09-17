import apiService from '../untils/apiServices';
import * as actionType from './../constants/actionType'
export const REQUET_GetRecruitmentPositionList = () => {
  return async dispatch => {
    const response = await apiService('recruit/all');
    dispatch(setCruitmentListIntoReducer(response.data))
  }
}
const setCruitmentListIntoReducer = (cruitmentList) => ({
  type: actionType.REQUEST_GET_CRUITMENT_LIST,
  payload: cruitmentList
})