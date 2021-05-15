import React from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
} from "react-native";
import RadioButton from "../Component/RadioButton";

export default function SignUp() {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<TextInput style={styles.inputName} placeholder='Firstname' />
				<TextInput style={styles.inputName} placeholder='Lastname' />
			</View>
			<TextInput style={styles.input} placeholder='Email' />
			<TextInput style={styles.input} placeholder='Create Password' />
			<TextInput style={styles.input} placeholder='Confirm Password' />
			<TextInput style={styles.input} placeholder='DOB' />

			<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.userBtn}
					onPress={() => {
						alert("Sumitted Successfully");
					}}>
					<Text style={styles.btnText}>submit</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#5ab341",
	},
	inputName: {
		fontSize: 15,
		borderRadius: 10,
		width: "45%",
		height: 32,
		backgroundColor: "#fff",
		padding: 15,
		margin: 10,
		marginTop: 30,
	},
	input: {
		alignItems: "center",
		fontSize: 15,
		borderRadius: 10,
		width: "75%",
		height: 32,
		backgroundColor: "#fff",
		padding: 15,
		margin: 10,
	},
	userBtn: {
		fontSize: 15,
		borderRadius: 10,
		backgroundColor: "#5ed700",
		padding: 10,
		width: "60%",
	},
	btnContainer: {
		marginTop: 60,
		flexDirection: "row",
		justifyContent: "center",
		width: "90%",
	},
	btnText: {
		fontSize: 16,
		textAlign: "center",
	},
});
