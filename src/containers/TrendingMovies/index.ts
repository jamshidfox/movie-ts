import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/MovieBaseLayout"
import CartoonsContainer from "./containers/TrendingContainer"
export default () => [
  {
    path: ROUTES.TRENDING_MOVIES,
    layout: Layouts,
    component: CartoonsContainer,
  },
]
