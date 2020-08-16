import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from '@react-navigation/drawer'

function DrawerContent({...props}) {
  return(
    <DrawerContentScrollView>
      <Text> Ola </Text>
      <Text> Bem Vindo ! </Text>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default DrawerContent;