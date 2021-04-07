import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const Post = () => (
	<View style={styles.container}>
		{/*Image*/}
		<Image
			style={styles.image}
			source={{
				uri:
					"https://a0.muscache.com/im/pictures/0064df04-82a9-44f1-920d-f90449f7661c.jpg?im_w=960",
			}}
		/>
		{/*Bed and Bedroom*/}
		<Text style={styles.bedrooms}>1 bed . 1 bedroom</Text>
		{/*Type and description*/}
		<Text style={styles.description} numberOfLines={2}>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, neque
			ipsa quas veritatis porro quaerat quia, libero temporibus sequi nam
			quisquam natus obcaecati et commodi.
		</Text>
		{/*Old and new price*/}
		<Text style={styles.prices}>
			<Text style={styles.oldPrice}>$70</Text>
			<Text style={styles.price}>   $50</Text>
			<Text>/night</Text>
		</Text>
		<Text style={styles.totalPrice}>$230 Total</Text>
	</View>
);

export default Post;
