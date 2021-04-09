import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import DestinationSearch from "../screens/DestinationSearch";
import SearchResults from "../screens/SearchResults";
import Guests from "../screens/Guests";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#f15454",
			}}
		>
			<Tab.Screen
				name={"Home"}
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="home" size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={"Explore"}
				component={DestinationSearch}
				options={{
					tabBarIcon: ({ color }) => (
						<EvilIcons name="search" size={30} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={"Destinations"}
				component={SearchResults}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="airbnb" size={30} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={"Saved"}
				component={DestinationSearch}
				options={{
					tabBarIcon: ({ color }) => (
						<Entypo name="heart" size={30} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name={"Profile"}
				component={Guests}
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name="person-circle-outline" size={30} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;
