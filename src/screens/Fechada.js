import { StyleSheet, Text, View, Button, Image, Animated, SafeAreaView } from 'react-native'
import React, { Component, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler';



const CargaFechada = ({navigation}) => {
  const logoImg = require('../img/logo.png')

  const bannerImg = require('../img/transporteCargaFechada.jpg');
  
  const handleContactService = () => {
    navigation.navigate('Contato');
  }

  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image
          style={styles.banner}
          source={bannerImg}
        />
        <Text style={styles.firstDescription}>
          Transporte de carga fechada, que abrange volumes de 1 tonelada a 28 toneladas.
        </Text>
  
        <Text style={styles.firstTopic}>
          Motivos para fazer a cotação do Serviço de Transporte de Carga Fechada
        </Text>
        <Text style={styles.firstDescription}>
          O transporte de carga fechada, que abrange volumes de 1 tonelada a 28 toneladas, é essencial para empresas que buscam segurança, proteção contra intempéries e privacidade no envio de mercadorias.
        </Text>

        <Text style={styles.firstTopic}>
          Vantagens do Serviço
        </Text>
        <Text style={styles.firstDescription}>
          Este serviço oferece diversas vantagens, incluindo a proteção contra roubo e danos, além de manter a integridade dos produtos em condições climáticas adversas. Utilizando uma variedade de veículos, desde vans para cargas leves até caminhões pesados para grandes volumes.
        </Text>

        <Text style={styles.firstTopic}>
          Tecnologia e Inovação
        </Text>
        <Text style={styles.firstDescription}>
          Para garantir a eficiência, é crucial o planejamento cuidadoso das rotas, a conformidade com regulamentações, a manutenção regular da frota e a adoção de tecnologias avançadas, como o rastreamento por GPS. Dessa forma, podemos oferecer um serviço confiável e de alta qualidade, destacando-se no mercado.
        </Text>

        <Text style={styles.firstTopic}>
          Privacidade
        </Text>
        <Text style={styles.firstDescription}>
          Para cargas sensíveis ou de alto valor, a privacidade proporcionada por um transporte fechado é essencial. Isso garante que o conteúdo da carga permaneça confidencial durante todo o processo logístico.
        </Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title='Faça sua cotação'
          onPress={handleContactService}
        />
      </View>
    </View>
  )
}

export default CargaFechada

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#03AED2',
    paddingTop: 30,
    paddingBottom: 10,
  },
  banner: {
    width: '100%',
    height: 300,
  },
  scrollView: {
    flex: 1,
  },
  firstTopic: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600'
  },
  firstDescription: {
    padding: 15,
    textAlign: 'center',
    fontSize: 17
  },
  buttonContainer: {
    margin: 10,
    paddingBottom: 10
  },
  magnify: {
    display: 'none',
  }
});