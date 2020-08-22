import React from 'react';

import {
  DrawerItemList
} from '@react-navigation/drawer'

import { 
  Container
} from './Styles'

function DrawerContent({...props}) {
  return(
    <Container>
      <DrawerItemList {...props} />
    </Container>
  )
}


export default DrawerContent;