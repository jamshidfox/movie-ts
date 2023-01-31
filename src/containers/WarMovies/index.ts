import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/MovieBaseLayout"
import WarContainer from "./containers/WarContainer"
export default () => [
  {
    path: ROUTES.WAR_MOVIES,
    layout: Layouts,
    component: WarContainer,
  },
]
