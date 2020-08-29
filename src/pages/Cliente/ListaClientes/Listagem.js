import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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

export default function Listagem({ data, deleteItem, editItem }){
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
          <Botao onPress={() => editItem(data) }>
            <Icon name="square-edit-outline" size={25} />
          </Botao>
          <Linha />
          <Botao onPress={() => deleteItem(data.key)} >
            <Icon name="delete-circle-outline" size={25} />
          </Botao>
        </ViewBotao>
      </Divisao>
    </Container>
  )
}