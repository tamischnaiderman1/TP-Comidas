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
    const [ precio, setPrecio ] = useState(0);

    const Eliminar = (id) => {
        const nuevoArray = data.filter((item) => item.id !== id);
        setData(nuevoArray);
    };

    return (
        <View style={styles.container}>
        <FlatList
        data={contextState?.menu}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View>
            <Text style={styles.menu}>{item.title}</Text>
            <Image style={styles.imagen} source={item.image} />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => setContextState({ newValue: item.id, type: "ELIMINAR_FROM_MENU" })}
            >
                <Text>Eliminar</Text>
            </TouchableOpacity>
        </View>
        )}
        />
        <Text style={styles.menu}>Precio total: {contextState.menu.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerServing, 0)}</Text>
        <Text style={styles.menu}>Promedio HealthScore: {contextState.menu.reduce((accumulator, currentValue) => accumulator + currentValue.healthScore, 0)/contextState.menu.length}</Text>
        </View>
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
        backgroundColor: "#D5E2BC",
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
        color: "#3B6064",
        marginHorizontal: 20,
    },
    });
    