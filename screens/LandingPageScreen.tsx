import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingPageScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImg} source={require('../assets/images/web_shopping.png')} />
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn} onPress={() => { props.navigation.navigate('signupPage')}}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => { props.navigation.navigate('signInPage')}}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  backgroundImg: {
    height: 300,
    width: '100%',
  },
  btnGroup: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    position: 'absolute',
    bottom: 70
  },
  btn: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    width: '80%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7eff6',
  },
  btnText: {
    fontSize: 12,
    fontFamily: 'Montserrat-bold',
    textTransform: 'capitalize',
  }
});

export default LandingPageScreen;
