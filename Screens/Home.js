import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
	StyleSheet,
	StatusBar,
} from "react-native";

//const userDetails =  useState ({ username: "admin" , password="12345"});

export default function Home({ props }) {
	const { navigation, username, password } = prpos;
	return (
		<View style={styles.container}>
			<StatusBar style={{ backgroundColor: "#1a52bb" }} />
			<Text style={styles.text}>Login to my App</Text>
			<TextInput
				style={styles.input}
				placeholder='username...'
				onChangeText={username}
			/>
			<TextInput
				style={styles.input}
				placeholder='password...'
				secureTextEntry
			/>
			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => navigation.navigate("details")}>
					<Text style={styles.btnText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => navigation.navigate("signUp")}>
					{/* onPress={() => alert("SignUp Successfully")} */}
					<Text style={styles.btnText}>Sign-up</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1a52bb",
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 30,
		color: "#fff",
	},
	input: {
		borderWidth: 1,
		fontSize: 15,
		borderRadius: 10,
		width: "90%",

		backgroundColor: "#fff",
		padding: 15,
		margin: 10,
	},
	btnContainer: {
		marginTop: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
	},
	userBtn: {
		fontSize: 15,
		borderRadius: 10,
		backgroundColor: "#5ed700",
		padding: 10,
		width: "40%",
	},
	btnText: {
		fontSize: 16,
		textAlign: "center",
	},
});
