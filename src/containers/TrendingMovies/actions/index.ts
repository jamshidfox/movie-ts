import { sprintf } from "sprintf-js"
import * as actionTypes from "../../../constants/actionTypes"
import * as API from "../../../constants/api"
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess,
} from "../../../utils/axios"

export const getCartoons = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.TRENDING_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.TRENDING_MOVIES,
    })
  }
}
