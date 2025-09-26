import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao Jogo da Forca! 🎉</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push("/forca")}>
        <Text style={styles.botaoTexto}>🎮 Jogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, marginBottom: 20, color: "#fff" },
  botao: { backgroundColor: "#2196F3", padding: 15, borderRadius: 8 },
  botaoTexto: { color: "#fff", fontSize: 18 }
});
