import React from 'react';
import moment from 'moment';
import { 
  Container,
  Divisao,
  Botao,
  Texto,
  Menu,
  Base,
  TextoBold,
  TextoBotao,
  Input,
  InputObs
} from '../CadastroClientes/styles';

export default function DashBoard() {
  return (
    <Container
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >

      <Input 
        placeholder="NOME..."
      />  
      <Input 
        placeholder="TELEFONE..."
      />  
      <Input 
        placeholder="RUA..."
      />  
      <Input 
        placeholder="BAIRRO..."
      />  
      <Input 
        placeholder="CIDADE..."
      />  
      <Input 
        placeholder="NUMERO..."
      />  
      <Input 
        placeholder="COMPLEMENTO..."
      />  
      <Input 
        placeholder="DESCRIÇÃO DA MONTAGEM..."
      />  
      <Input 
        placeholder="VALOR..."
      />  
      <InputObs 
        placeholder="OBSERVAÇÃO..."
      />  

      <Divisao>
        <Botao>
          <TextoBotao>Salvar</TextoBotao>
        </Botao>
        <Botao>
          <TextoBotao>Salvar e Enviar</TextoBotao>
        </Botao>
      </Divisao>

    </Container>
  )
}
