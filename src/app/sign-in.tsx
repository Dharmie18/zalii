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
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAuth } from '../contexts/AuthContext';

function MailIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip_mail)">
        <Path
          d="M1.72333 4.56833L9.11917 11.965C9.3379 12.1839 9.63013 12.3139 9.93937 12.3298C10.2486 12.3456 10.5526 12.2463 10.7927 12.0508L10.8875 11.965L18.2783 4.57333C18.3025 4.665 18.3183 4.75833 18.3267 4.85417L18.3333 5V15C18.3335 15.4205 18.1747 15.8255 17.8887 16.1338C17.6028 16.4421 17.211 16.631 16.7917 16.6625L16.6667 16.6667H3.33333C2.91285 16.6668 2.50786 16.508 2.19954 16.2221C1.89122 15.9362 1.70237 15.5443 1.67083 15.125L1.66667 15V5C1.66667 4.9 1.675 4.80333 1.69167 4.70833L1.72333 4.56833ZM16.6667 3.33333C16.7675 3.33333 16.8667 3.34167 16.9625 3.35917L17.1042 3.39167L10.0042 10.4917L2.90167 3.39C2.99333 3.365 3.08833 3.34833 3.185 3.34L3.33333 3.33333H16.6667Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_mail">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function KeyholeIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip_key)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 1.66669C5.39758 1.66669 1.66675 5.39752 1.66675 10C1.66675 14.6025 5.39758 18.3334 10.0001 18.3334C14.6026 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6026 1.66669 10.0001 1.66669ZM11.3942 10.2975C11.3338 10.3489 11.2872 10.4147 11.2588 10.4888C11.2304 10.563 11.2211 10.643 11.2317 10.7217L11.5859 12.8484C11.5958 12.908 11.5926 12.9691 11.5766 13.0274C11.5605 13.0857 11.5319 13.1398 11.4928 13.186C11.4537 13.2322 11.4051 13.2692 11.3502 13.2947C11.2953 13.3201 11.2356 13.3333 11.1751 13.3334H8.82508C8.7646 13.3333 8.70485 13.3201 8.64998 13.2947C8.59511 13.2692 8.54643 13.2322 8.50734 13.186C8.46825 13.1398 8.43967 13.0857 8.42359 13.0274C8.40752 12.9691 8.40433 12.908 8.41425 12.8484L8.76841 10.7217C8.77907 10.643 8.76976 10.563 8.74137 10.4888C8.71297 10.4147 8.66639 10.3489 8.60591 10.2975C8.29295 10.0155 8.07283 9.64526 7.9746 9.2356C7.87636 8.82594 7.90843 8.39612 8.05567 8.00285C8.20672 7.60959 8.47343 7.27135 8.82064 7.03277C9.16785 6.79419 9.57922 6.66647 10.0005 6.66647C10.4218 6.66647 10.8331 6.79419 11.1804 7.03277C11.5276 7.27135 11.7943 7.60959 11.9453 8.00285C12.0964 8.39612 12.1246 8.82594 12.0264 9.2356C11.9282 9.64526 11.7072 10.0155 11.3942 10.2975Z"
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

export default function SignInScreen() {
  const router = useRouter();
  const { updateUserData } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  // User MUST enter a valid email address and password before Continue is enabled!
  const isValid =
    email.trim().length > 3 &&
    email.includes('@') &&
    email.includes('.') &&
    password.length >= 6;

  const handleSignIn = () => {
    if (!isValid || isLoading) return;
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      updateUserData({ email: email.trim() });
      router.replace('/(tabs)');
    }, 1000);
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
              {/* White Sheet Card: 343x437, radius 32, bottom 28 */}
              <View style={styles.sheetCard}>
                {/* Header Title & Subtitle */}
                <View style={styles.headerGroup}>
                  <Text style={styles.titleText}>Sign into your account</Text>
                  <Text style={styles.subtitleText}>
                    Enter your email to get started with us
                  </Text>
                </View>

                {/* Error Banner */}
                {errorMessage ? (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}

                {/* Form Container (Frame 2147227131: 311x214px) */}
                <View style={styles.formContainer}>
                  {/* Email Input Box (Frame 9608) */}
                  <TouchableOpacity
                    style={styles.inputBox}
                    activeOpacity={0.95}
                    onPress={() => emailRef.current?.focus()}
                  >
                    <MailIcon />
                    <View style={styles.inputColumn}>
                      <Text style={styles.fieldLabel}>Email address</Text>
                      <TextInput
                        ref={emailRef}
                        style={styles.textInput}
                        placeholder="jonathandoe@gmail.com"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={(t) => {
                          setEmail(t);
                          if (errorMessage) setErrorMessage('');
                        }}
                        editable={true}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* Password Input Box (Frame 9609) */}
                  <TouchableOpacity
                    style={styles.inputBox}
                    activeOpacity={0.95}
                    onPress={() => passwordRef.current?.focus()}
                  >
                    <KeyholeIcon />
                    <View style={styles.inputColumn}>
                      <Text style={styles.fieldLabel}>Password</Text>
                      <TextInput
                        ref={passwordRef}
                        style={styles.textInput}
                        placeholder="••••••••••••"
                        placeholderTextColor="#9CA3AF"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={(t) => {
                          setPassword(t);
                          if (errorMessage) setErrorMessage('');
                        }}
                        autoCapitalize="none"
                        editable={true}
                      />
                    </View>
                    <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                      <EyeIcon />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  {/* Continue Button: DISABLED until user fills out valid credentials */}
                  <TouchableOpacity
                    style={[styles.continueBtn, (!isValid || isLoading) && styles.continueBtnDisabled]}
                    activeOpacity={0.85}
                    disabled={!isValid || isLoading}
                    onPress={handleSignIn}
                  >
                    {isLoading ? (
                      <ActivityIndicator color="#FFFFFF" size="small" />
                    ) : (
                      <Text style={styles.continueText}>Continue</Text>
                    )}
                  </TouchableOpacity>
                </View>

                {/* Divider (Frame 644865: "Don't have an account?") */}
                <View style={styles.dividerRow}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>Don’t have an account?</Text>
                  <View style={styles.dividerLine} />
                </View>

                {/* Get Started Button */}
                <TouchableOpacity
                  style={styles.getStartedBtn}
                  activeOpacity={0.85}
                  onPress={() => router.replace('/get-started' as any)}
                >
                  <Text style={styles.getStartedText}>Get started</Text>
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
    paddingBottom: 28,
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 437,
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
  headerGroup: {
    alignItems: 'center',
    gap: 4,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 25,
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
  },
  errorText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#DC5355',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 8,
  },
  formContainer: {
    width: 311,
    maxWidth: '100%',
    marginTop: 20,
    gap: 12,
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
  },
  inputColumn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  fieldLabel: {
    fontSize: 14,
    lineHeight: 22,
    color: '#768498',
    fontWeight: '400',
    letterSpacing: -0.09,
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
  continueBtn: {
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
    marginTop: 12,
  },
  continueBtnDisabled: {
    opacity: 0.5,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  dividerRow: {
    width: 311,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
  },
  dividerText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#868C98',
    letterSpacing: -0.14,
  },
  getStartedBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  getStartedText: {
    color: '#340D73',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
});
