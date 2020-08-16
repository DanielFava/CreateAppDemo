import React from 'react';
import colors from '../../configs/themes/cor';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../../pages/Produto/index';

import {createStackNavigator} from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';
import {
  Container,
  Botao,
  Texto 
} from '../Produto/styles' 

const StackNavigator = createStackNavigator();

function HomeApp({navigation}){
  return(
    <StackNavigator.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.GreenDark,
        },
        headerTintColor: colors.Branco,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <StackNavigator.Screen 
        name="DashBoard" 
        component={Home}
        options={{
          headerLeft: () => (
            <Container>
              <Botao
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer()) 
                }}>
                <Icon name="menuunfold" size={30} color={colors.Menu} />
              </Botao>
            </Container>
          ),
        }}
      />
    </StackNavigator.Navigator>
  )
}

export default HomeApp;