import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';

export default class StackedLabelExample extends Component {
  render() {
    return (
      <View style={styles.inputView}>
        <View style={styles.icon}>
          <Icon type={this.props.type} name={this.props.iconName} />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder={this.props.placeHolder}
            onChangeText={(text) =>
              this.props.onChangeText(text, this.props.name)
            }
            secureTextEntry={this.props.security}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#E4E4E4',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
    padding: 5,
    height: 50,
    margin: 10,
  },
  wrongInput: {
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  icon: {paddingTop: 5},

  input: {
    width: '90%',
  },
});
