import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Home from "./Screens/Home";
import DetailsScreen from "./Screens/DetailsScreen";
import SignUp from "./Screens/Sing-upForm";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Navigator>
				<Screen
					name='home'
					options={{ headerShown: false, title: "" }}
					component={Home}></Screen>
				<Screen
					name='details'
					options={{ title: "My App" }}
					component={DetailsScreen}
				/>
				<Screen
					name='signUp'
					options={{ title: "Sign-Up Form" }}
					component={SignUp}
				/>
			</Navigator>
		</NavigationContainer>
	);
}
