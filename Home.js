import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
} from "react-native";
import { useAuth } from "./context";
import axios from "axios";
import { ActionTypes } from "./context/reducer";

export default function Home() {
const [platos, setPlatos] = useState([]);
const [buscar, setBuscar] = useState("");

useEffect(() => {
    const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=79cc068bbcbf489394c77ea977d385d4'

    axios.get(apiUrl)
        .then((response) => {
        setPlatos(response.data.results);
        });
    }, []);


return (
    <View style={styles.container}>
    <TextInput
        style={styles.TextInput}
        value={buscar}
        placeholder="Buscar"
        placeholderTextColor="#000"
        onChangeText={(buscar) => setBuscar(buscar)}
    />
    <FlatList
        data={platos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <View>
            <Text style={styles.menu}>{item.title}</Text>
            <Image style={styles.imagen}source={item.image}/>
        </View>
        )}
    />
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20,
},
item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 32,
},
imagen:{
    width: 200, 
    height: 200, 
    marginBottom: 10,
    marginHorizontal: 20,
},
menu: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#a8977d",
    marginHorizontal: 20,
    
},
TextInput: {
    borderRadius: 30,
    borderColor: "#a8977d",
    height: 50,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
    marginTop: 15,
},
});
