import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const SignUpPage = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.root}>
			<Text style={styles.text}>CREATE YOUR ACCOUNT</Text>

			<TextInput style={styles.input} label="Username" type="outline" />

			<TextInput style={styles.input} label="Email" type="outline" />

			<TextInput
				style={styles.input}
				secureTextEntry
				right={<TextInput.Icon name="eye" />}
				label="Password"
				type="outline"
			/>

			<TextInput style={styles.input} label="Phone Number" type="outline" />

			<TextInput style={styles.input} label="FiDAS ID" type="outline" />

			<Button title="click here to sign in" onPress={() => navigation.navigate('login')} />

			<Button title="Go to home page" onPress={() => navigation.navigate('auth')} />
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
		marginBottom: 10,
		borderRadius: 5,
	},

	input: {
		borderWidth: 1,
		width: 300,
		textAlign: 'center',
		fontSize: 20,
		backgroundColor: '#ffffff',
		marginBottom: 10,
	},
});

export default SignUpPage;
