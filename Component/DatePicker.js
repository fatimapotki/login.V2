import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Picker from "@react-native-community/picker";

export default function DatePicker() {
	return (
		<View style={styles.container}>
			<Picke style={styles.monthPicker}>
				<Picker.Item label='January' value={0} />
			</Picke>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	monthPicker: {
		flex: 1,
	},
});
