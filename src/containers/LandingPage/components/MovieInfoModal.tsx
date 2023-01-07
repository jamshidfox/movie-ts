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

const Container = styled("div")``

const MovieInfoModal: React.FC<Props> = ({ toggle, modal, data }) => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500"

  //   console.log(typeof data)
  console.log(data)
  return (
    <Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{data.title}</ModalHeader>
        <ModalBody>
          <img src={ImgUrl + data.backdropPath} />
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
