import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface Props {
  onPress: (letra: string) => void;
  disabled?: boolean;
}

export default function Teclado({ onPress, disabled }: Props) {
  return (
    <View style={styles.container}>
      {letras.map((l) => (
        <TouchableOpacity
          key={l}
          style={[styles.botao, disabled && { backgroundColor: "#ccc" }]}
          onPress={() => onPress(l)}
          disabled={disabled}
        >
          <Text style={styles.texto}>{l}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 20 },
  botao: { backgroundColor: "#2196F3", padding: 10, margin: 5, borderRadius: 5, minWidth: 40, alignItems: "center" },
  texto: { color: "white", fontSize: 18, fontWeight: "bold" },
});
