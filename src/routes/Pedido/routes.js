import React from 'react';
import colors from '../../configs/themes/cor';
import Icon from 'react-native-vector-icons/AntDesign';

import CadastroPedidos from '../../pages/Pedido/CadastroPedidos/index';
import HomePedidos from '../../pages/Pedido/ListaPedidos/index';
import PendentePedidos from '../../pages/Pedido/PendentePedidos/index';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import {
  Container,
  Botao,
  Texto 
} from '../Pedido/styles'; 

const HomeStack = createStackNavigator();
const CadastroStack = createStackNavigator();

const Cadastro = createStackNavigator();
const PendenteStack = createStackNavigator();

const Tab = createBottomTabNavigator();

//Home
function HomeStackScreen({route}) {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Pedidos" component={HomePedidos} initialParams={route}/>
    </HomeStack.Navigator>
  )
}

function PendenteStackScreen({route}) {
  return(
    <PendenteStack.Navigator>
      <PendenteStack.Screen name="Pendentes" component={PendentePedidos} initialParams={route}/>
    </PendenteStack.Navigator>
  )
}

function CadastroStackScreen({route}) {
  return(
    <CadastroStack.Navigator>
      <CadastroStack.Screen name="Cadastros" component={CadastroPedidos} initialParams={route}/>
    </CadastroStack.Navigator>
  )
}

function Home_Pendente() {
  return(
    <Tab.Navigator
      initialRouteName="Pedidos"
      tabBarOptions={{
        labelPosition: "beside-icon"
      }}
    >
      <Tab.Screen name="Pedidos" component={HomeStackScreen}/>
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
                  navigation.navigate('CadastroPedido') 
                }}
              >
                <Icon name="pluscircleo" size={30} color={colors.Menu} />
              </Botao>
            </Container>
          ),
        }}
      />
      <Cadastro.Screen 
        name="CadastroPedido" 
        component={CadastroStackScreen}
        options={{
          title: 'Cadastro'
        }}
        />
    </Cadastro.Navigator>
  )
}

export default Home_Pendente_Cadastro;