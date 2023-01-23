import React from "react"
import styled from "styled-components"
import { Modal, ModalBody } from "reactstrap"
import ModalHeader from "./ModalHeader"

interface Props {
  toggle: any
  modal: boolean
  data: {
    Id: string
    backdropPath: string
    movieId: string | null | number
    overview: string
    releaseDate: string
    title: string
    voteAverage: number
  }
}
const PopularMoviesModal = styled(Modal)`
  max-width: 909px;
  width: 100%;
  margin: 0 auto;
  top: 26px;
  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  > .modal-content {
    border-radius: 6px;
    border: 0;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    size: "sm";
    top: 0;
  }
`

const PopularMoviesModalBody = styled(ModalBody)`
  background-color: #10272f;
  padding: 0;
  height: 900px;
  border-radius: 6px;
`

const MovieInfo = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 30px;
  color: white;
`
const MovieInfoDescription = styled("div")``

const MovieInfoText = styled("div")``

const Container = styled("div")``

const MovieInfoModal: React.FC<Props> = ({ toggle, modal, data }) => {
  return (
    <Container>
      <PopularMoviesModal isOpen={modal} toggle={toggle} size="lg">
        <PopularMoviesModalBody toggle={toggle}>
          <ModalHeader toggle={toggle} data={data} />
          <MovieInfo>
            <MovieInfoDescription>{data.overview}</MovieInfoDescription>
            <MovieInfoText></MovieInfoText>
          </MovieInfo>
        </PopularMoviesModalBody>
      </PopularMoviesModal>
    </Container>
  )
}
export default MovieInfoModal
