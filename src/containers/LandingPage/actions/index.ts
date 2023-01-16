import { sprintf } from "sprintf-js"
import * as actionTypes from "../../../constants/actionTypes"
import * as API from "../../../constants/api"
import axios, {
  getPayloadFromError,
  getPayloadFromSuccess,
} from "../../../utils/axios"

export const getPopularMovies = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.POPULAR_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.POPULAR_MOVIES,
    })
  }
}

export const getTrendingMovies = (id: any, data: any) => {
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

export const getWarMovies = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.WAR_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.WAR_MOVIES,
    })
  }
}

export const getFantasyMovies = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.FANTASY_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.FANTASY_MOVIES,
    })
  }
}
export const getScienceFictionMovies = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.SCIENCE_FICTION_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.SCIENCE_FICTION,
    })
  }
}

export const getActionMovies = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.ACTION_MOVIES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.ACTION_MOVIES,
    })
  }
}
export const getGenres = (id: any, data: any) => {
  return (dispatch: any, getState: any) => {
    const payload = axios({ dispatch, getState })
      .get(sprintf(API.GENRES, id), data)
      .then(getPayloadFromSuccess)
      .catch(getPayloadFromError)

    return dispatch({
      payload,
      type: actionTypes.GENRES,
    })
  }
}
