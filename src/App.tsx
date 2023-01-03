import React from "react"
import RoutesWithSubRoutes from "./components/RouteWithSupRoutes"

function App(props: any) {
  return (
    <>
      <RoutesWithSubRoutes {...props} />
    </>
  )
}

export default App
