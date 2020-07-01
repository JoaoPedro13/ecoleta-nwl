import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Routes from "./src/navigation/routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </SafeAreaView>
  );
}
