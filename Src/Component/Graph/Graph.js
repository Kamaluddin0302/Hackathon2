import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

export default class test extends Component {
  render() {
    return (
      <View style={{alignSelf: 'center', marginRight: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Data In Graph
        </Text>
        <PieChart
          data={[
            {
              name: 'Deaths',
              population: this.props.deaths ? this.props.deaths : 0,
              color: 'red',
              legendFontColor: 'red',
              legendFontSize: 15,
            },
            {
              name: 'Recover',
              population: this.props.recovered ? this.props.recovered : 0,
              color: 'green',
              legendFontColor: 'green',
              legendFontSize: 15,
            },
            {
              name: 'confirmed',
              population: this.props.confirmed ? this.props.confirmed : 0,
              color: 'black',
              legendFontColor: 'black',
              legendFontSize: 15,
            },
          ]}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    );
  }
}
