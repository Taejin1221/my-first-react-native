import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "Taejin";
  // const name = "Hanbit";
  // const name = "Another"
  return (
    <View style={styles.container}>
      {/* If Statement */}
      <Text style={styles.text}>
        {(() => {
          if (name === "Hanbit") return "My name is Hanbit";
          else if (name === "Taejin") return "My name is Taejin";
          else return "My name is React Native";
        })()}
      </Text>

      {/* Ternary Operator */}
      <Text style={styles.text}>
        {" "}
        My name is {name === "Taejin" ? "Taejin An" : "React Native"}
      </Text>

      {/* AND Operator */}
      {name === "Taejin" && (
        <Text style={styles.text}> My name is Taejin </Text>
      )}
      {name !== "Taejin" && (
        <Text style={styles.text}> My name is not Taejin </Text>
      )}

      {/* OR Operator */}
      {name !== "Taejin" || (
        <Text style={styles.text}> My name is Taejin </Text>
      )}

      {name === "Taejin" || (
        <Text style={styles.text}> My name is not Taejin </Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
