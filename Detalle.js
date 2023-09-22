import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    View,
    TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useContextState } from "./contextState.js";



export default function Detalle({navigation, route}) {
    const { contextState, setContextState } = useContextState();
    const [plato, setPlato] = useState({});
    useEffect(() => {
        const apiUrl = `https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=79cc068bbcbf489394c77ea977d385d4`;
        axios.get(apiUrl).then((response) => {
        setPlato(response.data);
        console.log(response.data);
        });
    },[]);
    return(<View style={styles.container}>
        <Text style={styles.menu}>Price Per Serving: {plato.pricePerServing}</Text>
        {plato.vegan ? <Text style={styles.menu}>Es vegano</Text> : <Text style={styles.menu}>No es vegano</Text>}
        <Text style={styles.menu}>Health Score: {plato.healthScore}</Text>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => setContextState({ newValue: plato, type: "SET_MENU" })}
        >
            <Text>Agregar al Menú</Text>
        </TouchableOpacity>
    </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 20,
    },
    btn: {
        width: "80%",
        marginHorizontal: 32,
        borderRadius: 30,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "#a8977d",
        marginBottom: 5,
    },
    menu: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#a8977d",
        marginHorizontal: 20,
    },
});