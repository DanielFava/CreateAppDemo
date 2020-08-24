import React from 'react'
import {
  Container, 
  Botao,
  BotaoContainer,
  Texto,
  TextoListagem,
  ViewBotao,
  ViewContainer,
  Divisao,
  Linha,
  ViewDeletar,
  ViewEditar,
} from './Styles-Listagem'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Listagem({ data, deleteItem }){
  return(
    <Container>
      <Divisao>
        <ViewContainer>
          <BotaoContainer>
            <Texto>Nome: <TextoListagem>{data.nome}</TextoListagem></Texto>
            <Texto>Telefone: <TextoListagem>{data.telefone}</TextoListagem></Texto>
          </BotaoContainer>
        </ViewContainer>
        <ViewBotao>
          <Botao>
            <Icon name="square-edit-outline" size={25} />
          </Botao>
          <Linha />
          <Botao onPress={() => deleteItem(data.key)}>
            <Icon name="delete-circle-outline" size={25} />
          </Botao>
        </ViewBotao>
      </Divisao>
    </Container>
  )
}