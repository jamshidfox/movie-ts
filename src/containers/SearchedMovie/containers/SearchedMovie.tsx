import React from "react"
import styled from "styled-components"
import { MoviePlayer } from "../../../components/VideoPlayer"

const Container = styled.div``

const SearchedResult: React.FC = () => {
  const id = document.URL.split("?id=")[1]

  return (
    <Container>
      <MoviePlayer
        url={`https://voxe-cdn.s3.eu-north-1.amazonaws.com/movies/${id}/master.m3u8`}
      />
    </Container>
  )
}

export default SearchedResult
