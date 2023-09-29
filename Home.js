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
import axios from "axios";


export default function Home({navigation}) {
  const [platos, setPlatos] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=79cc068bbcbf489394c77ea977d385d4&query=${buscar}`;
    axios.get(apiUrl).then((response) => {
      setPlatos(response.data.results);
      console.log(response.data.results);
    });
  }, [buscar]);

  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.TextInput}
        value={buscar}
        placeholder="Buscar"
        placeholderTextColor="#000"
        onChangeText={(buscar) => setBuscar(buscar)}
      />
      <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Menu")}
            >
          <Text>Ver Menu</Text>
      </TouchableOpacity>
      {buscar.length > 2 ? (
        /*faltaria ponerlo en una card*/
        <FlatList
          data={platos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.menu}>{item.title}</Text>
              <Image style={styles.imagen} source={item.image} />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Detalle", item)}
              >
                <Text>Ver Detalle</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        console.log("la busqueda debe contener mas de dos caracteres")
      )}
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
  imagen: {
    width: 320,
    height: 320,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  menu: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#D3C0D2",
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
    width: "90%",
    marginTop: 15,
  },
  btn: {
    fontWeight: "bold",
    width: "80%",
    marginHorizontal: 32,
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#D5E2BC",
    marginBottom: 5,
},
});
