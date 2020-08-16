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
  TextoBotao
} from './styles';

import { 
  Text 
} from 'react-native-svg'

import { 
  BarChart, 
  XAxis, 
  Grid,
  StackedBarChart 
} from 'react-native-svg-charts'

import { 
  View 
} from 'react-native'

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
        <View style={{ 
          width: 430, 
          height: 1, 
          backgroundColor: 'black', 
          marginTop: 30, 
          marginBottom: -40 }} 
        />
        <View style={{ height: 200}}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: '#0466C8' }}
            contentInset={{ top: 40, bottom: 15 }}
            spacing={1}
            gridMin={0}
          >
            <Labels/>
          </BarChart>
          <XAxis
            data={data}
            formatLabel={(value, index) => index + 1}
            contentInset={{ left: 20, right: 20 }}
            svg={{ fontSize: 10, fill: 'black' }}
          />
        </View>
        <View style={{ 
          width: 430, 
          height: 1, 
          backgroundColor: 'black', 
          marginTop: -30 }} 
        />
      </Base>
    </Container>
  )
}
