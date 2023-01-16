import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/BaseLayout"
import SearchContainer from "./containers/SearchContainer"
export default () => [
  {
    path: ROUTES.SEARCH,
    layout: Layouts,
    component: SearchContainer,
  },
]
