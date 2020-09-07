import styled from 'styled-components'
import colors from '../../configs/themes/cor'

import {
  BarChart,
  XAxis,
  Grid,
  StackedBarChart
} from 'react-native-svg-charts'

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${colors.Light};
`;

export const Divisao = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

// export const Botao = styled.TouchableOpacity`
//    background-color: ${props => props.cor};
//    /* background-color: #fff */
// `;

export const Caixa = styled.View.attrs( props => ({
   backgroundColor: props.cor,
}))`
   margin-top: 20px;
   width: 25%;
   height: 50px;
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;

export const Texto = styled.Text`
   font-size: 15px;
`;

// react-native-svg-charts INICIO
export const View_Base = styled.View`
  width: 430px;
  height: 1px;
  background-color: ${colors.Black};
  margin-top: 20px;
  margin-bottom: -15px;
`;

export const View_BarChart = styled.View`
  height: 200px;
`;

export const View_Linha = styled.View`
  width: 430px;
  height: 1px;
  background-color: ${colors.Black};
  margin-top: -30px;
`;

export const BarChart_SVG = styled(BarChart).attrs({
  svg: { fill: '#0466C8' },
  contentInset: { top: 40, bottom: 15 },
  spacing: 1,
  gridMin: 0
})`
  flex: 1;
`;

export const XAxis_SVG = styled(XAxis).attrs({
  contentInset: { left: 20, right: 20 },
  svg: { fontSize: 10, fill: 'black' }
})``;
// react-native-svg-charts FIM
