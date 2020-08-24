import styled from 'styled-components'
import colors from '../../../configs/themes/cor'
import { Input, Button } from 'react-native-elements'
 
export const Container = styled.View`
  background-color: ${colors.Light};
  flex: 1;
`;

export const View = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  background-color: ${colors.Light};
  width: 100%;
  height: 100%;
  margin: 15px 0 0 0;
`;

export const Divisao = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  position: relative;
  bottom: 1px;
  background-color: ${colors.Light};
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

export const InputRNE = styled(Input).attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
})``;

export const InputRNEObs = styled(Input).attrs({
  autoCapitalize: 'none',
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
  multiline: true,
})``;

export const BotaoSalvar = styled(Button).attrs({
  type: "outline",
  title: "Salvar",
  raised: true,
  buttonStyle: { 
    height: 50,
    width: 100, 
    backgroundColor: colors.EerieBlack, 
    borderRadius: 10,
  },
  titleStyle: {
    color: colors.Branco
  },
  containerStyle: { 
    marginVertical: 5, 
    height: 50, 
    width: 100, 
  },
})``;

export const BotaoEnviar = styled(Button).attrs({
  type: "outline",
  title: "Salvar e Enviar",
  raised: true,
  buttonStyle: { 
    height: 50,
    width: 100, 
    backgroundColor: colors.TrueBlue, 
    borderRadius: 10,
  },
  titleStyle: {
    color: colors.Branco
  },
  containerStyle: { 
    marginVertical: 5, 
    height: 50, 
    width: 100, 
  },
})``;