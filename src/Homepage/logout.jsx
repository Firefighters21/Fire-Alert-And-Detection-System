import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native';


const Logout = () => {
	const navigation = useNavigation();
	
	return (
		<View style={styles.root}>
			<Text style={styles.text}>logout</Text>
			
            

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
	},
});

export default Logout;
