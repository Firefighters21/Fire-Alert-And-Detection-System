import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/Splash';
import LoginPage from '../screens/Login';
import SignUpPage  from '../screens/SignUp';
import AuthenticatedLayout from './AuthenticatedLayout';
import LoginFs from '../screens/LoginFs';

const Stack = createStackNavigator();

const MainLayout = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="splash"
			>
				<Stack.Screen name="splash" component={SplashScreen} />
				<Stack.Screen name="login" component={LoginPage} />
				<Stack.Screen name="loginfs" component={LoginFs} />
				<Stack.Screen name="signUp" component={SignUpPage} />
				<Stack.Screen name="auth" component={AuthenticatedLayout} />
			
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainLayout;
