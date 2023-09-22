import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useContextState } from "./contextState.js";

export default function Menu() {
    const { contextState, setContextState } = useContextState();

    return (
        <FlatList
        data={contextState?.menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View>
            <Text style={styles.menu}>{item.title}</Text>
            <Image style={styles.imagen} source={item.image} />
            
        </View>
        )}
        />
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        width: "80%",
        borderRadius: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#a8977d",
        marginBottom: 50,
    },
    imagen: {
        width: 320,
        height: 320,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    menu: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#a8977d",
        marginHorizontal: 20,
    },
    });
    