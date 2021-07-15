import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export default function HomeScreen({navigation}) {

  function navigateToSIR(){
    return navigation.navigate('SIR');
  }
  function navigateToSIRO(){
    return navigation.navigate('SIRO');
  }

  return (

    <View style={styles.main}>
      <Text style={styles.title}>Modelos Virais</Text>
      <Text style={styles.button} onPress={navigateToSIR}> SIR </Text>
      <Text style={styles.button} onPress={navigateToSIRO}> SIRO </Text>
    </View>
  );
}