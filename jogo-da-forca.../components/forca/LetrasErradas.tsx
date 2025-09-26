import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  letras: string[];
}

export default function LetrasErradas({ letras }: Props) {
  return (
    <Text style={styles.erradas}>❌ {letras.join(" ")}</Text>
  );
}

const styles = StyleSheet.create({
  erradas: { fontSize: 20, color: "red", marginVertical: 10 },
});
