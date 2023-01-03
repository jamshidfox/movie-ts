import { equals } from "ramda"
import { useDispatch, useSelector } from "react-redux"
import { getDataFromState } from "../utils/get"

import useCompareEffect from "./useCompareEffect"

export const useFetchList = (params) => {
  const { stateName, action, key = "list" } = params

  const dispatch = useDispatch()

  const data = useSelector(
    (state) => getDataFromState(stateName, state),
    equals
  )
  useCompareEffect(() => {
    dispatch(action({}))
  }, [key])

  return data
}
