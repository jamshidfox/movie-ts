import { Routes, Route } from "react-router-dom"
import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// const NotFoundContainer = styled(HomeLayout)`
//   min-height: 90vh;
// `
interface Props {
  routes: []
}
const RouteWithSupRoutes: React.FC<Props> = ({ routes }) => {
  return (
    <Container>
      <Routes>
        {routes.map(
          (
            route: { path: string; layout: Function; component: Function },
            index: number
          ) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          )
        )}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Container>
  )
}

export default RouteWithSupRoutes
