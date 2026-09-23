import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { layout } from '../theme/tokens';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />
      <View style={styles.centerWrapper}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Top Hero Image Section */}
          <View style={styles.heroSection}>
            <Image
              source={require('../../assets/coin_splash.png')}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>

          {/* Headline Text */}
          <View style={styles.headlineSection}>
            <Text style={styles.headlineText}>
              Smartest Way to Trade crypto & all giftcards
            </Text>
          </View>

          {/* Bottom Action Buttons */}
          <View style={styles.actionsSection}>
            {/* Get Started Button */}
            <TouchableOpacity
              style={styles.getStartedBtn}
              activeOpacity={0.85}
              onPress={() => router.push('/get-started' as any)}
            >
              <Text style={styles.getStartedText}>Get started</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInBtn}
              activeOpacity={0.85}
              onPress={() => router.push('/sign-in' as any)}
            >
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3D019D',
  },
  centerWrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    maxWidth: layout.maxContentWidth,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },
  heroSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heroImage: {
    width: 448,
    maxWidth: '120%',
    height: 264,
  },
  headlineSection: {
    width: 311,
    maxWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  headlineText: {
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: -0.2,
  },
  actionsSection: {
    width: 311,
    maxWidth: '100%',
    gap: 13,
    alignItems: 'center',
  },
  getStartedBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#340D73',
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
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  signInBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: '#340D73',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
});
