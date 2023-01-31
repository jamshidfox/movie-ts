import React from "react"
import styled from "styled-components"
import OtherCartoons from "../components/OtherCartoons"
import { useFetchList } from "../../../hooks/useFetchList"
import * as STATE from "../../../constants/stateNames"
import { getWarMovies } from "../actions/index"
interface PopularList {
  data?: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
const Container = styled.div`
  margin-top: 2rem;
`

const WarContanier: React.FC = () => {
  const cartoonMovies = () => ({
    action: getWarMovies,
    stateName: STATE.WAR_MOVIES,
  })
  const cartoonList: PopularList = useFetchList(cartoonMovies()) as {}
  return (
    <Container>
      {cartoonList.data && <OtherCartoons data={cartoonList.data} />}
    </Container>
  )
}

export default WarContanier
