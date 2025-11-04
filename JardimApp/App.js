import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import DetalhesPlanta from "./Screens/DetalhesPlanta";
import NovaPlanta from "./Screens/NovaPlanta";

const Stack = createNativeStackNavigator();

function ListaPlantas({ navigation }) {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);
  const insets = useSafeAreaInsets();

  const API_URL = "http://192.168.x.xxx:5081/api/Plantas";

  const carregarPlantas = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao carregar dados da API");
      const data = await response.json();
      setPlantas(data);
    } catch (error) {
      console.error("Erro ao carregar plantas:", error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      carregarPlantas();
    }, [])
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>A carregar plantas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>🌿 As tuas Plantas</Text>

      <FlatList
        data={plantas}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetalhesPlanta", { planta: item })
            }
            activeOpacity={0.7}
          >
            <View style={styles.card}>
              {item.imagemUrl ? (
                <Image
                  source={{ uri: item.imagemUrl }}
                  style={styles.cardImage}
                />
              ) : (
                <View style={styles.cardImagePlaceholder}>
                  <Text style={{ fontSize: 30 }}>🌿</Text>
                </View>
              )}
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{item.nome}</Text>
                <Text style={styles.cardSubtitle}>{item.tipo}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Botão flutuante */}
      <TouchableOpacity
        style={[styles.fab, { bottom: insets.bottom + 35 }]}
        onPress={() => navigation.navigate("NovaPlanta")}
        activeOpacity={0.8}
      >
        <Text style={styles.fabText}>➕ ADICIONAR PLANTA</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListaPlantas">
          <Stack.Screen
            name="ListaPlantas"
            component={ListaPlantas}
            options={{ title: "JardimApp 🌱" }}
          />
          <Stack.Screen
            name="DetalhesPlanta"
            component={DetalhesPlanta}
            options={{ title: "Detalhes da Planta" }}
          />
          <Stack.Screen
            name="NovaPlanta"
            component={NovaPlanta}
            options={{ title: "Nova Planta" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f9f4",
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f9f4",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#4CAF50",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2f4f2f",
    textAlign: "center",
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 12,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    margin: 10,
  },
  cardImagePlaceholder: {
    width: 80,
    height: 80,
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2f4f2f",
  },
  cardSubtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
  },
  fab: {
    position: "absolute",
    left: 20,
    right: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  fabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
