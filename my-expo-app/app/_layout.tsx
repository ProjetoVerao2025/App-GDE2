// app/_layout.tsx
import React, { useEffect } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SecureStore from "expo-secure-store";
import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, View, Text } from "react-native";

// This tells the splash screen to stay visible until we're ready
SplashScreen.preventAutoHideAsync();

/**
 * We need a secure place to store the user's session token.
 * `expo-secure-store` is perfect because it encrypts the data on the device.
 * This little object tells Clerk how to save and retrieve that token.
 */
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

// Let's grab our Clerk Publishable Key from the .env file
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Please add it to your .env file.");
}

// These are just some nice-to-haves from Expo Router
export { ErrorBoundary } from "expo-router";
export const unstable_settings = { initialRouteName: "(tabs)" };

/**
 * This is our main layout component. It's the "bouncer" for our app,
 * deciding who gets to go where based on their login status.
 */
const InitialLayout = () => {
  // These hooks are our main tools from Clerk and Expo Router
  const { isLoaded, isSignedIn } = useAuth(); // Clerk's hook to check auth status
  const segments = useSegments(); // Expo Router's hook to know where the user is
  const router = useRouter(); // Expo Router's hook to navigate the user

  // This effect hides the splash screen once Clerk has loaded
  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  // This is the core logic that handles our routing!
  useEffect(() => {
    if (!isLoaded) return; // Wait until Clerk is ready

    const inTabsGroup = segments[0] === "(tabs)";

    if (isSignedIn && !inTabsGroup) {
      // If the user is signed in and not in the main app area,
      // send them to the home screen.
      router.replace("/(tabs)");
    } else if (!isSignedIn) {
      // If the user is not signed in, send them to the sign-in screen.
      router.replace("/sign-in");
    }
  }, [isLoaded, isSignedIn, segments, router]);

  // While Clerk is loading, we'll show a simple loading spinner
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  // Once loaded, we define our app's screens
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
      <Stack.Screen
        name="change-password"
        options={{
          presentation: "modal",
          headerShown: true,
          title: "\"Change Password\",",
          headerBackTitle: "Profile",
        }}
      />
    </Stack>
  );
};

/**
 * This is the root component of our app.
 * We wrap everything in the `ClerkProvider` so that all our components
 * can access the user's authentication state.
 */
export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
}