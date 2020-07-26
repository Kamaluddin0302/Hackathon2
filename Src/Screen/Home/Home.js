import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Header from './../../Component/Header/Header';

import Card from './../../Component/Card/Card';
import Graph from './../../Component/Graph/Graph';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          confirmed: json.confirmed.value,
          recovered: json.recovered.value,
          deaths: json.deaths.value,
        });
      })
      .catch((err) => console.log('new error', err));
  };

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} screen="Home" />
        <ScrollView
          style={{
            marginBottom: 30,
          }}>
          <Image
            source={{
              // uri:
              //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-nms3hadA95yDTVT0r59LI15XWqnxx8VUDg&usqp=CAU',

              uri: 'https://covid19.mathdro.id/api/og',
            }}
            style={{width: '100%', height: 200, marginTop: 10}}
          />

          <View style={styles.card}>
            <Text style={styles.total}>Total Detail</Text>
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
          </View>
          <Graph
            deaths={this.state.deaths}
            recovered={this.state.recovered}
            confirmed={this.state.confirmed}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  total: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B80E17',
  },
});
