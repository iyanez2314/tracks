import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { Context as LocationContext } from "../context/locationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Text h2>Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services </Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default TrackCreateScreen;
