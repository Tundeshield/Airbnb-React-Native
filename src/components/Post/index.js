import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const Post = ({ post }) => (
	<View style={styles.container}>
		{/*Image*/}
		<Image style={styles.image} source={{ uri: post.image }} />
		{/*Bed and Bedroom*/}
		<Text style={styles.bedrooms}>
			{post.bed} bed . {post.bedroom} bedroom
		</Text>
		{/*Type and description*/}
		<Text style={styles.description} numberOfLines={2}>
			{post.type} . {post.description}
		</Text>
		{/*Old and new price*/}
		<Text style={styles.prices}>
			<Text style={styles.oldPrice}>${post.oldPrice}</Text>
			<Text style={styles.price}> ${post.newPrice}</Text>
			<Text> / night</Text>
		</Text>
		<Text style={styles.totalPrice}>$ {post.totalPrice} Total</Text>
	</View>
);

export default Post;
