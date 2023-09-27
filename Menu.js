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
    
    useEffect(() => {/*AYUDAAA
        const setPrecio(contextState?.menu.reduce((anterior, actual) => anterior + actual, 0))
        .forEach(p => {
            setPrecio(precio => precio + p.pricePerServing) 
            console.log(precio)
        });*/
    },[contextState?.menu])

    const Eliminar = (id) => {
        const nuevoArray = data.filter((item) => item.id !== id);
        setData(nuevoArray);
    };

    return (
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
    