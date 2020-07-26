import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Card, CardItem, Body} from 'native-base';

class CardCom extends React.Component {
  render() {
    return (
      <Card
        style={[styles.container, {backgroundColor: this.props.background}]}>
        <CardItem style={{backgroundColor: this.props.background}}>
          <Body style={[styles.body]}>
            <Text
              style={[
                styles.title,
                {
                  color: this.props.color,
                },
              ]}>
              {this.props.name}
            </Text>
            <Text
              style={[
                styles.value,
                {
                  color: this.props.color,
                },
              ]}>
              {this.props.value}
            </Text>
          </Body>
        </CardItem>
      </Card>
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
});

// get

// fetch("http://localhost:8000/api/places", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     setPlaces(json.places);
//   });

// post

// fetch("http://localhost:8000/api/users/signup", {
//   method: "POST",
//   body: JSON.stringify({
//     name: name,
//     email: email,
//     password: password,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
