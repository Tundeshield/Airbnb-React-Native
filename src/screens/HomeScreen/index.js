import React from "react";
import { View, ImageBackground, Text, Pressable } from "react-native";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => (
	<View>
		<Pressable
			style={styles.searchBttn}
			onPress={() => console.warn("Search btn clicked")}
		>
			<FontAwesome name="search" size={24} color="#f15454" />
			<Text style={styles.searchBttnText}>Where are you going?</Text>
		</Pressable>

		<ImageBackground
			source={require("../../../assets/wallpaper.jpg")}
			style={styles.image}
		>
			<Text style={styles.title}>Go Near</Text>

			<Pressable
				style={styles.button}
				onPress={() => console.warn("Explore btn clicked")}
			>
				<Text style={styles.bttnText}>Explore nearby stays</Text>
			</Pressable>
		</ImageBackground>
	</View>
);

export default HomeScreen;
