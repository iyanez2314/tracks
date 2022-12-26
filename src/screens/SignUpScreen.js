import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for tracker"
        onSubmit={signup}
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer />
        <Text style={styles.link}>
          Already have an account? Sign in instead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  link: {
    color: "blue",
  },
});
export default SignUpScreen;
