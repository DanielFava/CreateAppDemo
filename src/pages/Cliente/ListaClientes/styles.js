import styled from 'styled-components';
import colors from '../../../configs/themes/cor'

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${colors.Light};
  justify-content: center;
  align-items: center;
`;

export const Flatlist = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  width: 90%;
  height: 90%;
  margin: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.Black,
  size: 50,
})``;
