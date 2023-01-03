import React from "react"
import { Provider } from "react-redux"
import RoutesWithSubRoutes from "./components/RouteWithSupRoutes"

function App(props: any) {
  const store = props.store
  return (
    <Provider store={store}>
      <RoutesWithSubRoutes {...props} />
    </Provider>
  )
}

export default App
