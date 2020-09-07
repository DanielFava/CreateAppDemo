import React, { useEffect, useState } from 'react';
import moment from 'moment';
import firebase from '../../services/server/firebaseConnection'
import colors from '../../configs/themes/cor'

import { Text } from 'react-native-svg'

import {
   Container,
   Divisao,
   Caixa,
   Texto,
   Botao,

   View_BarChart,
   View_Base,
   View_Linha,
   BarChart_SVG,
   XAxis_SVG
} from './styles';

// Criando Data
const Date = moment().format('DD/MM/YYYY');

// Criando Graficos
const data = [ 0,0,0,0,0,0,0,0,0,0,0,0 ]

// Linha do Grafico
const Labels = ({ x, y, bandwidth, data }) => (
   data.map((value, index) => (
      <Text
         key={ index }
         x={ x(index) + (bandwidth / 2) }
         y={ y(value) - 10 }
         fontSize={ 14 }
         fill={ colors.Black }
         alignmentBaseline={ 'middle' }
         textAnchor={ 'middle' }
      >
         {value}
      </Text>
   ))
)

// Aplicação Home
export default function DashBoard({ navigation }) {

   const [ cliente, setCliente ] = useState(0);
   const [ pedido, setPedido ] = useState(0);
   const [ produto, setProduto ] = useState(0);

   return (
   <Container>
         <Divisao>
            <Caixa cor={ colors.Border } >
               <Texto>{pedido}</Texto>
               <Texto>Pedidos</Texto>
            </Caixa>
            <Caixa cor={ colors.LightDark } >
               <Texto>{cliente}</Texto>
               <Texto>Clientes</Texto>
            </Caixa>
            <Caixa cor={ colors.Manatee } >
               <Texto>{produto}</Texto>
               <Texto>Produtos</Texto>
            </Caixa>
         </Divisao>

         <View_Base />
         <View_BarChart>
            <BarChart_SVG
               data={data}
            >
               <Labels/>
            </BarChart_SVG>
            <XAxis_SVG
               data={data}
               formatLabel={ (value, index) => index + 1 }
            />
         </View_BarChart>
         <View_Linha />
   </Container>
   )
}
