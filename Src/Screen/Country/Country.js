import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Backheader from '../../Component/BackHeader/Backheader';
import CountryPicker from './../../Component/Country/Country';
import Card from './../../Component/Card/Card';
import Graph from './../../Component/Graph/Graph';
import {ScrollView} from 'react-native-gesture-handler';
class Acount extends React.Component {
  constructor() {
    super();
    this.state = {
      country: 'Pakistan',
    };
  }
  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api/countries/Pakistan', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };
  ChangeCounrty = async (country) => {
    await fetch(`https://covid19.mathdro.id/api/countries/${country}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
          country,
        });
        this.setState({});
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    return (
      <View>
        <Backheader navigation={this.props.navigation} value="Country Detail" />
        <ScrollView>
          <CountryPicker ChangeCounrty={this.ChangeCounrty} />
          <View style={styles.card}>
            <Text style={styles.total}>
              Total Detail About {this.state.country}
            </Text>
            <Card
              name="Conformed"
              value={this.state.confirmed}
              color="white"
              background="black"
            />
            <Card
              name="recovered"
              value={this.state.recovered}
              color="white"
              background="green"
            />
            <Card
              name="Total deaths"
              value={this.state.deaths}
              color="white"
              background="#B80E17"
            />
            <Graph
              deaths={this.state.deaths}
              recovered={this.state.recovered}
              confirmed={this.state.confirmed}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    marginBottom: 50,
  },
  total: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B80E17',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Acount;
