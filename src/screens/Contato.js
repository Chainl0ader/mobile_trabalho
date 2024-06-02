import { StyleSheet, Text, View, Image, TouchableOpacity,
  Linking, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import NavigationContainer from '@react-navigation/native'
import Home from './Home'
import { TextInput } from 'react-native-gesture-handler'

const Stack = createStackNavigator();

function phoneFormat(phone) {
  return phone.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 - $3');
}

function dateFormat(date) {
  return date.replace(/\D/g, '').replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
}

function validateEmail(email) {
  const domains = [
    'gmail', 'hotmail', 'yahoo', 'outlook', 'protonmail'
  ];
  const normalForm = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return normalForm.test(email);
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='homePath'>
        <Stack.Screen name='homePath' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Contato = () => {
  const nav = useNavigation();
  const [firstName, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [celphone, setCelphone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [service, setService] = useState('');

  const handleClickBack = () => {
    nav.goBack();
  }

  const handleServicePress = () => {
    if(!validateEmail(email)) {
      setEmailError('O e-mail digitado não é válido. Por favor, digite um e-mail válido.');
      return;
    }


    Alert.alert(
      'Confirmação',
      `Olá ${firstName}! Você está sendo redirecionado para o WhatsApp para mais informações sobre a realização da cotação. \n\nDeseja Continuar?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Continuar', onPress: openWhatsApp },
      ],
      { cancelable: false }
    )
  }

  const openWhatsApp = () => {
    const message = `Olá! Meu nome é ${firstName}, gostaria de fazer uma cotação.`;

    Linking.openURL(`https://api.whatsapp.com/send?phone=+5561982172763&text=${message}`);
  }

  const logoImg = require('../img/logo.png');

  return (
    <View style={{flex: 1}}>
      <View style= {styles.logoView}>
        <Image
            source={logoImg}
            style={styles.logoImg}
        />
      </View>
    
      <ScrollView style = {{flex: 1, padding: 16}}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: Matheus'
          onChangeText={setName}
          value={firstName}
        />

        <Text>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: Mendes'
          onChangeText={setSecondName}
          value={secondName}
        />

        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: kaiaodorock666@gmail.com'
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          value={email}
        />
        
        {emailError ?
          <Text style={{color:'red'}}>{emailError}</Text>: null
        }

        <Text>Celular:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: (XX) XXXXX - XXXX'
          onChangeText={(text) => {
            const formattedPhoneNumber = phoneFormat(text);
            setCelphone(formattedPhoneNumber);
          }}
          value={celphone}
        />

        <Text>Data de Nascimento:</Text>
        <TextInput
          style={styles.input}
          placeholder='Ex: 10/05/2000'
          onChangeText={(text) => {
            const formattedDate = dateFormat(text);
            setBirthDate(formattedDate);
          }}
          value={birthDate}
        />
      </ScrollView>

      <View style={styles.scrollbtn}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleServicePress}
        >
          <Text style={styles.servicePress}>Faça a sua cotação</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Contato;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    marginBottom: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "light",
    textAlign:'center'
  },
  containerView: {
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems:'center',
    resizeMode: 'cover'
  },
  viewFormat: {
      padding: 30,
      alignItems:'center'
  },
  transparentView: {
      flex: 1,
      backgroundColor: 'transparent'
  },
  headerText: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  usualText: {
      fontSize:18,
      textAlign: 'center',
      marginTop: 20
  },
  descriptionCarousel: {
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
      fontSize: 12,
      fontWeight: '600'
  },
  viewSaibaMais: {
      position: 'flex',
      bottom: 1,
      alignItems: 'center',
      paddingTop:10
  },
  logoImg: {
    width: 280,
    height:50,
    justifyContent: 'center',
    resizeMode: "contain",
  },
  logoView: {
    paddingTop: 10,
    paddingBottom: 0,
    alignItems: 'center',
  },
  saibaMaisStyle: {
    backgroundColor: '#03AED2',
    padding: 15,
    borderRadius:30,
    width:250,
    marginBottom: 20,
    shadowColor: 'rgba(0,0,0,5)',
    shadowOffset: {width:0, height: 4},
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 5
  },
  input: {
    alignSelf: 'stretch',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#03AED2',
    paddingVertical: 10,
    paddingHorizontal: 1,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 5)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 5,
  },
  scrollbtn: {
    position: 'flex',
    bottom: 1,
    paddingTop: 10,
    margin: 20,
  },
  servicePress: {
    color:'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 18
  }
})
