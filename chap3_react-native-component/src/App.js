import React from "react";
import { View, Text, Button } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}> Button Component </Text>
      <Button title="Button" onPress={() => alert("Click!!!")} color="black" />
    </View>
  );
};

export default App;
