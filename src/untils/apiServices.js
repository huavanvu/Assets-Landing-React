import axios from "axios";
import {HOST} from '../constants/host'

export default async (endpoint, method = 'GET', body, params) =>{
  const result = await axios({
      method: method,
      url: `${HOST}/${endpoint}`,
      data: body,
      params
  }).catch(err => {
      console.log(err);
  });
  return result
};