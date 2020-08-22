import React from 'react'
import {Container, Texto} from './Styles-Listagem'

export default function Listagem({ data }){
  return(
    <Container>
        <Texto>{data.nome}</Texto>
        <Texto>{data.nome}</Texto>
        <Texto>{data.nome}</Texto>
        <Texto>{data.nome}</Texto>
    </Container>
  )
}