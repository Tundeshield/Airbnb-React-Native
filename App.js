import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import Router from "./src/navigation/Router";

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<Router />
		</View>
	);
}
