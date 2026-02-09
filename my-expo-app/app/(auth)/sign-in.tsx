// app/sign-in.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

export default function SignInScreen() {
  // Clerk's hook for handling the sign-in process
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  // State variables to hold the user's input and manage UI state
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This function is called when the user presses the "Sign In" button
  const onSignInPress = async () => {
    if (!isLoaded) return; // Wait for Clerk to be ready

    setError("");
    setIsLoading(true);

    try {
      // Start the sign-in process with Clerk
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in is complete, we set the session as active
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        // And navigate the user to the main part of the app
        router.replace("/(tabs)");
      } else {
        // This can happen in multi-factor auth flows
        setError("Sign-in incomplete. Please try again.");
      }
    } catch (err: any) {
      // This is our error handling. We can show a friendly message.
      const errorMessage =
        err.errors?.[0]?.longMessage || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={setEmailAddress}
        style={styles.input}
        editable={!isLoading}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
        editable={!isLoading}
      />
      <Button
        title={isLoading ? "Signing In..." : "Sign In"}
        onPress={onSignInPress}
        disabled={isLoading}
      />
      <Link href="/change-password" asChild>
        <Pressable style={styles.link} disabled={isLoading}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </Pressable>
      </Link>
      <Link href="/sign-up" asChild>
        <Pressable style={styles.link} disabled={isLoading}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </Pressable>
      </Link>
    </View>
  );
}

// Add some basic styling to make it look nice
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  errorContainer: {
    backgroundColor: "#ffebee",
    borderColor: "#f44336",
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
  },
  errorText: {
    color: "#f44336",
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    marginTop: 15,
    alignItems: "center",
  },
  linkText: {
    color: "#007AFF",
    fontSize: 16,
  },
});
