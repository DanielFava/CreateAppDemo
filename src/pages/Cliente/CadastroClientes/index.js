import React, { useEffect, useState } from 'react'
import moment from 'moment'
import firebase from '../../../services/server/FirebaseConnection'

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
} from '../CadastroClientes/Styles'

export default function DashBoard() {

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [observacao, setObservacao] = useState('')

  async function cadastrar({ navigation }){
    if (nome !== ''){
      let clientes = await firebase.database().ref('clientes');
      let chave = clientes.push().key;

      clientes.child(chave).set({
        nome: nome,
        telefone: telefone,
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        numero: numero,
        complemento: complemento,
        observacao: observacao
      });

      setNome('');
      setTelefone('');
      setRua('');
      setBairro('');
      setCidade('');
      setNumero('');
      setComplemento('');
      setObservacao('');

      alert('Cadastrado Com Sucesso !');
      
      // navigation.navigate('Lista');
    }
    else {
      alert('Nome é obrigatorio!');
    }
  }

  return (
    <Container
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >

      <Input 
        placeholder="NOME..."
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />  
      <Input 
        placeholder="TELEFONE..."
        onChangeText={(texto) => setTelefone(texto)}
        keyboardType="numeric"
        value={telefone}
      />  
      <Input 
        placeholder="RUA..."
        onChangeText={(texto) => setRua(texto)}
        value={rua}
      />  
      <Input 
        placeholder="BAIRRO..."
        onChangeText={(texto) => setBairro(texto)}
        value={bairro}
      />  
      <Input 
        placeholder="CIDADE..."
        onChangeText={(texto) => setCidade(texto)}
        value={cidade}
      />  
      <Input 
        placeholder="NUMERO..."
        onChangeText={(texto) => setNumero(texto)}
        value={numero}
      />  
      <Input 
        placeholder="COMPLEMENTO..."
        onChangeText={(texto) => setComplemento(texto)}
        value={complemento}
      />  
      <InputObs 
        placeholder="OBSERVAÇÃO..."
        onChangeText={(texto) => setObservacao(texto)}
        value={observacao}
      />  

      <Divisao>
        <Botao>
          <TextoBotao>Salvar</TextoBotao>
        </Botao>
        <Botao onPress={cadastrar}>
          <TextoBotao>Salvar e Enviar</TextoBotao>
        </Botao>
      </Divisao>

    </Container>
  )
}
