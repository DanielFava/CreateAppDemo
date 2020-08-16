import styled from 'styled-components';
import colors from '../../../configs/themes/cor'

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${colors.Light};
`;

export const Divisao = styled.View`
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
`;

export const Botao = styled.TouchableOpacity`
  margin: 20px 0 20px 0;
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

export const TextoBold = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
  returnKeyType: 'next'
})`
  border: 1px solid ${colors.Black};
  padding-left: 10px;
  font-size: 16px;
`;

export const InputObs = styled.TextInput.attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
  multiline: true
})`
  border: 1px solid ${colors.Black};
  padding-left: 10px;
  font-size: 16px;
`;