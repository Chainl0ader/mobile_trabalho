import { StyleSheet, Text, View, ScrollView, Button, Image } from 'react-native'
import React from 'react'

const ServRegional = ({navigation}) => {
  const bannerImg = require('../img/transporteRegional.jpg');
  
  const handleContactService = () => {
    navigation.navigate('Contato');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.banner}>
          <Image
            source={bannerImg}
            style={styles.banner}
          />
        </View>

        <Text style={styles.firstDescription}>
        Atendemos a região do estado de São Paulo, Uberaba, Uberlândia, Goiânia e Brasília.
        </Text>

        <Text style={styles.firstTopic}>
          Nossa cobertura regional
        </Text>
        <Text style={styles.firstDescription}>
          Nossa empresa de transportes oferece soluções logísticas regionais conectando São Paulo, Uberaba, Uberlândia, Goiânia e Brasília. Com uma frota moderna e diversificada, garantimos segurança, eficiência e pontualidade em cada entrega.
        </Text>

        <Text style={styles.firstTopic}>
          Tipo de transportes
        </Text>
        <Text style={styles.firstDescription}>
          Atendemos a diversas necessidades de transporte, desde cargas leves até grandes volumes, utilizando tecnologias de rastreamento em tempo real e sistemas de monitoramento para assegurar a integridade das cargas.
        </Text>

        <Text style={styles.firstTopic}>
          Sistema de confiabilidade
        </Text>
        <Text style= {styles.firstDescription}>
          Seja qual for a sua necessidade de transporte, estamos prontos para ser o seu parceiro confiável, oferecendo um serviço que vai além do transporte – entregando confiança, qualidade e compromisso em cada carga.
        </Text>

      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Faça sua cotação"
          onPress={handleContactService}
        />
      </View>
    </View>
  )
}

export default ServRegional


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
