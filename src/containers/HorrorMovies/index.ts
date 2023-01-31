import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/MovieBaseLayout"
import CartoonsContainer from "./containers/HorrorContainer"
export default () => [
  {
    path: ROUTES.HORROR_MOVIES,
    layout: Layouts,
    component: CartoonsContainer,
  },
]
