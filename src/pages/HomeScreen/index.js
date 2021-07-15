import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export default function HomeScreen({navigation}) {

  function navigateToSIR(){
    return navigation.navigate('SIR');
  }

  return (

    <View style={styles.main}>
      <Text style={styles.title} onPress={navigateToSIR}>Modelos Virais</Text>
      <Button style={styles.button}  title={"Sir"} >
        
      </Button>
    </View>
  );
}