import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Create A Track</Text>
      <Map />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
