import styled from 'styled-components';
import colors from '../../configs/themes/cor'
import { DrawerContentScrollView } from '@react-navigation/drawer'

export const Container = styled(DrawerContentScrollView)`
   background-color: ${colors.Light};
`;

export const Texto = styled.Text`
   font-size: 14px;
`;

export const Menu = styled.View`
   width: 100%;
   padding: 20px 0 20px 15px;
   background-color: ${colors.Menu};
   margin-bottom: 10px;
   margin-top: -2.5%;
`;

export const TextoBold = styled.Text`
   font-weight: bold;
   font-size: 16px;
   margin-bottom: 10px;
`;

// export const Line = styled.View`
//    width: 80%;
//    height: 1px;
//    align-self: center;
//    margin-bottom: 10px;
//    background-color: ${colors.BlackCoral}
// `;
