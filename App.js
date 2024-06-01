import { View, Text,Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel'
import Home from './src/screens/Home'
import ServCargaFechada from './src/screens/Fechada'
import ServRegional from './src/screens/ServRegional'
import CargaFechada from './src/screens/Fechada'
import Contato from './src/screens/Contato'



const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} options={() => ({
          headerTitle: " ",
          headerStyle: {
            backgroundColor: '#03AED2'
          },
          drawerIcon: () => (
            <Image
              source={require('./src/img/home.png')}
              style={{width: 25, height: 25}}
            ></Image>
          )
        })}/>
        <Drawer.Screen name='Carga Fechada' component={CargaFechada} options={() => ({
          headerTitle: " ",
          headerStyle: {
            backgroundColor: '#03AED2'
          },
          drawerIcon: () => (
            <Image
              source={require('./src/img/delivery-truck.png')}
              style={{width: 30, height: 30}}
            ></Image>
          )
        })}/>
        <Drawer.Screen name='Transporte Regional' component={ServRegional} options={() => ({
          headerTitle: " ",
          headerStyle: {
            backgroundColor: '#03AED2'
          },
          drawerIcon: () => (
            <Image
              source={require('./src/img/delivery-truck.png')}
              style={{width: 30, height: 30}}
            ></Image>
          )
        })} />
        <Drawer.Screen name='Contato' component={Contato} options={() => ({
          headerTitle: " ",
          headerStyle: {
            backgroundColor: '#03AED2'
          },
          drawerIcon: () => (
            <Image
              source={require('./src/img/contact.png')}
              style={{width: 30, height: 30}}
            ></Image>
          )
        })}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App