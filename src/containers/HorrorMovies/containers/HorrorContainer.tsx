import React from "react"
import styled from "styled-components"
import OtherCartoons from "../components/OtherCartoons"
import { useFetchList } from "../../../hooks/useFetchList"
import * as STATE from "../../../constants/stateNames"
import { getHorror } from "../actions/index"
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

const CartoonsContainer: React.FC = () => {
  const cartoonMovies = () => ({
    action: getHorror,
    stateName: STATE.HORROR_MOVIES,
  })
  const cartoonList: PopularList = useFetchList(cartoonMovies()) as {}
  return (
    <Container>
      {cartoonList.data && <OtherCartoons data={cartoonList.data} />}
    </Container>
  )
}

export default CartoonsContainer
