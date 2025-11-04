import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function NovaPlanta({ navigation }) {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  const API_URL = "http://192.168.x.xxx:5081/api/Plantas";

  const guardarPlanta = async () => {
    if (!nome.trim()) {
      Alert.alert("Erro", "O nome da planta é obrigatório!");
      return;
    }

    const novaPlanta = { nome, tipo, descricao, imagemUrl };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaPlanta),
      });

      if (response.ok) {
        Alert.alert("Sucesso", "Planta adicionada com sucesso!");
        navigation.goBack(); // Volta à lista
      } else {
        Alert.alert("Erro", "Não foi possível guardar a planta.");
      }
    } catch (error) {
      console.error("Erro ao guardar planta:", error);
      Alert.alert("Erro", "Falha na ligação com a API.");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.titulo}>🌱 Nova Planta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome da planta"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Tipo (ex: aromática, flor, etc)"
            value={tipo}
            onChangeText={setTipo}
          />
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="URL da imagem (opcional)"
            value={imagemUrl}
            onChangeText={setImagemUrl}
          />

          <View style={{ marginTop: 10, marginBottom: 60 }}>
            <Button title="💾 Guardar Planta" onPress={guardarPlanta} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8fff4",
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#f8fff4",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2f4f2f",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textarea: {
    height: 80,
    textAlignVertical: "top",
  },
});
