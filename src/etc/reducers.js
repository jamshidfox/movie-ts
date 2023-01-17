import { combineReducers } from "redux"
import { compose, forEach, toPairs } from "ramda"
import * as actionTypes from "../constants/actionTypes"
import * as STATE from "../constants/stateNames"
import createThunkReducer from "../utils/createThunkReducer"
import confirmDialogReducer from "../components/ConfirmDialog/reducer"

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    confirmDialog: confirmDialogReducer,
    [STATE.TRENDING_MOVIES]: createThunkReducer(actionTypes.TRENDING_MOVIES),
    [STATE.POPULAR_MOVIES]: createThunkReducer(actionTypes.POPULAR_MOVIES),
    [STATE.WAR_MOVIES]: createThunkReducer(actionTypes.WAR_MOVIES),
    [STATE.ACTION_MOVIES]: createThunkReducer(actionTypes.ACTION_MOVIES),
    [STATE.FANTASY_MOVIES]: createThunkReducer(actionTypes.FANTASY_MOVIES),
    [STATE.CARTOONS]: createThunkReducer(actionTypes.CARTOONS),
    [STATE.SCIENCE_FICTION_MOVIES]: createThunkReducer(
      actionTypes.SCIENCE_FICTION
    ),
    [STATE.GENRES]: createThunkReducer(actionTypes.GENRES),
    ...asyncReducers,
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export const injectReducers = (store, reducers) =>
  compose(
    forEach(([key, reducer]) => injectReducer(store, { key, reducer })),
    toPairs
  )(reducers)
