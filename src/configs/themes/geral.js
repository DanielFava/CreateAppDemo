import styled from 'styled-components';
import colors from './cor';
import fonts from './fonte';
import metricas from './metrica';

export const Container = styled.View`
   height: ${metricas.screenHeight}px;
   width: ${metricas.screenWidth}px;
`;

export const Texto = styled.Text`
   font-size: ${fonts.medium}px;
   color: ${colors.text};
`;

export const Input = styled.TextInput`
   font-size: ${fonts.input}px;
   color: ${colors.text};
`;
