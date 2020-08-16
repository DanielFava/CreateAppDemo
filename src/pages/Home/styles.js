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

export const Base = styled.View`
  flex: 1px;
`;

export const Divisao = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 150px;
`;

export const Botao = styled.TouchableOpacity`
  margin: 30px 0 0 0;
  border: 1px solid ${colors.Border};
  align-items: center;
  justify-content: center;
  width: 40%;
  background-color: ${colors.LightDark};
`;

export const TextoBotao = styled.Text`
  font-size: 16px;
  color: ${colors.Branco};
`;

export const Texto = styled.Text`
  font-size: 14px;
`;


export const Menu = styled.View`
  width: 100%;
  padding: 20px 0 20px 15px;
  background-color: ${colors.Menu};
  
`; 

export const TextoBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const View_Base = styled.View`
  width: 430px;
  height: 1px;
  background-color: ${colors.Black};
  margin-top: 30px; 
  margin-bottom: -40px;
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