import React, {useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import Chart from '../../Components/ChartComponent';
import styles from './styles';
import sir from './model.js'

export default function HomeScreen() {

  const [alpha, setAlpha] = useState(0.00035);
  const [gamma, setGamma] = useState(0.12);
  const [population, setPopulation] = useState(1000);
  const [infectious, setInfectious] = useState(1);
  const [recovered, setRecovered] = useState(0);
  const [time, setTime] = useState(500);
  const [viewAlpha, setViewAlpha] = useState(alpha);
  const [viewGamma, setViewGamma] = useState(gamma);
  const [data, setData] = useState(sir(alpha, gamma));
  
  function varChange(variable, value){
    if (variable == "alpha"){
      setAlpha(value);
      setData(sir(alpha, gamma, infectious, population, recovered, time));
    } else if (variable == "gamma"){
      setGamma(value);
      setData(sir(alpha, gamma, infectious, population, recovered, time));
    } else if (variable == "infectious"){
      setInfectious(value);
    } else if (variable == "population"){
      setPopulation(value);
    } else if (variable == "recovered"){
      setRecovered(value);
    } else if (variable == "time"){
      setTime(value);
    }
  }
  return (
    <View style={styles.main}>
      <Text></Text>
      {useCallback(<Chart data ={data}/>, [data])}
      <View style={styles.sliderbox}>
        <Text>Taxa de infecção: {viewAlpha}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.0003}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.00001}
          value={alpha}
          onValueChange={value=>setViewAlpha(value)}
          onSlidingComplete={value=>varChange("alpha", value)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>Taxa de recuperação: {viewGamma}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.3}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.001}
          value={gamma}
          onValueChange={value=>setViewGamma(value)}
          onSlidingComplete={value=>varChange("gamma", value)}
        />
      </View>
      <View style={styles.inputbox}>
        <View style={styles.inputgroup}>
          <Text>População: </Text>
          <TextInput
            defaultValue={population}
            style={styles.textinput}
            keyboardType={"numeric"}
            placeholder={"População"}
            onChangeText={value=>varChange("population", Number(value))}
          />
        </View>
        <View style={styles.inputgroup}>
          <Text>Infectados: </Text>
          <TextInput
            defaultValue={infectious}
            style={styles.textinput}
            keyboardType={"numeric"}
            placeholder={"Infectados"}
            onChangeText={value=>varChange("infectious", Number(value))}
          />
        </View>
      </View>
      <View style={styles.inputbox}>
        <View style={styles.inputgroup}>
          <Text>Recuperados: </Text>
          <TextInput
            defaultValue={recovered}
            style={styles.textinput}
            keyboardType={"numeric"}
            placeholder={"Recuperados"}
            onChangeText={value=>varChange("recovered", Number(value))}
          />
        </View>
        <View style={styles.inputgroup}>
          <Text>Tempo: </Text>
          <TextInput
            defaultValue={time}
            style={styles.textinput}
            keyboardType={"numeric"}
            placeholder={"Tempo"}
            onChangeText={value=>varChange("time", Number(value))}
          />
        </View>
      </View>
      <Text style={styles.button} onClick={()=>setData(sir(alpha, gamma, infectious, population, recovered, time))} >Gerar Gráfico</Text>
    </View>
  );
}