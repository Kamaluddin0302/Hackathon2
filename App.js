/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  AppRegistry,
} from 'react-native';
import StackNavigation from './Src/Config/Navigation/Navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;

AppRegistry.registerComponent('App', () => App);
