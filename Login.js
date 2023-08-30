import { StatusBar } from "expo-status-bar";
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

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <TextInput
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor="#000"
        onChangeText={(email) => setEmail(email)}
    />
    <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
    />
    <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    </View>
);

}const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        width:"70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        borderradius: 30,
        borderColor:"#a8977d",
        height: 50,
        padding: 10,
        marginBottom: 10,
        alignItems: "center",
        marginLeft: 20,
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#a8977d",
        marginBottom: 50,
    }
})

