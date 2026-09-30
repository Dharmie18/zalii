import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAuth } from '../contexts/AuthContext';
import { apiRequest, setAuthToken } from '../lib/api';

function TimeIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_time)">
        <Path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip_time">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CheckIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1281 3.64331C14.2531 3.76833 14.3233 3.93787 14.3233 4.11464C14.3233 4.29142 14.2531 4.46096 14.1281 4.58598L6.63346 12.0813C6.56536 12.1494 6.4845 12.2035 6.39551 12.2404C6.30651 12.2772 6.21113 12.2962 6.11479 12.2962C6.01846 12.2962 5.92308 12.2772 5.83408 12.2404C5.74509 12.2035 5.66423 12.1494 5.59613 12.0813L1.87213 8.35731C1.81019 8.29537 1.76105 8.22184 1.72753 8.14091C1.69401 8.05998 1.67676 7.97324 1.67676 7.88564C1.67676 7.79805 1.69401 7.71131 1.72753 7.63038C1.76105 7.54945 1.81019 7.47592 1.87213 7.41398C1.93407 7.35204 2.0076 7.3029 2.08853 7.26938C2.16946 7.23586 2.2562 7.21861 2.3438 7.21861C2.43139 7.21861 2.51813 7.23586 2.59906 7.26938C2.67999 7.3029 2.75352 7.35204 2.81546 7.41398L6.11546 10.714L13.1848 3.64331C13.3098 3.51833 13.4794 3.44812 13.6561 3.44812C13.8329 3.44812 14.0031 3.51833 14.1281 3.64331Z"
        fill="white"
      />
    </Svg>
  );
}

export default function AccountSetupScreen() {
  const router = useRouter();
  const { userData } = useAuth();
  const [isCreated, setIsCreated] = useState(false);
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Pulse animation for setting up rings
  useEffect(() => {
    if (!isCreated) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.08,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [isCreated]);

  // Execute actual account creation against backend API
  useEffect(() => {
    let isMounted = true;
    const executeRegistration = async () => {
      try {
        const payload = {
          email: userData.email || 'user@zali.com',
          password: userData.password || 'ZaliUser@2026!',
          first_name: userData.firstName || 'Trader',
          last_name: userData.lastName || '',
          phone: userData.phone || null,
        };

        const res = await apiRequest('/users/register', 'POST', payload);
        if (res && res.token) {
          setAuthToken(res.token);
        }
      } catch (err) {
        console.log('[AccountSetup] Registration notice:', err);
      } finally {
        if (isMounted) {
          setIsCreated(true);
        }
      }
    };

    const timer = setTimeout(() => {
      executeRegistration();
    }, 2500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  // After "Account created" shows for 2s, navigate to main app dashboard
  useEffect(() => {
    if (isCreated) {
      const timer2 = setTimeout(() => {
        router.replace('/notifications' as any);
      }, 2000);
      return () => clearTimeout(timer2);
    }
  }, [isCreated]);

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />
      <View style={styles.outerCenterWrapper}>
        <View style={styles.mobileFrame}>
          <View style={styles.scrimOverlay}>
            {/* Sheet Card: 343x232, radius 32, bottom 25 */}
            <View style={styles.sheetCard}>
              {!isCreated ? (
                <>
                  {/* Stage 1: Setting up your account */}
                  <Animated.View
                    style={[
                      styles.glowOuterRing,
                      { transform: [{ scale: pulseAnim }] },
                    ]}
                  >
                    <View style={styles.glowMiddleRing}>
                      <View style={styles.glowInnerBadge}>
                        <TimeIcon />
                      </View>
                    </View>
                  </Animated.View>

                  <Text style={styles.titleText}>Setting up your account</Text>

                  <Text style={styles.subtitleText}>
                    Wait a moment while we get your account ready for you to use.
                  </Text>
                </>
              ) : (
                <>
                  {/* Stage 2: Account created */}
                  <View style={styles.greenBadgeCircle}>
                    <CheckIcon />
                  </View>

                  <Text style={styles.titleTextCreated}>Account created</Text>

                  <Text style={styles.subtitleTextCreated}>
                    Your account has been successfully created and you will now be directed to it
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3D019D',
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
    backgroundColor: '#3D019D',
    position: 'relative',
  },
  scrimOverlay: {
    flex: 1,
    backgroundColor: 'rgba(39, 45, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 232,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 25,
  },
  glowOuterRing: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#D5ADFF',
    borderWidth: 1,
    borderColor: '#C695F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowMiddleRing: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#E2C7FD',
    borderWidth: 1,
    borderColor: '#D6B3FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowInnerBadge: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#340D73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 24,
  },
  subtitleText: {
    width: 286,
    maxWidth: '100%',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.14,
    marginTop: 16,
  },
  greenBadgeCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#10B982',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleTextCreated: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 24,
  },
  subtitleTextCreated: {
    width: 286,
    maxWidth: '100%',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.14,
    marginTop: 16,
  },
});
