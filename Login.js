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
        value={email}
        placeholder="Email"
        placeholderTextColor="#000"
        onChangeText={(email) => setEmail(email)}
    />
    <TextInput
        style={styles.TextInput}
        value={password}
        placeholder="Password"
        placeholderTextColor="#000"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
    />
    <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
        if (email == "" || password == "") {
            window.alert("Por favor, complete ambos campos.");
        } else {
        }
        }}
    >
        <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    </View>
);
}

export const post = async (data) => {
return client
    .post("", { ...data })
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
    justifyContent: "center",
},
inputView: {
    backgroundColor: "#FFC0CB",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
},
TextInput: {
    borderRadius: 30,
    borderColor: "#a8977d",
    height: 50,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
},
loginBtn: {
    width: "80%",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#a8977d",
    marginBottom: 50,
},
});
