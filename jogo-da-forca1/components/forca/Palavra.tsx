import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  palavra: string;
  letrasCorretas: string[];
}

export default function Palavra({ palavra, letrasCorretas }: Props) {
  return (
    <Text style={styles.palavra}>
      {palavra.split("").map((l, i) => (letrasCorretas.includes(l) ? l : "_")).join(" ")}
    </Text>
  );
}

const styles = StyleSheet.create({
  palavra: { fontSize: 32, letterSpacing: 5, marginVertical: 20 },
});
