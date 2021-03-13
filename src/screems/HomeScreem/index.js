import React, {useEffect, useState} from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

import Logo from '../../img/logo.png'





const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [message, setMessage] = useState('Carregando...');
    
    useEffect(() => {
        const getPosition = async () => {
          const { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            //não liberou
            setMessage('Cliente não autorizou o uso da geolocalização');
            return;
        }

        //tem acesso
        const location = await Location.getCurrentPositionAsync();
        setMessage(JSON.stringify(location, null, 4));
        setLocation(location.coords);


        };

        getPosition();
    }, []);

    
    return (
  <View style={styles.container}>
    <Image style={styles.logo} source={Logo}></Image>

    <Text>{message}</Text>
  </View>

      
    );
  }

  export default HomeScreen;