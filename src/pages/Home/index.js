import React from 'react';
import moment from 'moment';
import firebase from '../../services/server/FirebaseConnection'

import { Text } from 'react-native-svg'

import { 
  Container,
  Divisao,
  Botao,
  Texto,
  Menu,
  Base,
  TextoBold,
  TextoBotao,
  View_BarChart,
  View_Base,
  View_Linha,

  BarChart_SVG,
  XAxis_SVG
} from './Styles';

// Criando Data
const Date = moment().format('DD/MM/YYYY');

// Criando Graficos
const data = [ 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 9, 0 ]

// Linha do Grafico
const Labels = ({ x, y, bandwidth, data }) => (
  data.map((value, index) => (
    <Text
      key={ index }
      x={ x(index) + (bandwidth / 2) }
      y={ y(value) - 10 }
      fontSize={ 14 }
      fill={ 'black' }
      alignmentBaseline={ 'middle' }
      textAnchor={ 'middle' }
    >
      {value}
    </Text>
  ))
)

export default function DashBoard() {
  return (
    <Container>
      <Menu>
        <TextoBold>Usuario: TESTE</TextoBold>
        <Texto>Data: {Date}</Texto>
      </Menu>
      <Base>
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
      </Base>
    </Container>
  )
}
