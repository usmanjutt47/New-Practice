import { Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Example() {
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Enter your email"
        style={[styles.input, isEmailFocused && styles.inputFocused]}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <TextInput
        placeholder="Enter your password"
        style={[styles.input, isPasswordFocused && styles.inputFocused]}
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
      />
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    marginTop: 10,
    height: 48,
    width: "90%",
    borderRadius: 12,
    paddingLeft: 10,
    backgroundColor: "#cecece",
  },
  inputFocused: {
    borderColor: "#2196F3",
    borderWidth: 1.5,
  },
  buttonContainer: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
    width: "90%",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 12,
    textAlign: "center",
  },
});
