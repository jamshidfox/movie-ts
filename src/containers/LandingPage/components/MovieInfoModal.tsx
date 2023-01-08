import React, { useState } from "react"
import styled from "styled-components"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
interface Props {
  toggle: any
  modal: boolean
  data: {
    title: string
    backdropPath?: string
  }
}

interface ImageProps {
  background: string
}

const Container = styled("div")``
const ModalImage = styled("img")`
  width: 100px;
  height: 60px;
`
const MovieImageBox = styled("div")<ImageProps>`
  background-image: ${(props: ImageProps) => {
    return props.background
  }};
  width: 100%;
  height: 200px;
`
const MovieInfoModal: React.FC<Props> = ({ toggle, modal, data }) => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500"

  //   console.log(typeof data)
  console.log(data)
  return (
    <Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody toggle={toggle}>
          <MovieImageBox
            background={ImgUrl + data.backdropPath}
          ></MovieImageBox>
          {data.title}
          <ModalImage src={ImgUrl + data.backdropPath} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}
export default MovieInfoModal
