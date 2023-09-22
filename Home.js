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
import { Button } from "react-native-web";


export default function Home({navigation}) {
  const [platos, setPlatos] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=b8f09de956224d7b8d662d874614e14d&query=${buscar}`;
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
      {buscar.length > 2 ? (
        /*aca va lo que pasa si es true,
        faltaria ponerlo en una card y agregar el boton de ver detalle, 
        eso te lleva a otra pantalla y ahi podes agregar o eliminarlo del menu*/
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
        /*aca va lo que pasa si es false*/
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
    width: "90%",
    marginTop: 15,
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
