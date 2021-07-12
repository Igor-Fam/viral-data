import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function HomeScreen() {

  const [a, setA] = useState(0)
  const navigation = useNavigation();

  function navigateToSIR(){
    return navigation.navigate('SIR');
  }

  return (

    <View style={styles.main}>
      <Text>{a}</Text>
      <TouchableOpacity title="SIR" style={styles.button} onPress={navigateToSIR}>
        <Text>SIR</Text>
      </TouchableOpacity>
    </View>
  );
}