import React, { useEffect, useState } from 'react'
// import React, { Component,useEffect, useState } from 'react'
import moment from 'moment'
import firebase from '../../../services/server/firebaseConnection'
import { Alert } from 'react-native'

import { 
  Container,
  View,
  Divisao,
  InputRNE,
  InputRNEObs,
  BotaoEnviar,
  BotaoSalvar,
  Texto,
  TextoBold,
  TextoBotao
} from '../CadastroClientes/styles'


export default function DashBoard({ navigation, route }) {

  const [nome, setNome] = useState(!route.params.params ? '' : route.params.params.params.nome)
  const [telefone, setTelefone] = useState(!route.params.params ? '' : route.params.params.params.telefone)
  const [rua, setRua] = useState(!route.params.params ? '' : route.params.params.params.rua)
  const [bairro, setBairro] = useState(!route.params.params ? '' : route.params.params.params.bairro)
  const [cidade, setCidade] = useState(!route.params.params ? '' : route.params.params.params.cidade)
  const [numero, setNumero] = useState(!route.params.params ? '' : route.params.params.params.numero)
  const [complemento, setComplemento] = useState(!route.params.params ? '' : route.params.params.params.complemento)
  const [observacao, setObservacao] = useState(!route.params.params ? '' : route.params.params.params.observacao)
  const [error, setError] = useState('')

  async function cadastrar(){
    if (nome !== ''){

      if ( route.params.params !== undefined ) {
        await firebase.database().ref('clientes').child(route.params.params.params.key).update({
          nome: nome,
          telefone: telefone,
          rua: rua,
          bairro: bairro,
          cidade: cidade,
          numero: numero,
          complemento: complemento,
          observacao: observacao
        })
        setNome('')
        setTelefone('')
        setRua('')
        setBairro('')
        setCidade('')
        setNumero('')
        setComplemento('')
        setObservacao('')
        setError('')

        Alert.alert(
          "Sucesso",
          "Dados alterados com sucesso !",
          [
            { 
              text: "OK", 
              onPress: () => navigation.goBack()
            }
          ],
          { cancelable: false }
        );

        return;

      }

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

      setNome('')
      setTelefone('')
      setRua('')
      setBairro('')
      setCidade('')
      setNumero('')
      setComplemento('')
      setObservacao('')
      setError('')

      Alert.alert(
        "Sucesso",
        "Dados cadastrados com sucesso !",
        [
          { 
            text: "OK", 
            onPress: () => navigation.goBack()
          }
        ],
        { cancelable: false }
      );
      
    }
    else {
      setError( 'Nome Invalido' );
    }
  }

  return (
    <Container
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View>
        
        <InputRNE
          placeholder="NOME..."
          onChangeText={(texto) => setNome(texto)}
          value={ nome } 
          errorMessage={error} 
        />

        <InputRNE
          placeholder="TELEFONE..."
          onChangeText={(texto) => setTelefone(texto)}
          keyboardType="numeric"
          value={telefone}
        />  
        <InputRNE
          placeholder="RUA..."
          onChangeText={(texto) => setRua(texto)}
          value={rua}
        />  
        <InputRNE
          placeholder="BAIRRO..."
          onChangeText={(texto) => setBairro(texto)}
          value={bairro}
        />  
        <InputRNE
          placeholder="CIDADE..."
          onChangeText={(texto) => setCidade(texto)}
          value={cidade}
        />  
        <InputRNE
          placeholder="NUMERO..."
          onChangeText={(texto) => setNumero(texto)}
          value={numero}
        />  
        <InputRNE
          placeholder="COMPLEMENTO..."
          onChangeText={(texto) => setComplemento(texto)}
          value={complemento}
        />  
        <InputRNEObs
          placeholder="OBSERVAÇÃO..."
          onChangeText={(texto) => setObservacao(texto)}
          value={observacao}
        />  
      </View>
      <Divisao>
        <BotaoEnviar onPress={ cadastrar}/>
        <BotaoSalvar onPress={ ()=>{} }/>
      </Divisao>

    </Container>
  )
}
