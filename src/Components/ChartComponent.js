import React, {useCallback} from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import styles from './styles';

const Chart = (data) => {
    console.log(data);
    return(
    <LineChart
        xAxisLabel = " dias"
        withDots = {false}
        withShadow = {false}
        withOuterLines = {false}
        data={data.data}
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
    />);
}

export default Chart;

    