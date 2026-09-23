import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="get-started" />
          <Stack.Screen name="personal-info" />
          <Stack.Screen name="verify-email" />
          <Stack.Screen name="create-password" />
          <Stack.Screen name="phone-number" />
          <Stack.Screen name="verify-phone" />
          <Stack.Screen name="account-setup" />
          <Stack.Screen name="notifications" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
