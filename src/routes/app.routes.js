import React from 'react';
import colors from '../configs/themes/cor';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeApp from './Home/routes'
import ClienteApp from './Cliente/routes'
import PedidoApp from './Pedido/routes'
import ProdutoApp from './Produto/routes'

import DrawerContent from '../pages/DrawerContent/index'

const Drawer = createDrawerNavigator();

function Principal({navigation}) {
   return (
      <Drawer.Navigator
         initialRouteName="DashBoard"
         drawerContent={DrawerContent}
         screenOptions={{
            swipeEnabled: false,
         }}
      >
         <Drawer.Screen name="DashBoard" component={HomeApp} />
         <Drawer.Screen name="Pedido" component={PedidoApp} />
         <Drawer.Screen name="Clientes" component={ClienteApp} />
         <Drawer.Screen name="Produtos" component={ProdutoApp} />
      </Drawer.Navigator>
   );
}

export default Principal;
