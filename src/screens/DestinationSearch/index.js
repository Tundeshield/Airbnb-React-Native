import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DestinationSearch = () => {
	const [inputText, setInputText] = useState("");
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			{/*input */}
			<TextInput
				style={styles.textInput}
				placeholder="Where are you going?"
				value={inputText}
				onChangeText={setInputText}
			/>

			<FlatList
				data={searchResults}
				renderItem={({ item }) => (
					<Pressable
						style={styles.row}
						onPress={() => navigation.navigate("Profile")}
					>
						<View style={styles.iconContainer}>
							<Entypo name="location-pin" size={30} color="black" />
						</View>
						<Text style={styles.locationText}>{item.description}</Text>
					</Pressable>
				)}
			/>
		</View>
	);
};

export default DestinationSearch;
