import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function HomeScreen() {

  function navigateToSIR(){
    return navigation.navigate('SIR');
  }

  return (

    <View style={styles.main}>
      <Text style={styles.title} >Modelos Virais</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToSIR}>
        <Text style={styles.buttonText} >SIR</Text>
      </TouchableOpacity>
    </View>
  );
}