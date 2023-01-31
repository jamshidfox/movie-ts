import { sprintf } from "sprintf-js"
import * as actionTypes from "../../../constants/actionTypes"
import * as API from "../../../constants/api"
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess,
} from "../../../utils/axios"

export const getHorror = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.HORROR_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.HORROR_MOVIES,
    })
  }
}
