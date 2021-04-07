import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 500,
		resizeMode: "cover",
		justifyContent: "center",
	},
	title: {
		fontSize: 80,
		fontWeight: "bold",
		color: "white",
		width: "70%",
		marginLeft: 20,
	},
	button: {
		backgroundColor: "white",
		width: 200,
		height: 40,
		borderRadius: 10,
		marginLeft: 20,
		marginTop: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	bttnText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	searchBttn: {
		backgroundColor: "white",
		height: 60,
		borderRadius: 30,
		marginHorizontal: 10,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		position: "absolute",
		top: 30,
		zIndex: 100,
		width: Dimensions.get("screen").width - 20,
	},
	searchBttnText: {
		fontSize: 16,
		fontWeight: "bold",
		paddingLeft: 20,
	},
});

export default styles;
