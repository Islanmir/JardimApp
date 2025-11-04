import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function DetalhesPlanta({ route }) {
  const { planta } = route.params; // Recebe o objeto vindo do App.js

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🌿 Nome da planta */}
      <Text style={styles.titulo}>{planta.nome}</Text>

      {/* 🖼️ Imagem da planta */}
      {planta.imagemUrl ? (
        <Image source={{ uri: planta.imagemUrl }} style={styles.imagem} />
      ) : (
        <View style={styles.semImagem}>
          <Text style={{ color: "#666", fontSize: 18 }}>
            🌿 Sem imagem disponível
          </Text>
        </View>
      )}

      {/* 📋 Tipo */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Tipo:</Text>
        <Text style={styles.valor}>{planta.tipo || "—"}</Text>
      </View>

      {/* 🪴 Descrição */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.descricao}>
          {planta.descricao || "Sem descrição disponível."}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8fff4",
    padding: 20,
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2f4f2f",
    marginBottom: 15,
    textAlign: "center",
  },
  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#eee",
  },
  semImagem: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: "#2f4f2f",
    fontWeight: "bold",
    marginBottom: 5,
  },
  valor: {
    fontSize: 16,
    color: "#333",
  },
  descricao: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
    textAlign: "justify",
  },
});
