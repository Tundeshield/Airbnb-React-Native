import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		margin: 10,
		marginTop: 40,
	},
	image: {
		width: "100%",
		aspectRatio: 3 / 2,
		resizeMode: "cover",
		borderRadius: 10,
	},
	description: {
		fontSize: 18,
		lineHeight: 20,
	},
	prices: {
		fontSize: 18,
		marginTop: 10,
	},
	oldPrice: {
		color: "#5b5b5b",
		textDecorationLine: "line-through",
	},
	price: {
		fontWeight: "bold",
	},
	totalPrice: {
		color: "#5b5b5b",
		textDecorationLine: "underline",
		marginTop: 10,
	},
	bedrooms: {
		marginVertical: 10,
		fontSize: 16,
		color: "#5b5b5b",
	},
});

export default styles;
