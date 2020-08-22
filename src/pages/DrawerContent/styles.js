import styled from 'styled-components';
import colors from '../../configs/themes/cor'
import { DrawerContentScrollView } from '@react-navigation/drawer'

export const Container = styled(DrawerContentScrollView)`
  background-color: ${colors.Light};
`;