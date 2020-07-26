import React, {useState} from 'react';
import {View, Picker, StyleSheet} from 'react-native';

export default class Country extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: 'Pakistan',
    };
  }
  componentDidMount = async () => {
    await fetch('https://covid19.mathdro.id/api/countries', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          Data: json.countries,
        });
      })
      .catch((err) => console.log('new error', err));
  };
  render() {
    console.log(this.state.Data);
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedValue}
          style={{height: 50, width: 250}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({selectedValue: itemValue});
            this.props.ChangeCounrty(itemValue);
          }}>
          {this.state.Data &&
            this.state.Data.map((val) => (
              <Picker.Item label={val.name} value={val.name} />
            ))}
          {/* <Picker.Item label="Afghanistan" value="Afghanistan" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Bangladesh" value="Bangladesh" />
          <Picker.Item label="Iran" value="Iran" />
          <Picker.Item label="Turkey" value="Turkey" /> */}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
});
