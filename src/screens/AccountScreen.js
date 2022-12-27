import React, { useContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
      <Text>AccountScreen</Text>
      <Spacer />
      <Button onPress={signout} title="Sign Out" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default AccountScreen;
