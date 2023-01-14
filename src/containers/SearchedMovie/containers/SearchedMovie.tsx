import React from "react"
import styled from "styled-components"
import { MoviePlayer } from "../../../components/VideoPlayer"

const Container = styled.div``

const SearchedResult: React.FC = () => {
  return (
    <Container>
      <MoviePlayer url="https://voxe-cdn.s3.eu-north-1.amazonaws.com/cartoons/gorod-geroev-big-hero-6-2014-bdrip-720p-x264-rus-eng/master.m3u8" />
    </Container>
  )
}

export default SearchedResult
