import React from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let tempArray = [];
  for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
      tempArray.push({
        latitude: 37.33233 + i * 0.001,
        longitude: -122.03121 + i * 0.001,
      });
    } else {
      tempArray.push({
        latitude: 37.33233 - i * 0.002,
        longitude: -122.03121 + i * 0.001,
      });
    }
  }
  return (
    <MapView
      initialRegion={{
        latitude: 37.33233,
        longitude: -122.03121,
        longitudeDelta: 0.01,
        latitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline coordinates={tempArray} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
export default Map;
