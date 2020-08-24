import styled from 'styled-components'
import colors from '../../../configs/themes/cor'
import fonts from '../../../configs/themes/fonte'

import { Divider } from 'react-native-elements'

// 

export const Container = styled.View`
  width: 100%;
  background-color: ${colors.Border};
  border-radius: 10px;
  margin: 10px 0;
`;

export const ViewContainer = styled.View`
  background-color: ${colors.Border};
  width: 80%;
  margin: 10px 0;
  padding: 0 15px;
`;

export const ViewBotao = styled.View`
  /* background-color: ${colors.Vermelho}; */
  width: 20%;
  justify-content: space-evenly;
`;

export const Divisao = styled.View`
  flex-direction: row;
`;

export const Texto = styled.Text`
  font-size: ${fonts.input}px;
`;

export const TextoListagem = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.USAFABlue};
`;

export const BotaoContainer = styled.TouchableOpacity`
`;

export const Botao = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${colors.Border};
`;

export const Linha = styled.View`
  width: 50%;
  align-self: center;
  height: 1px;
  background-color: ${colors.Black};
`;