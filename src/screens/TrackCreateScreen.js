import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/locationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );
  const [err] = useLocation(state.recording, callback);
  console.log("In track create screen => ", state.recording);
  return (
    <SafeAreaView>
      <Text h2>Create A Track</Text>
      <Map />
      {/* {err ? <Text>Please enable location services </Text> : null} */}
      <TrackForm />
    </SafeAreaView>
  );
};
export default withNavigationFocus(TrackCreateScreen);
