import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>Track list screenr</Text>
      <Button
        title="Go Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});
export default TrackListScreen;
