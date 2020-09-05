import React from 'react';

import {
  DrawerItemList
} from '@react-navigation/drawer'

import { 
  Container
} from './styles'

function DrawerContent({...props}) {
  return(
    <Container>
      <DrawerItemList {...props} />
    </Container>
  )
}


export default DrawerContent;