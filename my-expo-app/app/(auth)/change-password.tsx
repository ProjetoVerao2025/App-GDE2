// app/change-password.tsx
import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function ChangePasswordScreen() {
  // The `useUser` hook gives us access to the currently logged-in user
  const { user } = useUser();
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePasswordPress = async () => {
    if (!user) return;

    // Basic client-side validation
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
        setError("New password must be at least 8 characters long.");
        return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Clerk's `user` object has a handy method for this!
      await user.updatePassword({
        currentPassword,
        newPassword,
      });

      // If successful, close the modal
      router.back();
    } catch (err: any) {
      const errorMessage =
        err.errors?.[0]?.longMessage || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Change Password</Text>

       {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <TextInput
        value={currentPassword}
        placeholder="Current password..."
        secureTextEntry
        onChangeText={setCurrentPassword}
        style={styles.input}
      />
      <TextInput
        value={newPassword}
        placeholder="New password..."
        secureTextEntry
        onChangeText={setNewPassword}
        style={styles.input}
      />
      <TextInput
        value={confirmPassword}
        placeholder="Confirm new password..."
        secureTextEntry
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <Button
        title={isLoading ? "Updating..." : "Update Password"}
        onPress={onChangePasswordPress}
        disabled={isLoading}
      />
    </ScrollView>
  );
}

// Use similar styles...
const styles = StyleSheet.create({
    container: { flexGrow: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 5, fontSize: 16 },
    errorContainer: { backgroundColor: '#ffebee', padding: 12, borderRadius: 5, marginBottom: 15 },
    errorText: { color: '#f44336', textAlign: 'center' },
});