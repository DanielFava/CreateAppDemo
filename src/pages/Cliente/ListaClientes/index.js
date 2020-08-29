import React, { useEffect, useState } from 'react';
import moment from 'moment';
import firebase from '../../../services/server/FirebaseConnection'
import Listagem from './Listagem'
import { Alert } from 'react-native'

import { 
  Container,
  Divisao,
  Botao,
  Texto,
  Menu,
  Base,
  TextoBold,
  TextoBotao,
  Flatlist,
  Loading,
} from '../ListaClientes/Styles';

export default function DashBoard({navigation}) {

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function dados(){
      await firebase.database().ref('clientes').on('value', (snapshot) => {
        setClientes([]);
        
        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            nome: chilItem.val().nome,
            telefone: chilItem.val().telefone,
            rua: chilItem.val().rua,
            bairro: chilItem.val().bairro,
            cidade: chilItem.val().cidade,
            numero: chilItem.val().numero,
            complemento: chilItem.val().complemento,
            observacao: chilItem.val().observacao
          }
          setClientes(oldArray => [...oldArray, data].reverse());
        })
        setLoading(false)
      })
    }
    dados();
  }, []);

  async function handleDelete(key){
    await Alert.alert(
      "Alerta",
      "Deseja Realmente Excluir",
      [
        {
          text: "Cancelar"
        },
        { 
          text: "OK", 
          onPress: () => firebase.database().ref('clientes').child(key).remove()
        }
      ],
      { cancelable: false }
    );
  }

  function handleEdit(data){
    navigation.navigate('CadastroCliente', { params: data})
  }

  return (
    <Container>
      { loading ? 
        ( 
          <Loading /> 
        ) : 
        (
          <Flatlist 
            keyExtractor={item => item.key.toString()}
            data={clientes}
            renderItem={ ({item}) => ( <Listagem data={item} deleteItem={handleDelete} editItem={handleEdit}/> ) }
          />
        ) 
      }
      
    </Container>
  )
}

