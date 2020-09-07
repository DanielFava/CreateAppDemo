import React from 'react';
import moment from 'moment';

import {
  DrawerItemList
} from '@react-navigation/drawer'

import {
  Container,
  Menu,
  Texto,
  TextoBold,
  Line
} from './styles'

// Criando Data
const Date = moment().format('DD/MM/YYYY');

function DrawerContent({...props}) {
   return(
      <Container>
         <Menu>
            <TextoBold>Usuario: TESTE</TextoBold>
            <Texto>Data: {Date}</Texto>
         </Menu>
         <DrawerItemList {...props} />
      </Container>
   )
}

export default DrawerContent;
