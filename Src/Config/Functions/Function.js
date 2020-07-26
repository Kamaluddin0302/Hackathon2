import {Alert} from 'react-native';

let LoginFunc = async (state, navigation) => {
  console.log('===========>>>>>>>>>', navigation);
  return new Promise(async (resolve, reject) => {
    let {user_Email, user_Password} = state;
    if (user_Email === '' || !user_Password === '') {
      Alert.alert('Please_Enter_All_Feilds');
    } else {
      return await fetch('https://hackathon02.herokuapp.com/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: user_Email,
          password: user_Password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json.userToken);
          if (json.message === 'User not found!') {
            Alert.alert('User not found!');
          } else if (json.message === 'Incorrect Email/Password!') {
            Alert.alert('Incorrect Email/Password!');
          } else if (json.userToken) {
            console.log('kdjmijnfoanuon');
            Alert.alert('Sign up successfully');
            navigation.navigate('Home');
          }
        })
        .catch((err) => {
          console.log(err);
          //   Alert.alert('Interne_Problem');
        });
    }
  });
};

let SignupFunc = async (state, navigation) => {
  console.log(state);
  return new Promise(async (resolve, reject) => {
    let {user_Name, user_Age, user_Email, user_Password} = state;
    if (!user_Name || !user_Age || !user_Email || !user_Password) {
      Alert.alert('Please_Enter_All_Feilds');
    } else {
      return await fetch('https://hackathon02.herokuapp.com/users/register', {
        method: 'POST',
        body: JSON.stringify({
          name: user_Name,
          email: user_Email,
          password: user_Password,
          age: user_Age,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          if (json.message === 'Email Already exists') {
            Alert.alert('Email_ALready_exists');
          } else if (json.message === 'User registered successfully!') {
            Alert.alert('User_registered_successfully!');

            navigation.navigate('Home');
          }
        })
        .catch((err) => {
          Alert.alert('Interne_Problem');

          console.log(err);
        });
    }
  });
};

export {LoginFunc, SignupFunc};
