import React, {useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

import styles from './styles';
import sir from './model.js'

export default function HomeScreen() {

  const x = [];

  const [alpha, setAlpha] = useState(0.00035);
  const [gamma, setGamma] = useState(0.12);
  const [data, setData] = useState(sir(alpha, gamma));
  
  function varChange(variable, value, alpha, gamma){
    if (variable == "alpha"){
      setAlpha(value);
      setData(sir(value, gamma));
    } else if (variable == "gamma"){
      setGamma(value);
      setData(sir(alpha, value));
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
        <Text>alpha: {alpha}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.0003}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.00001}
          value={alpha}
          onSlidingComplete={value=>varChange("alpha", value, alpha, gamma)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>gamma: {gamma}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.001}
          value={gamma}
          onSlidingComplete={value=>varChange("gamma", value, alpha, gamma)}
        />
      </View>


    </View>
  );
}