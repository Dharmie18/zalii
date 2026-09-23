import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function NotificationsScreen() {
  const router = useRouter();

  const handleFinish = () => {
    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.outerCenterWrapper}>
        <View style={styles.mobileFrame}>
          {/* Hero Illustration Container (Frame 2147230052: 343x306, radius 200) */}
          <View style={styles.heroBox}>
            <Image
              source={require('../../assets/notificaion.png')}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>

          {/* Title */}
          <Text style={styles.titleText}>Enable notifications</Text>

          {/* Subtitle Description */}
          <Text style={styles.subtitleText}>
            Allow notifications to get essential information about your account, transaction updates and other alerts
          </Text>

          {/* Action Buttons Column (Frame 2147230056) */}
          <View style={styles.actionsColumn}>
            {/* Enable Button */}
            <TouchableOpacity
              style={styles.enableBtn}
              activeOpacity={0.85}
              onPress={handleFinish}
            >
              <Text style={styles.enableBtnText}>Enable</Text>
            </TouchableOpacity>

            {/* Skip Button */}
            <TouchableOpacity
              style={styles.skipBtn}
              activeOpacity={0.85}
              onPress={handleFinish}
            >
              <Text style={styles.skipBtnText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  outerCenterWrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  mobileFrame: {
    flex: 1,
    width: '100%',
    maxWidth: 375,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heroBox: {
    width: 343,
    maxWidth: '100%',
    height: 306,
    backgroundColor: '#EEE0FE',
    borderRadius: 200,
    marginTop: 34,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  heroImage: {
    width: '90%',
    height: '90%',
  },
  titleText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '600',
    color: '#3D019D',
    textAlign: 'center',
    letterSpacing: -0.48,
    marginTop: 45,
  },
  subtitleText: {
    width: 336,
    maxWidth: '100%',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.16,
    marginTop: 16,
  },
  actionsColumn: {
    width: 343,
    maxWidth: '100%',
    position: 'absolute',
    bottom: 40,
    gap: 16,
    alignItems: 'center',
  },
  enableBtn: {
    width: 343,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#3D019D',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#7D00FF',
    shadowColor: '#7D00FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  enableBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  skipBtn: {
    width: 343,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipBtnText: {
    color: '#3D019D',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
});
