import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default class WelCome extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://fm100.com/wp-content/uploads/sites/12/2020/03/GettyImages-1205567013-coronavirs-740x493.jpg',
        }}
        style={styles.image}>
        <TouchableOpacity
          style={styles.getStarted}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  getStarted: {
    alignSelf: 'center',
    marginTop: '75%',
    backgroundColor: '#B80E17',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,

    width: 300,
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: 400,
  },
});
