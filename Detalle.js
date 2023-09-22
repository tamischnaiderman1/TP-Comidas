import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    TextInput,
    Text,
    Image,
    View,
    TouchableOpacity,
} from "react-native";
import { useContextState } from "./contextState.js";



export default function Detalle() {
    const { contextState, setContextState } = useContextState();
    return(<View style={styles.container}>
        <TouchableOpacity
            style={styles.btn}
            onPress={() => setContextState({ newValue: item, type: "SET_MENU" })}
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
});