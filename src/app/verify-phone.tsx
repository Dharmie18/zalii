import React, { useState, useRef, useEffect } from 'react';
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
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAuth } from '../contexts/AuthContext';

const ACCEPTED_OTP = '123456';

function formatMaskedPhone(phone?: string): string {
  if (!phone || phone.length < 5) {
    return '+234*************';
  }
  const clean = phone.replace(/\s+/g, '');
  const prefix = clean.slice(0, 4);
  const asterisks = '*'.repeat(13);
  return `${prefix}${asterisks}`;
}

function BackIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_back)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.29303 12.707C8.10556 12.5194 8.00024 12.2651 8.00024 12C8.00024 11.7348 8.10556 11.4805 8.29303 11.293L13.95 5.63598C14.0423 5.54047 14.1526 5.46428 14.2746 5.41188C14.3966 5.35947 14.5279 5.33188 14.6606 5.33073C14.7934 5.32957 14.9251 5.35487 15.048 5.40516C15.1709 5.45544 15.2825 5.52969 15.3764 5.62358C15.4703 5.71747 15.5446 5.82913 15.5949 5.95202C15.6451 6.07492 15.6704 6.2066 15.6693 6.33938C15.6681 6.47216 15.6405 6.60338 15.5881 6.72538C15.5357 6.84739 15.595 6.95773 15.364 7.04998L10.414 12L15.364 16.95C15.5462 17.1386 15.647 17.3912 15.6447 17.6534C15.6424 17.9156 15.5373 18.1664 15.3518 18.3518C15.1664 18.5372 14.9156 18.6424 14.6534 18.6447C14.3912 18.6469 14.1386 18.5461 13.95 18.364L8.29303 12.707Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_back">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CloseIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_close)">
        <Path
          d="M15.889 6.69699C16.0789 6.52154 16.3294 6.42637 16.5879 6.43144C16.8464 6.43651 17.0929 6.54142 17.2758 6.72419C17.4587 6.90696 17.5638 7.15341 17.5691 7.41192C17.5743 7.67043 17.4793 7.92095 17.304 8.11099L13.414 12L17.304 15.89C17.4862 16.0786 17.587 16.3312 17.5847 16.5934C17.5824 16.8556 17.4772 17.1064 17.2918 17.2918C17.1064 17.4772 16.8556 17.5824 16.5934 17.5847C16.3312 17.5869 16.0786 17.4862 15.89 17.304L12 13.414L8.11101 17.304C8.01877 17.3995 7.90842 17.4757 7.78642 17.5281C7.66441 17.5805 7.53319 17.6081 7.40041 17.6092C7.26763 17.6104 7.13595 17.5851 7.01306 17.5348C6.89016 17.4845 6.77851 17.4103 6.68462 17.3164C6.59072 17.2225 6.51647 17.1108 6.46619 16.9879C6.41591 16.8651 6.39061 16.7334 6.39176 16.6006C6.39292 16.4678 6.4205 16.3366 6.47291 16.2146C6.52532 16.0926 6.6015 15.9822 6.69701 15.89L10.586 12L6.69701 8.10999C6.51485 7.92139 6.41406 7.66879 6.41634 7.40659C6.41862 7.1444 6.52379 6.89358 6.70919 6.70818C6.8946 6.52277 7.14541 6.4176 7.40761 6.41532C7.66981 6.41304 7.92241 6.51384 8.11101 6.69599L12 10.586L15.889 6.69699Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_close">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CellPhoneIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_cell)">
        <Path
          d="M8 2H14.49L14.409 2.032L14.03 2.161C13.4377 2.36328 12.9235 2.74574 12.5594 3.25483C12.1953 3.76391 11.9996 4.37412 11.9996 5C11.9996 5.62588 12.1953 6.23609 12.5594 6.74517C12.9235 7.25426 13.4377 7.63672 14.03 7.839L14.409 7.969C14.5534 8.01827 14.6846 8.09994 14.7926 8.20776C14.9006 8.31557 14.9825 8.44666 15.032 8.591L15.161 8.969C15.289 9.34458 15.4902 9.69104 15.753 9.98832C16.0158 10.2856 16.335 10.5278 16.692 10.7009C17.0491 10.874 17.4369 10.9745 17.8331 10.9967C18.2292 11.0188 18.6259 10.9622 19 10.83V19C19 19.7956 18.6839 20.5587 18.1213 21.1213C17.5587 21.6839 16.7956 22 16 22H8C7.20435 22 6.44129 21.6839 5.87868 21.1213C5.31607 20.5587 5 19.7956 5 19V5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2ZM12 16C11.6022 16 11.2206 16.158 10.9393 16.4393C10.658 16.7206 10.5 17.1022 10.5 17.5C10.5 17.8978 10.658 18.2794 10.9393 18.5607C11.2206 18.842 11.6022 19 12 19C12.3978 19 12.7794 18.842 13.0607 18.5607C13.342 18.2794 13.5 17.8978 13.5 17.5C13.5 17.1022 13.342 16.7206 13.0607 16.4393C12.7794 16.158 12.3978 16 12 16ZM18 1C18.1871 1 18.3704 1.05248 18.5292 1.15147C18.6879 1.25046 18.8157 1.392 18.898 1.56L18.946 1.677L19.076 2.055C19.2132 2.45718 19.4343 2.82563 19.7246 3.13594C20.0149 3.44625 20.3678 3.69135 20.76 3.855L20.945 3.925L21.323 4.054C21.5102 4.11786 21.6742 4.2358 21.7944 4.3929C21.9146 4.54999 21.9854 4.7392 21.9981 4.93658C22.0107 5.13396 21.9645 5.33065 21.8654 5.50178C21.7662 5.67291 21.6185 5.8108 21.441 5.898L21.323 5.946L20.945 6.076C20.5428 6.2132 20.1744 6.43428 19.8641 6.72459C19.5537 7.01491 19.3087 7.36783 19.145 7.76L19.075 7.945L18.946 8.323C18.882 8.51014 18.764 8.6741 18.6068 8.79416C18.4497 8.91423 18.2605 8.98499 18.0631 8.99752C17.8657 9.01004 17.6691 8.96376 17.498 8.86452C17.3269 8.76528 17.1891 8.61755 17.102 8.44L17.054 8.323L16.924 7.945C16.7868 7.54282 16.5657 7.17437 16.2754 6.86406C15.9851 6.55375 15.6322 6.30865 15.24 6.145L15.055 6.075L14.677 5.946C14.4898 5.88214 14.3258 5.7642 14.2056 5.6071C14.0854 5.45001 14.0146 5.2608 14.0019 5.06342C13.9893 4.86604 14.0355 4.66935 14.1346 4.49822C14.2338 4.32709 14.3815 4.1892 14.559 4.102L14.677 4.054L15.055 3.924C15.4572 3.7868 15.8256 3.56572 16.1359 3.27541C16.4463 2.98509 16.6913 2.63217 16.855 2.24L16.925 2.055L17.054 1.677C17.1214 1.47959 17.2488 1.30818 17.4184 1.18679C17.5881 1.06539 17.7914 1.00008 18 1Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip_cell">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default function VerifyPhoneScreen() {
  const router = useRouter();
  const { userData } = useAuth();
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const hideTimerRef = useRef<any>(null);

  const [isVerifying, setIsVerifying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [seconds, setSeconds] = useState(58);
  const inputsRef = useRef<(TextInput | null)[]>([]);

  // Pulse animation for loading glow rings
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isVerifying) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      pulseAnim.setValue(1);
    }
  }, [isVerifying]);

  // Countdown timer for resend code
  useEffect(() => {
    if (seconds <= 0) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  const resetPinAndState = () => {
    setPin(['', '', '', '', '', '']);
    setVisibleIndex(null);
    setIsVerifying(false);
    setIsError(false);
    setSeconds(58);
    inputsRef.current[0]?.focus();
  };

  const handlePinChange = (text: string, index: number) => {
    if (isError) setIsError(false);

    const rawChar = text.slice(-1);
    const newPin = [...pin];
    newPin[index] = rawChar;
    setPin(newPin);

    if (rawChar) {
      // Split-second display: show typed digit for 400ms then mask it
      setVisibleIndex(index);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setVisibleIndex(null);
      }, 400);

      // Auto-advance focus
      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    }

    // Trigger verification when all 6 digits entered
    if (newPin.every((digit) => digit !== '')) {
      const enteredCode = newPin.join('');
      setIsVerifying(true);
      setIsError(false);

      setTimeout(() => {
        setIsVerifying(false);
        if (enteredCode === ACCEPTED_OTP) {
          router.replace('/account-setup' as any);
        } else {
          setIsError(true);
        }
      }, 1400);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (isError) setIsError(false);
      if (!pin[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
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
              {/* Sheet Card: 343x361 normally, 343x378 when verifying, 343x416 when error */}
              <View
                style={[
                  styles.sheetCard,
                  isVerifying && styles.sheetCardVerifying,
                  isError && styles.sheetCardError,
                ]}
              >
                {/* Header Navigation Bar (Component 4) */}
                <View style={styles.headerBar}>
                  <TouchableOpacity
                    style={styles.iconCircleBtn}
                    onPress={() => router.replace('/phone-number' as any)}
                  >
                    <BackIcon />
                  </TouchableOpacity>

                  <Text style={styles.headerTitleText}>Verification code</Text>

                  <TouchableOpacity
                    style={styles.iconCircleBtn}
                    onPress={() => router.replace('/welcome' as any)}
                  >
                    <CloseIcon />
                  </TouchableOpacity>
                </View>

                {/* CellPhone Badge Header: Glowing concentric rings when verifying */}
                {isVerifying ? (
                  <View style={styles.glowOuterWrapper}>
                    <Animated.View
                      style={[
                        styles.glowOuterRing,
                        { transform: [{ scale: pulseAnim }] },
                      ]}
                    >
                      <View style={styles.glowMiddleRing}>
                        <View style={styles.glowInnerBadge}>
                          <CellPhoneIcon />
                        </View>
                      </View>
                    </Animated.View>
                  </View>
                ) : (
                  <View style={styles.phoneBadgeCircle}>
                    <CellPhoneIcon />
                  </View>
                )}

                {/* Subtitle / Instruction Text */}
                <Text
                  style={[
                    styles.instructionText,
                    isVerifying && styles.instructionTextVerifying,
                  ]}
                >
                  {isVerifying
                    ? 'Wait a moment while we verify your OTP and get things ready for you...'
                    : `Enter the 6-digit code that was sent to ${formatMaskedPhone(userData.phone)}`}
                </Text>

                {/* 6-Digit PIN Input Group (300x58px) with split-second masking */}
                <View style={styles.pinGroupRow}>
                  {pin.map((digit, idx) => {
                    const isFilled = digit !== '';
                    const displayVal = isFilled
                      ? idx === visibleIndex
                        ? digit
                        : '•'
                      : '';

                    return (
                      <TouchableOpacity
                        key={idx}
                        activeOpacity={0.95}
                        style={[
                          styles.pinBox,
                          isFilled && styles.pinBoxFilled,
                          isVerifying && styles.pinBoxVerifying,
                          isError && styles.pinBoxError,
                        ]}
                        onPress={() => inputsRef.current[idx]?.focus()}
                      >
                        <TextInput
                          ref={(ref) => (inputsRef.current[idx] = ref)}
                          style={[
                            styles.pinInputText,
                            isFilled && styles.pinInputTextFilled,
                            isVerifying && styles.pinInputTextVerifying,
                            isError && styles.pinInputTextError,
                          ]}
                          keyboardType="number-pad"
                          maxLength={1}
                          value={displayVal}
                          onChangeText={(t) => handlePinChange(t, idx)}
                          onKeyPress={(e) => handleKeyPress(e, idx)}
                          autoFocus={idx === 0}
                          editable={!isVerifying}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>

                {/* Bottom Actions depending on state */}
                {isVerifying ? (
                  <TouchableOpacity
                    style={styles.getNewCodeBtn}
                    activeOpacity={0.85}
                    onPress={resetPinAndState}
                  >
                    <Text style={styles.getNewCodeText}>Get a new code</Text>
                  </TouchableOpacity>
                ) : isError ? (
                  <View style={styles.errorSection}>
                    <Text style={styles.errorText}>
                      Incorrect code. Please try again.
                    </Text>
                    <TouchableOpacity
                      style={styles.getNewCodeBtn}
                      activeOpacity={0.85}
                      onPress={resetPinAndState}
                    >
                      <Text style={styles.getNewCodeText}>Get a new code</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    disabled={seconds > 0}
                    onPress={() => setSeconds(58)}
                    style={styles.resendBtn}
                  >
                    <Text style={styles.resendText}>
                      {seconds > 0
                        ? `You can get a new code in ${seconds}s`
                        : 'Resend code'}
                    </Text>
                  </TouchableOpacity>
                )}
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
    height: 361,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  sheetCardVerifying: {
    height: 378,
  },
  sheetCardError: {
    height: 416,
  },
  headerBar: {
    width: 311,
    maxWidth: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconCircleBtn: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  phoneBadgeCircle: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    backgroundColor: '#340D73',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },
  glowOuterWrapper: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
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
  instructionText: {
    width: 246,
    maxWidth: '100%',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.14,
    marginTop: 14,
  },
  instructionTextVerifying: {
    width: 286,
  },
  pinGroupRow: {
    width: 300,
    maxWidth: '100%',
    height: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  pinBox: {
    width: 40,
    height: 58,
    backgroundColor: '#F6F7F9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },
  pinBoxFilled: {
    backgroundColor: '#ECE1FD',
  },
  pinBoxVerifying: {
    backgroundColor: '#FEFEFE',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  pinBoxError: {
    backgroundColor: '#FBF8F8',
    borderWidth: 1,
    borderColor: '#DC5355',
  },
  pinInputText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1F26',
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  pinInputTextFilled: {
    color: '#340D73',
    fontWeight: '700',
  },
  pinInputTextVerifying: {
    color: '#340D73',
    fontSize: 16,
    fontWeight: '600',
  },
  pinInputTextError: {
    color: '#DC5355',
    fontWeight: '600',
  },
  errorSection: {
    alignItems: 'center',
    marginTop: 18,
    width: '100%',
  },
  errorText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#DC5355',
    textAlign: 'center',
    letterSpacing: -0.14,
    marginBottom: 16,
  },
  getNewCodeBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 9999,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },
  getNewCodeText: {
    color: '#340D73',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  resendBtn: {
    marginTop: 18,
  },
  resendText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    textAlign: 'center',
    letterSpacing: -0.14,
  },
});
