import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		justifyContent: "space-between",
		height: "100%",
	},
	button: {
		borderWidth: 1,
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#676767",
	},
	searchBttn: {
		position: "absolute",
		bottom: 50,
		backgroundColor: "#f15454",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		borderRadius: 25,
		paddingHorizontal: 150,
		marginLeft: 5,
	},
	searchTxt: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
		width: "100%",
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderColor: "lightgrey",
		marginHorizontal: 20,
	},
});

export default styles;
