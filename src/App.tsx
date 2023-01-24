import React from "react"
import { Provider } from "react-redux"
import RoutesWithSubRoutes from "./components/RouteWithSupRoutes"

interface Props {
  store: {} | any
  routes: []
}

//

const App: React.FC<Props> = ({ routes, store }) => {
  return (
    <Provider store={store}>
      <RoutesWithSubRoutes routes={routes} />
    </Provider>
  )
}

export default App
