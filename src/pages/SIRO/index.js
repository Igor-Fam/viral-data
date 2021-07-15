import React, {useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

import styles from './styles';
import siro from './model.js'

export default function HomeScreen() {

  const x = [];

  const [alpha, setAlpha] = useState(0.5);
  const [gamma, setGamma] = useState(0.14);
  const [beta, setBeta] = useState(0.065);
  const [data, setData] = useState(siro(alpha, gamma, beta));
  
  function varChange(variable, value, alpha, gamma, beta){
    if (variable == "alpha"){
      setAlpha(value);
      setData(siro(value, gamma, beta));
    } else if (variable == "gamma"){
      setGamma(value);
      setData(siro(alpha, value, beta));
    } else if (variable == "beta"){
      setBeta(value);
      setData(siro(alpha, gamma, value));
    }
    console.log(data);
  }

  return (
    <View style={styles.main}>
      <Text></Text>
      <LineChart
        withDots = {false}
        withShadow = {false}
        withInnerLines = {false}
        withOuterLines = {false}
        data={data}
        width={Dimensions.get("window").width*0.95} // from react-native
        height={220}
        yAxisInterval={5} // optional, defaults to 1
        style={styles.chart}
        chartConfig={{
          backgroundGradientFrom: "#ededed",
          backgroundGradientTo: "#d6d6d6",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(15, 105, 250, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
        }}
      />

      <View style={styles.sliderbox}>
        <Text>Taxa de infecção: {alpha}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.01}
          value={alpha}
          onSlidingComplete={value=>varChange("alpha", value, alpha, gamma, beta)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>Taxa de recuperação: {gamma}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.001}
          value={gamma}
          onSlidingComplete={value=>varChange("gamma", value, alpha, gamma, beta)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>Taxa de óbito: {beta}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.08}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.001}
          value={beta}
          onSlidingComplete={value=>varChange("beta", value, alpha, gamma, beta)}
        />
      </View>
    </View>
  );
}