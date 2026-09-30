import React, { useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function StartupScreen() {
  const router = useRouter();

  // Auto-navigate to welcome page
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />
      <TouchableOpacity
        style={styles.touchableArea}
        activeOpacity={1}
        onPress={() => router.push('/welcome')}
      >
        <View style={styles.centerContainer}>
          <Image
            source={require('../../assets/zali_white.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D019D',
  },
  touchableArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    width: 106,
    height: 96.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 106,
    height: 96.02,
  },
});
