import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAuth } from '../contexts/AuthContext';

function KeyholeIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip_key)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 1.66669C5.39758 1.66669 1.66675 5.39752 1.66675 10C1.66675 14.6025 5.39758 18.3334 10.0001 18.3334C14.6026 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6026 1.66669 10.0001 1.66669ZM11.3942 10.2975C11.3338 10.3489 11.2872 10.4147 11.2588 10.4888C11.2304 10.563 11.2211 10.643 11.2317 10.7217L11.5859 12.8484C11.5958 12.908 11.5926 12.9691 11.5766 13.0274C11.5605 13.0857 11.5319 13.1398 11.4928 13.186C11.4537 13.2322 11.4051 13.2692 11.3502 13.2947C11.2953 13.3201 11.2356 13.3333 11.1751 13.3334H8.82508C8.7646 13.3333 8.70485 13.3201 8.64998 13.2947C8.59511 13.2692 8.54643 13.2322 8.50734 13.186C8.46825 13.1398 8.43967 13.0857 8.42359 13.0274C8.40752 12.9691 8.40433 12.908 8.41425 12.8484L8.76841 10.7217C8.77907 10.643 8.76976 10.563 8.74137 10.4888C8.71297 10.4147 8.66639 10.3489 8.60591 10.2975C8.29295 10.0155 8.07283 9.64526 7.9746 9.2356C7.87636 8.82594 7.90463 8.39612 8.05567 8.00285C8.20672 7.60959 8.47343 7.27135 8.82064 7.03277C9.16785 6.79419 9.57922 6.66647 10.0005 6.66647C10.4218 6.66647 10.8331 6.79419 11.1804 7.03277C11.5276 7.27135 11.7943 7.60959 11.9453 8.00285C12.0964 8.39612 12.1246 8.82594 12.0264 9.2356C11.9282 9.64526 11.7072 10.0155 11.3942 10.2975Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_key">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function EyeIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip_eye)">
        <Path
          d="M10.0001 4.16669C13.0659 4.16669 16.8017 6.18085 18.1084 9.08419C18.2301 9.35752 18.3334 9.67585 18.3334 10C18.3334 10.3234 18.2309 10.6425 18.1084 10.9159C16.8009 13.8192 13.0651 15.8334 10.0001 15.8334C6.93425 15.8334 3.19841 13.8192 1.89175 10.9159C1.77008 10.6417 1.66675 10.3242 1.66675 10C1.66675 9.67669 1.76925 9.35752 1.89175 9.08419C3.19925 6.18085 6.93508 4.16669 10.0001 4.16669ZM10.0001 6.66669C9.11603 6.66669 8.26818 7.01788 7.64306 7.643C7.01794 8.26812 6.66675 9.11597 6.66675 10C6.66675 10.8841 7.01794 11.7319 7.64306 12.357C8.26818 12.9822 9.11603 13.3334 10.0001 13.3334C10.8841 13.3334 11.732 12.9822 12.3571 12.357C12.9822 11.7319 13.3334 10.8841 13.3334 10C13.3334 9.11597 12.9822 8.26812 12.3571 7.643C11.732 7.01788 10.8841 6.66669 10.0001 6.66669ZM10.0001 8.33335C10.4421 8.33335 10.866 8.50895 11.1786 8.82151C11.4912 9.13407 11.6667 9.55799 11.6667 10C11.6667 10.442 11.4912 10.866 11.1786 11.1785C10.866 11.4911 10.4421 11.6667 10.0001 11.6667C9.55805 11.6667 9.13413 11.4911 8.82157 11.1785C8.50901 10.866 8.33341 10.442 8.33341 10C8.33341 9.55799 8.50901 9.13407 8.82157 8.82151C9.13413 8.50895 9.55805 8.33335 10.0001 8.33335Z"
          fill="#C2C4C7"
          fillOpacity={0.87}
        />
      </G>
      <Defs>
        <ClipPath id="clip_eye">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default function CreatePasswordScreen() {
  const router = useRouter();
  const { updateUserData } = useAuth();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<TextInput>(null);

  // Evaluate password strength criteria:
  // 1. Length >= 8
  // 2. Has uppercase letter
  // 3. Has symbol / special character
  const hasLength = password.length >= 8;
  const hasCaps = /[A-Z]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?/]/.test(password);

  let score = 0;
  if (hasLength) score++;
  if (hasCaps) score++;
  if (hasSymbol) score++;

  const hasTyped = password.length > 0;

  // Determine colors and label based on score
  let labelText = 'Weak';
  let labelColor = '#DC5355';
  let bar1Color = '#D9D9D9';
  let bar2Color = '#D9D9D9';
  let bar3Color = '#D9D9D9';

  if (hasTyped) {
    if (score <= 1) {
      labelText = 'Weak';
      labelColor = '#DC5355';
      bar1Color = '#DC5355';
      bar2Color = '#D9D9D9';
      bar3Color = '#D9D9D9';
    } else if (score === 2) {
      labelText = 'Medium';
      labelColor = '#F59E0B';
      bar1Color = '#F59E0B';
      bar2Color = '#F59E0B';
      bar3Color = '#D9D9D9';
    } else {
      labelText = 'Strong';
      labelColor = '#0EBA82';
      bar1Color = '#10B982';
      bar2Color = '#10B982';
      bar3Color = '#10B982';
    }
  }

  const isValid = score === 3;

  const handleCreatePassword = () => {
    if (!isValid) return;
    updateUserData({ password });
    router.replace('/phone-number' as any);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />
      <View style={styles.outerCenterWrapper}>
        <View style={styles.mobileFrame}>
          <View style={styles.scrimOverlay}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.avoidingView}
            >
              {/* White Sheet Card */}
              <View
                style={[
                  styles.sheetCard,
                  hasTyped && styles.sheetCardActive,
                ]}
              >
                {/* Title */}
                <Text style={styles.titleText}>Create a password</Text>

                {/* Subtitle */}
                <Text style={styles.subtitleText}>
                  Choose a password to secure your account
                </Text>

                {/* Password Input Box (No dark border!) */}
                <TouchableOpacity
                  style={styles.inputBox}
                  activeOpacity={0.95}
                  onPress={() => passwordRef.current?.focus()}
                >
                  <KeyholeIcon />
                  <View style={styles.inputColumn}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                      ref={passwordRef}
                      style={styles.textInput}
                      placeholder="••••••••••••"
                      placeholderTextColor="#9CA3AF"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={setPassword}
                      autoCapitalize="none"
                      autoCorrect={false}
                      editable={true}
                    />
                  </View>
                  <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                    <EyeIcon />
                  </TouchableOpacity>
                </TouchableOpacity>

                {/* Dynamic Password Strength Section when typing */}
                {hasTyped && (
                  <View style={styles.strengthWrapper}>
                    {/* 3-Bar Segmented Progress Indicator */}
                    <View style={styles.barsRow}>
                      <View style={[styles.barSegment, { backgroundColor: bar1Color }]} />
                      <View style={[styles.barSegment, { backgroundColor: bar2Color }]} />
                      <View style={[styles.barSegment, { backgroundColor: bar3Color }]} />
                    </View>

                    {/* Strength Labels & Good to go text */}
                    <View style={styles.labelsRow}>
                      <Text style={[styles.strengthLabel, { color: labelColor }]}>
                        {labelText}
                      </Text>
                      {score === 3 && (
                        <Text style={styles.goodToGoText}>You’re good to go!</Text>
                      )}
                    </View>
                  </View>
                )}

                {/* Create Password Button: DISABLED until score === 3 */}
                <TouchableOpacity
                  style={[styles.createBtn, !isValid && styles.btnDisabled]}
                  activeOpacity={0.85}
                  disabled={!isValid}
                  onPress={handleCreatePassword}
                >
                  <Text style={styles.createBtnText}>Create password</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
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
  avoidingView: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 18,
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 307,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  sheetCardActive: {
    height: 322,
    paddingBottom: 18,
  },
  titleText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.14,
    marginTop: 32,
    width: 275,
    maxWidth: '100%',
  },
  inputBox: {
    width: 311,
    maxWidth: '100%',
    height: 68,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 16,
  },
  inputColumn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 12,
    lineHeight: 14,
    color: '#768498',
    fontWeight: '400',
  },
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#091748',
    paddingVertical: 0,
    marginTop: 2,
    height: 24,
    ...(Platform.OS === 'web' ? { outlineWidth: 0, outlineStyle: 'none' } : {}),
  } as any,
  strengthWrapper: {
    width: 311,
    maxWidth: '100%',
    marginTop: 16,
  },
  barsRow: {
    width: 311,
    maxWidth: '100%',
    height: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barSegment: {
    flex: 1,
    height: 4,
    borderRadius: 32,
  },
  labelsRow: {
    width: 311,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  strengthLabel: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  goodToGoText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
  },
  createBtn: {
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
    marginTop: 20,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  createBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
});
