import React from "react";
import { StyleSheet, View, ViewStyle, Text } from "react-native";
import { Icon } from "react-native-elements";

// declare interface IRadioButton {
//     label: string;
//     checked?: boolean;
//     style?: ViewStyle;
//     checkedColor?: string;
//     uncheckedColor?: string;
// }

export default RadioButton = (props) => {
	const { label, checked, style, checkedColor, uncheckedColor } = props;

	return (
		<View style={[Styles.mainContainer, style]}>
			<Icon
				name={
					checked ? "checkbox-blank-circle" : "checkbox-blank-circle-outline"
				}
				color={checked ? checkedColor : uncheckedColor}
				size={20}
			/>
			<Text numberOfLines={1} style={Styles.label}></Text>
		</View>
	);
};

RadioButton.defaultProps = {
	checked: false,
	checkedColor: "lightBlue",
	uncheckedColor: "black",
};

const Styles = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	label: {
		fontSize: 13,
		marginLeft: 6,
	},
});
