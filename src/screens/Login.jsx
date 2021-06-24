import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';


const LoginPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>SIGN IN TO YOUR ACCOUNT</Text>


			<TextInput style={styles.input}  label="Email" type="outline"/> 

		    <TextInput style={styles.input} label="Password" 
			 secureTextEntry 
			 right={<TextInput.Icon name="eye" />}
			  type="outline"/>

		
            <Button title="Sign in as fire station" onPress={() => navigation.navigate('SignIn')} /> 
			<Button title="Go to home page" onPress={() => navigation.navigate('auth')} />
			<Button title="click here to sign up" onPress={() => navigation.navigate('SignUp')} />
		</View>

		
	);
};


const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
		backgroundColor: '#FF6300',
	},
	
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#000',
		marginBottom:10,
		borderRadius: 500
	},

	input : {
		borderWidth :1, 
		width : 300,
		textAlign : 'center',
		fontSize: 20,
		backgroundColor: '#ffffff',
		marginBottom:10
	}	

});

export default LoginPage;
