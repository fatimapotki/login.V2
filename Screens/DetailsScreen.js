import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function DetailsScreen({ route }) {
	// const { username } = route.params;
	return (
		<View style={styles.container}>
			<Text>Details</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#65a2bb",
		alignItems: "center",
		justifyContent: "center",
	},
});
