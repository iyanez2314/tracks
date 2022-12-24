import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUpScreen</Text>
      <Button
        title="Go to sign in"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SignUpScreen;
