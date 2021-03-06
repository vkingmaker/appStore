/** @format */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

const fetchFonts = () => {
	return Font.loadAsync({
		'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
		'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
	});
};

export default function App() {
	const [dataLoaded, setDataLoaded] = useState(false);

	if (!dataLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setDataLoaded(true)}
				onError={(err) => console.log(err)}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name='landingPage' component={LandingPageScreen} />
				<Stack.Screen name='signupPage' component={SignUpScreen} />
				<Stack.Screen name='signInPage' component={SignInScreen} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='show' component={DetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
