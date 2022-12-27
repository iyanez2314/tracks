import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text>AccountScreen</Text>
      <Spacer />
      <Button onPress={signout}>Sign out</Button>
    </>
  );
};

const styles = StyleSheet.create({});
export default AccountScreen;
