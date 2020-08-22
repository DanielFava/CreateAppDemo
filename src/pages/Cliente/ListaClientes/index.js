import React, { useEffect, useState } from 'react';
import moment from 'moment';
import firebase from '../../../services/server/FirebaseConnection'
import Listagem from './Listagem'

import { 
  Container,
  Divisao,
  Botao,
  Texto,
  Menu,
  Base,
  TextoBold,
  TextoBotao,
  Flatlist
} from '../ListaClientes/Styles';

export default function DashBoard() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function dados(){
      await firebase.database().ref('clientes').on("value", (snapshot) => {
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

          setClientes([...clientes, data])
        })
      })
    }
  }, []);

  return (
    <Container>
      <Base>
        <Flatlist 
          keyExtractor={item => item.key.toString()}
          data={clientes}
          renderItem={ ({item}) => ( <Listagem data={item}/> ) }     
        />
      </Base>
    </Container>
  )
}
