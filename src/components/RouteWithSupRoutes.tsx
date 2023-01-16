import { Routes, Route } from "react-router-dom"
import React from "react"
import styled from "styled-components"
import EmptyQuery from "./EmptyQuery"
import { DesktopNavbar } from "./Navbar"
import { Footer } from "./Footer"
import BaseLayout from "./Layout/BaseLayout"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NotFoundContainer = styled(BaseLayout)`
  min-height: 90vh;
`
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
        <Route
          path="*"
          element={
            <NotFoundContainer>
              <EmptyQuery />
            </NotFoundContainer>
          }
        />
      </Routes>
    </Container>
  )
}

export default RouteWithSupRoutes
