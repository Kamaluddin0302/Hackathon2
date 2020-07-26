import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Backheader from '../../Component/BackHeader/Backheader';

class CardCom extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api/confirmed', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          Data: json,
        });
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    let {Data} = this.state;
    return (
      <View>
        <Backheader navigation={this.props.navigation} value="All Detail" />
        <View style={styles.header}>
          <Text style={styles.hText}>Name</Text>
          <Text style={styles.hText}>Recovered</Text>
          <Text style={styles.hText}>Conformed</Text>
          <Text style={styles.hText}>Conformed</Text>
        </View>
        <ScrollView>
          {Data &&
            Data.map((val, i) => {
              console.log(val.confirmed);
              return (
                <View style={styles.header} key={i}>
                  <Text style={styles.Text}>{val.countryRegion}</Text>
                  <Text style={styles.Text}>{val.confirmed}</Text>
                  <Text style={styles.Text}>{val.countryRegion}</Text>
                  <Text style={styles.Text}>{val.countryRegion}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

export default CardCom;

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 5,
    margin: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hText: {
    fontWeight: 'bold',

    padding: 10,
    fontSize: 15,
  },
  Text: {
    fontWeight: 'bold',

    padding: 10,
    fontSize: 12,
  },
});
