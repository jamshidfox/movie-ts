import React from "react"
import styled from "styled-components"
import { Modal, ModalBody } from "reactstrap"
import PopularMoviesModalHeader from "./PopularMoviesModalHeader"
interface Props {
  toggle: any
  modal: boolean
  data: {
    title: string
    backdropPath?: string
    overview: string
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
  padding: 20px 60px;
  color: white;
`
const MovieInfoDescription = styled("div")``
const MovieInfoText = styled("div")``

const Container = styled("div")``

const MovieInfoModal: React.FC<Props> = ({ toggle, modal, data }) => {
  //   console.log(typeof data)
  // console.log(data)
  return (
    <Container>
      <PopularMoviesModal isOpen={modal} toggle={toggle} size="lg">
        <PopularMoviesModalBody toggle={toggle}>
          <PopularMoviesModalHeader toggle={toggle} data={data} />
          <MovieInfo>
            <MovieInfoDescription>{data.overview}</MovieInfoDescription>
            <MovieInfoText></MovieInfoText>
          </MovieInfo>
        </PopularMoviesModalBody>
        {/* <ModalFooter>
        </ModalFooter> */}
      </PopularMoviesModal>
    </Container>
  )
}
export default MovieInfoModal
