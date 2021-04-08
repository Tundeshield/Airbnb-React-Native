import React from "react";
import { Text, View, FlatList } from "react-native";
import Post from "./src/components/Post";
import DestinationSearch from "./src/screens/DestinationSearch";
import HomeScreen from "./src/screens/HomeScreen";
import SearchResults from "./src/screens/SearchResults";


export default function App() {
	return (
		<View>
			{/* <HomeScreen /> */}
			{/* <Post post={post1} /> */}
			{/* <SearchResults /> */}
      <DestinationSearch/>
		</View>
	);
}
