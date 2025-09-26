import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  erros: number; 
}

export default function ForcaDesenho({ erros }: Props) {
  
  const partes = [
    "O",      
    "|",      
    "/",      
    "\\",     
    "/",      
    "\\",     
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.forca}>+---+</Text>
      <Text style={styles.forca}>|   |</Text>
      <Text style={styles.forca}>|   {erros > 0 ? partes[0] : ""}</Text>
      <Text style={styles.forca}>|  {erros > 2 ? partes[2] : ""}{erros > 1 ? partes[1] : ""}{erros > 3 ? partes[3] : ""}</Text>
      <Text style={styles.forca}>|  {erros > 4 ? partes[4] : ""} {erros > 5 ? partes[5] : ""}</Text>
      <Text style={styles.forca}>|</Text>
      <Text style={styles.forca}>====</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: "flex-start" },
  forca: { fontFamily: "monospace", fontSize: 18 },
});
