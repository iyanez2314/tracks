import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);
  return (
    <SafeAreaView>
      <Text h2>Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services </Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
