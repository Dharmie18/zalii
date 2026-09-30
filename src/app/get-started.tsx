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

function MailIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M1.72333 4.56831L9.11917 11.965C9.33796 12.1839 9.6302 12.3139 9.93932 12.3298C10.2484 12.3456 10.5525 12.2462 10.7925 12.0508L10.8875 11.965L18.2783 4.57331C18.3025 4.66498 18.3183 4.75831 18.3267 4.85415L18.3333 4.99998V15C18.3335 15.4205 18.1747 15.8255 17.8888 16.1338C17.6028 16.4421 17.211 16.6309 16.7917 16.6625L16.6667 16.6666H3.33333C2.91285 16.6668 2.50786 16.508 2.19954 16.2221C1.89123 15.9362 1.70237 15.5443 1.67083 15.125L1.66667 15V4.99998C1.66667 4.89998 1.675 4.80331 1.69167 4.70831L1.72333 4.56831ZM16.6667 3.33331C16.7675 3.33331 16.8667 3.34165 16.9625 3.35915L17.1042 3.39165L10.0042 10.4916L2.90167 3.38998C2.99333 3.36498 3.08833 3.34831 3.185 3.33998L3.33333 3.33331H16.6667Z"
        fill="#09244B"
      />
    </Svg>
  );
}

function GoogleIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_google)">
        <Path
          d="M19.7617 10.1871C19.7617 9.36773 19.6952 8.7698 19.5513 8.14972H10.1947V11.848H15.6868C15.5761 12.7671 14.9782 14.1512 13.6494 15.0813L13.6308 15.2051L16.5892 17.497L16.7941 17.5174C18.6765 15.779 19.7617 13.2211 19.7617 10.1871Z"
          fill="#4285F4"
        />
        <Path
          d="M10.1947 19.9313C12.8854 19.9313 15.1442 19.0454 16.7941 17.5174L13.6494 15.0813C12.8079 15.6682 11.6784 16.0779 10.1947 16.0779C7.55932 16.0779 5.3226 14.3395 4.52527 11.9366L4.4084 11.9466L1.33222 14.3273L1.29199 14.4391C2.93077 17.6945 6.29695 19.9313 10.1947 19.9313Z"
          fill="#34A853"
        />
        <Path
          d="M4.52526 11.9366C4.31488 11.3166 4.19313 10.6521 4.19313 9.96565C4.19313 9.27908 4.31488 8.61473 4.51419 7.99466L4.50862 7.8626L1.39389 5.44366L1.29198 5.49214C0.616561 6.84305 0.229004 8.36008 0.229004 9.96565C0.229004 11.5712 0.616561 13.0882 1.29198 14.4391L4.52526 11.9366Z"
          fill="#FBBC05"
        />
        <Path
          d="M10.1947 3.85336C12.066 3.85336 13.3283 4.66168 14.048 5.33718L16.8605 2.59107C15.1332 0.985496 12.8854 0 10.1947 0C6.29695 0 2.93077 2.23672 1.29199 5.49214L4.51421 7.99466C5.3226 5.59183 7.55932 3.85336 10.1947 3.85336Z"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_google">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default function GetStartedScreen() {
  const router = useRouter();
  const { userData, updateUserData } = useAuth();
  const [email, setEmail] = useState(userData.email || '');
  const inputRef = useRef<TextInput>(null);

  // Email validation: user MUST enter a valid email address before Continue becomes enabled!
  const isValidEmail =
    email.trim().length > 3 &&
    email.includes('@') &&
    email.includes('.') &&
    email.indexOf('@') < email.lastIndexOf('.');

  const handleContinue = () => {
    if (!isValidEmail) return;
    updateUserData({ email: email.trim() });
    router.replace('/personal-info' as any);
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
              {/* White Card Sheet (Frame 1000002829: 343x373, radius 32) */}
              <View style={styles.sheetCard}>
                {/* Header Text (Frame 1000002892) */}
                <View style={styles.headerGroup}>
                  <Text style={styles.titleText}>Get started with Rzali</Text>
                  <Text style={styles.subtitleText}>
                    Enter your email to get started with us
                  </Text>
                </View>

                {/* Input Box (Frame 9608: 311x68, border 0.5px #340D73) */}
                <TouchableOpacity
                  style={styles.inputBox}
                  activeOpacity={0.95}
                  onPress={() => inputRef.current?.focus()}
                >
                  <MailIcon />
                  <View style={styles.inputColumn}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput
                      ref={inputRef}
                      style={styles.textInput}
                      placeholder="youremail@gmail.com"
                      placeholderTextColor="#9CA3AF"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      value={email}
                      onChangeText={setEmail}
                      editable={true}
                    />
                  </View>
                </TouchableOpacity>

                {/* Action Buttons Column */}
                <View style={styles.actionsColumn}>
                  {/* Continue Button: DISABLED until user enters a valid email */}
                  <TouchableOpacity
                    style={[styles.continueBtn, !isValidEmail && styles.btnDisabled]}
                    activeOpacity={0.85}
                    disabled={!isValidEmail}
                    onPress={handleContinue}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>

                  {/* Divider (Frame 644865) */}
                  <View style={styles.dividerRow}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or get started with</Text>
                    <View style={styles.dividerLine} />
                  </View>

                  {/* Google Sign In Button */}
                  <TouchableOpacity
                    style={styles.googleBtn}
                    activeOpacity={0.85}
                    onPress={() => {
                      updateUserData({ email: 'user@gmail.com' });
                      router.replace('/personal-info' as any);
                    }}
                  >
                    <GoogleIcon />
                    <Text style={styles.googleText}>Google</Text>
                  </TouchableOpacity>
                </View>

                {/* Terms Footer */}
                <Text style={styles.termsText}>
                  By continuing, you agree to Rzali's Terms & Privacy Policy
                </Text>
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
    paddingBottom: 32,
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 20,
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
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '500',
    color: '#0B1C56',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
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
    marginBottom: 16,
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
  actionsColumn: {
    width: 311,
    maxWidth: '100%',
    alignItems: 'center',
    gap: 12,
  },
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
  },
  btnDisabled: {
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
    gap: 12,
    marginVertical: 4,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E1E4EA',
  },
  dividerText: {
    fontSize: 13,
    color: '#868C98',
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  googleBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  googleText: {
    color: '#340D73',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  termsText: {
    fontSize: 11,
    color: '#858DAA',
    textAlign: 'center',
    marginTop: 16,
    letterSpacing: -0.09,
  },
});
