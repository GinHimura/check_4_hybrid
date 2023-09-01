import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Mapa from "./src/Mapa";

function App() {
  return (
    <SafeAreaView style={estilo.tela}>
      <StatusBar />
      <Mapa/>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
