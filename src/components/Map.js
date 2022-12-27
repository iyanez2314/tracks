import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      style={styles.map}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
