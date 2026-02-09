// app/sign-up.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  // State for user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  // State for the verification flow
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Step 1: Create the user account
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    setError("");
    setIsLoading(true);

    try {
      // Create the user with Clerk
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      });

      // Send the verification email
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Move to the verification screen
      setPendingVerification(true);
    } catch (err: any) {
      const errorMessage =
        err.errors?.[0]?.longMessage || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify the email code
  const onPressVerify = async () => {
    if (!isLoaded) return;

    setError("");
    setIsLoading(true);

    try {
      // Attempt to verify the code the user entered
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        // If successful, set the session active and navigate
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/(tabs)");
      } else {
        setError("Verification incomplete. Please try again.");
      }
    } catch (err: any) {
      const errorMessage =
        err.errors?.[0]?.longMessage || "Invalid verification code.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification ? (
        // Show the sign-up form
        <>
          <Text style={styles.title}>Sign Up</Text>

          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <TextInput
            value={firstName}
            placeholder="First Name..."
            onChangeText={setFirstName}
            style={styles.input}
            editable={!isLoading}
          />
          <TextInput
            value={lastName}
            placeholder="Last Name..."
            onChangeText={setLastName}
            style={styles.input}
            editable={!isLoading}
          />
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
            title={isLoading ? "Creating Account..." : "Sign Up"}
            onPress={onSignUpPress}
            disabled={isLoading}
          />
          <Link href="/sign-in" asChild>
            <Pressable style={styles.link} disabled={isLoading}>
              <Text style={styles.linkText}>Have an account? Sign In</Text>
            </Pressable>
          </Link>
        </>
      ) : (
        // Show the email verification form
        <>
          <Text style={styles.title}>Verify Your Email</Text>
          <Text style={styles.subtitle}>
            Enter the verification code sent to {emailAddress}
          </Text>

          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : null}

          <TextInput
            value={code}
            placeholder="Verification Code..."
            onChangeText={setCode}
            style={styles.input}
            editable={!isLoading}
            keyboardType="number-pad"
          />
          <Button
            title={isLoading ? "Verifying..." : "Verify Email"}
            onPress={onPressVerify}
            disabled={isLoading}
          />
        </>
      )}
    </View>
  );
}

// Use similar styles as the sign-in screen...
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center',
        padding: 20 
    },
    title: { 
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20 
    },
    subtitle: { 
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        color: '#666' 
    },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5, fontSize: 16 },
    errorContainer: { backgroundColor: '#ffebee', padding: 12, borderRadius: 5, marginBottom: 15 },
    errorText: { color: '#f44336', textAlign: 'center' },
    link: { marginTop: 15, alignItems: 'center' },
    linkText: { color: '#007AFF', fontSize: 16 }
});