import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Palavra from "../../components/forca/Palavra";
import Teclado from "../../components/forca/Teclado";
import LetrasErradas from "../../components/forca/LetrasErradas";
import ForcaDesenho from "../../components/forca/ForcaDesenho";
import MensagemFinal from "../../components/forca/MensagemFinal";


const palavras = [
  "REACT", "JAVASCRIPT", "MOBILE", "PROGRAMAÇÃO", "DESENVOLVEDOR", "INTERFACE",
  "COMPONENTE", "STATE", "HOOKS", "NAVEGAÇÃO", "ANDROID", "IOS", "FRONTEND",
  "BACKEND", "FULLSTACK", "EXPO", "BIBLIOTECA", "FRAMEWORK", "FUNÇÃO", "OBJETO",
  "VARIÁVEL", "TIPAGEM", "PROJETO", "CÓDIGO", "DEPLOY", "RENDER", "ASYNC",
  "PROMISE", "API", "DATABASE"
];

export default function Forca() {
  const [palavra, setPalavra] = useState("");
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const [tentativas, setTentativas] = useState(6);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => iniciarNovoJogo(), []);

  const iniciarNovoJogo = () => {
    const aleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(aleatoria);
    setLetrasCorretas([]);
    setLetrasErradas([]);
    setTentativas(6);
    setMensagem("");
  };

  const verificarLetra = (letra: string) => {
    if (mensagem || letrasCorretas.includes(letra) || letrasErradas.includes(letra)) return;

    if (palavra.includes(letra)) {
      const novas = [...letrasCorretas, letra];
      setLetrasCorretas(novas);

      if (palavra.split("").every((l) => novas.includes(l))) {
        setMensagem("🎉 Parabéns, você venceu!");
      }
    } else {
      const novasErradas = [...letrasErradas, letra];
      setLetrasErradas(novasErradas);
      setTentativas(tentativas - 1);

      if (tentativas - 1 === 0) {
        setMensagem(`💀 Poxa, você perdeu! A palavra era: ${palavra}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ForcaDesenho erros={6 - tentativas} />
      <Palavra palavra={palavra} letrasCorretas={letrasCorretas} />
      <LetrasErradas letras={letrasErradas} />
      <Teclado onPress={verificarLetra} disabled={!!mensagem} />
      <MensagemFinal mensagem={mensagem} reiniciar={iniciarNovoJogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#f9f9f9" },
});