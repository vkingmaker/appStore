/** @format */

import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SignInScreen = () => {
	return (
		<View style={styles.container}>
			<Image
				style={styles.backgroundImg}
				source={require('../assets/images/fingerprint.png')}
			/>
			<View style={styles.loginForm}>
				<View>
					<Text style={styles.inputLabel}>Email</Text>
					<View style={styles.customInput}>
						<MaterialCommunityIcons
							style={styles.iconInput}
							name='email-outline'
							size={18}
							color='gray'
						/>
						<TextInput style={styles.userTextInput} />
					</View>
				</View>
				<View>
					<Text style={styles.inputLabel}>Password</Text>
					<View style={styles.customInput}>
						<MaterialCommunityIcons
							style={styles.iconInput}
							name='shield-key-outline'
							size={18}
							color='gray'
						/>
						<TextInput style={styles.userTextInput} secureTextEntry={true} />
					</View>
				</View>
				<TouchableOpacity style={styles.singInBtn}>
					<Text style={styles.singInBtnLabel}>Sign In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 24,
		height: '100%',
		width: '100%',
		backgroundColor: '#fff',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
	},
	backgroundImg: {
		width: '100%',
		height: 300,
	},
	loginForm: {
		display: 'flex',
		justifyContent: 'space-between',
		position: 'absolute',
		width: '80%',
		bottom: '20%',
		height: '28%',
	},
	userTextInput: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		borderStyle: 'solid',
		height: 30,
    paddingLeft: 25,
    fontFamily: 'Montserrat',
	},
	customInput: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'center',
	},
	iconInput: {
		position: 'absolute',
	},
	inputLabel: {
		textTransform: 'capitalize',
		fontFamily: 'Montserrat',
		fontSize: 12,
	},
	singInBtn: {
		height: 50,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#ccc',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#e7eff6',
	},
	singInBtnLabel: {
		fontSize: 14,
		fontFamily: 'Montserrat-bold',
	},
});

export default SignInScreen;
