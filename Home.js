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
        console.log(response.data.results);
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
    {
        buscar.length>2 ? 
        /*aca va lo que pasa si es true, hay que dentro del use efffect ponerle la condicion del buscador*/
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
        :
        /*aca va lo que pasa si es false*/
        console.log("false")
    }
    
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
},
title: {
    fontSize: 32,
},
imagen:{
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
TextInput: {
    
    marginHorizontal: 17,
    padding: 10,
    borderRadius: 20,
    shadowOffset: {
    width: 3,
    height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    placeholderTextColor: "gray",
    height: 50,
    marginBottom: 10,
    alignItems: "center",
    width: "80%",
    marginTop: 15,
},
});
