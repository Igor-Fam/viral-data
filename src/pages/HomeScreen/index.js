import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import {LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit';
import Slider from '@react-native-community/slider';

export default function HomeScreen() {

  const x = [];

  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [c, setC] = useState(0)
  
  for(let i=-10; i<11; i++){
    x.push(i);
  }

  const y = x.map(val => a*Math.pow(val, 2) + b*val +c);

  return (
    <View>
      <Text></Text>
      <LineChart
        data={{
          labels: x,
          datasets: [
            {
              data: y
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: "#c9c9c9",
          backgroundGradientTo: "#999999",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(54, 107, 61, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 50
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#175426"
          }
        }}
      />
      <Text style={{marginTop: 50,}} >a: {a}</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={-10}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        value={a}
        onValueChange={value=>setA(value)}
      />
      <Text style={{marginTop: 50,}} >b: {b}</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={-10}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        value={b}
        onValueChange={value=>setB(value)}
      />
      <Text style={{marginTop: 50,}} >c: {c}</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={-10}
        maximumValue={10}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        step={1}
        value={c}
        onValueChange={value=>setC(value)}
      />
    </View>
  );
}