import styled from 'styled-components'
import colors from '../../../configs/themes/cor'
import fonts from '../../../configs/themes/fonte'

export const Container = styled.View`
  width: 100%;
  /* height: 20ch; */
  margin: 10px 0;
  padding: 2px 10px;
  background-color: ${colors.Border};
  border-radius: 10px;
`;

export const Texto = styled.Text`
  font-size: ${fonts.input}px;
`;

