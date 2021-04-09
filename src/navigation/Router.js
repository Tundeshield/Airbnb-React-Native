import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import Guests from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
	return (
		<NavigationContainer >
			<Stack.Navigator>
				<Stack.Screen
					name={"Home"}
					component={HomeTabNavigator}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name={"Destination Search"}
					component={DestinationSearch}
				/>
				<Stack.Screen name={"How many people?"} component={Guests} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
