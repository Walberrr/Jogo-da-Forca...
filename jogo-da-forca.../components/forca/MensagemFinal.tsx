import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  mensagem: string;
  reiniciar: () => void;
}

export default function MensagemFinal({ mensagem, reiniciar }: Props) {
  if (!mensagem) return null;

  return (
    <View style={{ marginTop: 20, alignItems: "center" }}>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <TouchableOpacity style={styles.botao} onPress={reiniciar}>
        <Text style={styles.botaoTexto}>🔄 Reiniciar o jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mensagem: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  botao: { backgroundColor: "#4CAF50", padding: 10, borderRadius: 5 },
  botaoTexto: { color: "white", fontSize: 18 },
});
