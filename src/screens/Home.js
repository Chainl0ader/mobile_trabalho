import { View, Text, Button, TouchableOpacity, StyleSheet, Image, Linking,Dimensions, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel'


const ItemCard = ({title, img, navigation, screen, description}) => (
  <TouchableOpacity onPress={() => navigation.navigate(screen)}>
    <View style={styles.containerView}>
      <Image
        style={styles.img}
        source={img}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);


export default function Home({ navigation }) {
  const logoImg = require('../img/logo.png');

  const openLink = () => {
    return (
      Linking.openURL('https://www.instagram.com/rodoligtransportes/')
    )
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = [
    {
      title: 'Serviço de Transporte de Carga Fechada',
      img: require('../img/transporteCargaFechada.jpg'),
      navigation:navigation,
      screen: 'Carga Fechada',
      description: 'Carga Fechada',
    },
    {
      title: 'Serviço de Transporte Regional',
      img: require('../img/transporteRegional.jpg'),
      navigation:navigation,
      screen: 'Transporte Regional',
      description: 'Regional',
    }
  ];

 const renderItens = ({ item }) => {
  const {title, img, navigation, screen, description} = item;

  return (
    <ItemCard
      title={title}
      img={img}
      navigation={navigation}
      screen={screen}
      description={description}
    />
  )
 }

 return(  
  <View style={styles.transparentView}>
      <StatusBar translucent backgroundColor={"transparent"} barStyle={"dark-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
          <View style= {styles.logoView}>
            <Image
              source={logoImg}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.viewFormat}>
              <Text style={styles.headerText}>
                  RodoLig transportes - Conectando o mundo e entregando sucesso.
              </Text>
              <Text style={styles.usualText}>
                  Somos a Rodolig Transportes, uma empresa comprometida com a excelência em transporte de cargas e logística. Como filiada à renomada NSLog Transportes, estamos orgulhosos de compartilhar nossa visão comum de oferecer soluções logísticas confiáveis e eficientes para atender às necessidades de nossos clientes em todo o país.
              </Text>
              <Text style={styles.usualText}>
                  Na Rodolig Transportes, entendemos a importância de cada carga que nos é confiada. Nossa equipe altamente qualificada e experiente está empenhada em garantir que cada remessa seja entregue com segurança, pontualidade e integridade. Nosso compromisso com a qualidade e a satisfação do cliente é o que impulsiona cada aspecto de nosso trabalho diário.
              </Text>
          </View>

          <View style={styles.viewFormat}>
              <Text style={styles.headerText}>Nossos Serviços</Text>
              <Text style={styles.descriptionCarousel}>Arraste para o lado para ver os próximos serviços.</Text>
          </View>
          <Carousel
              layout="default"
              data={data}
              renderItem={renderItens}
              sliderWidth={400}
              itemWidth={300}
          />
      </ScrollView>

      <View style={styles.viewSaibaMais}>
        <TouchableOpacity onPress={openLink} style={styles.saibaMaisStyle}>
          <Text style={{
            color:'black',
            fontWeight: 'bold',
            textAlign:'center',
            fontSize: 18
          }}>
            Saiba mais
          </Text>
        </TouchableOpacity>
      </View>
  </View>
)
}


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
  }
})

