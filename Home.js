import React, { useState } from "react";
import {
StyleSheet,
Text,
View,
Image,
TextInput,
Button,
TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function Home() {
    const getPlatos = async (id) => {
        const {data} = await axios.get("https://api.spoonacular.com/food/menuItems/", {id})
    };

    return(
        <View style={styles.container}>
            <Text style={styles.menu}>Menú</Text>
        </View>
    
    )
}

export const get = async (data) => {
    return client
        .get("", { ...data })
        .then((response) => response.data)
        .catch((error) => {
        console.log(error);
        throw error;
        });
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 10,
    },
    menu: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#a8977d",
        marginHorizontal: 20,
        
    },
})