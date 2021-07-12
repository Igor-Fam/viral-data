import React, {useState} from 'react';
import {Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

import styles from './styles';

export default function HomeScreen() {

  var susceptible = 1000, infectious = 1, recovered = 0;

  const x = [], S = [], I = [], R = [];

  S[0] = susceptible - infectious;
  I[0] = infectious;
  R[0] = recovered;

  const [alpha, setAlpha] = useState(0.00035)
  const [gamma, setGamma] = useState(0.12)
  
  for(let i=0; i<50; i+=5){
    x.push(i);
  }

  for(let i=1; i<50; i++){
    S.push(S[i - 1] - alpha * S[i - 1] * I[i - 1]);
    I.push(I[i - 1] + (alpha * S[i - 1] * I[i - 1] - gamma * I[i - 1]));
    R.push(R[i - 1] + gamma * I[i - 1]);
  }

  return (
    <View style={styles.main}>
      <Text></Text>
      <LineChart
        data={{
          labels: x,
          datasets: [{data: S, color: () => '#0f69fa'}, {data: I, color: () => '#f54242'}, {data: R, color: () => '#44f281'}]
        }}
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
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#0f69fa"
          }
        }}
      />
      <View style={styles.sliderbox}>
        <Text>alpha: {alpha}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={-10}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={1}
          value={alpha}
          onValueChange={value=>setAlpha(value)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>b: {gamma}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={-10}
          maximumValue={10}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={1}
          value={gamma}
          onValueChange={value=>setGamma(value)}
        />
      </View>
    </View>
  );
}