import React, {useState, useCallback} from 'react';
import {Text, View, TouchableOpacity, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import Chart from '../../Components/ChartComponent';
import styles from './styles';
import siro from './model.js'

export default function HomeScreen() {

  const [alpha, setAlpha] = useState(0.5);
  const [gamma, setGamma] = useState(0.14);
  const [beta, setBeta] = useState(0.065);
  const [population, setPopulation] = useState(1000);
  const [infectious, setInfectious] = useState(1);
  const [recovered, setRecovered] = useState(0);
  const [dead, setDead] = useState(0);
  const [time, setTime] = useState(500);
  const [viewAlpha, setViewAlpha] = useState(alpha);
  const [viewGamma, setViewGamma] = useState(gamma);
  const [viewBeta, setViewBeta] = useState(beta);
  const [data, setData] = useState(siro(alpha, gamma, beta));
  
  function varChange(variable, value){
    if (variable == "alpha"){
      setAlpha(value);
      setData(siro(alpha, gamma, beta, infectious, population, recovered, dead, time));
    } else if (variable == "gamma"){
      setGamma(value);
      setData(siro(alpha, gamma, beta, infectious, population, recovered, dead, time));
    } else if (variable == "beta"){
      setBeta(value);
      setData(siro(alpha, gamma, beta, infectious, population, recovered, dead, time));
    } else if (variable == "infectious"){
      setInfectious(value);
    } else if (variable == "population"){
      setPopulation(value);
    } else if (variable == "recovered"){
      setRecovered(value);
    } else if (variable == "dead"){
      setDead(value);
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
          maximumValue={0.5}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.01}
          value={alpha}
          onValueChange={value=>setViewAlpha(value)}
          onSlidingComplete={value=>varChange("alpha", value, alpha, gamma, beta)}
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
          onSlidingComplete={value=>varChange("gamma", value, alpha, gamma, beta)}
        />
      </View>
      <View style={styles.sliderbox}>
        <Text>Taxa de óbito: {viewBeta}</Text>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={0.08}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#0f69fa"
          step={0.001}
          value={beta}
          onValueChange={value=>setViewBeta(value)}
          onSlidingComplete={value=>varChange("beta", value, alpha, gamma, beta)}
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
        <View style={styles.inputgroup}>
          <Text>Óbitos: </Text>
          <TextInput
            defaultValue={infectious}
            style={styles.textinput}
            keyboardType={"numeric"}
            placeholder={"Óbitos"}
            onChangeText={value=>varChange("dead", Number(value))}
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
      <Text style={styles.button} onClick={()=>setData(siro(alpha, gamma, beta, infectious, population, recovered, dead, time))} >Gerar Gráfico</Text>
    </View>
  );
}