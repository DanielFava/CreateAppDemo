import React from 'react';
import colors from '../../configs/themes/cor';
import Icon from 'react-native-vector-icons/AntDesign';

import CadastroClientes from '../../pages/Cliente/CadastroClientes/Index';
import HomeClientes from '../../pages/Cliente/ListaClientes/Index';
import PendenteClientes from '../../pages/Cliente/PendenteClientes/Index';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import {
  Container,
  Botao,
  Texto 
} from '../Cliente/Styles'; 

const HomeStack = createStackNavigator();
const CadastroStack = createStackNavigator();

const Cadastro = createStackNavigator();
const PendenteStack = createStackNavigator();

const Tab = createBottomTabNavigator();

//Home
function HomeStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Clientes" component={HomeClientes}/>
    </HomeStack.Navigator>
  )
}

function PendenteStackScreen() {
  return(
    <PendenteStack.Navigator>
      <PendenteStack.Screen name="Pendentes" component={PendenteClientes}/>
    </PendenteStack.Navigator>
  )
}

function CadastroStackScreen() {
  return(
    <CadastroStack.Navigator>
      <CadastroStack.Screen name="Cadastros" component={CadastroClientes}/>
    </CadastroStack.Navigator>
  )
}

function Home_Pendente() {
  return(
    <Tab.Navigator
      initialRouteName="Clientes"
      tabBarOptions={{
        labelPosition: "beside-icon"
      }}
    >
      <Tab.Screen name="Clientes" component={HomeStackScreen}/>
      <Tab.Screen name="Pendentes" component={PendenteStackScreen}/>
    </Tab.Navigator>
  )
}

function Home_Pendente_Cadastro({navigation}) {
  return(
    <Cadastro.Navigator
      initialRouteName="Lista"
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
      <Cadastro.Screen 
        name="Lista" 
        component={Home_Pendente}
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
          headerRight: () => (
            <Container>
              <Botao
                onPress={() => {
                  navigation.navigate('CadastroCliente') 
                }}
              >
                <Icon name="pluscircleo" size={30} color={colors.Menu} />
              </Botao>
            </Container>
          ),
        }}
      />
      <Cadastro.Screen 
        name="CadastroCliente" 
        component={CadastroStackScreen} 
        options={{
          title: 'Cadastro'
        }}/>
    </Cadastro.Navigator>
  )
}

export default Home_Pendente_Cadastro;