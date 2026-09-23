import React, { useState } from 'react';
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
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAuth } from '../contexts/AuthContext';
import { countries, Country } from '../lib/countries';

function DownLineIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip_down)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.47136 10.4714C8.34634 10.5963 8.1768 10.6665 8.00003 10.6665C7.82325 10.6665 7.65371 10.5963 7.52869 10.4714L3.75736 6.70003C3.69369 6.63853 3.6429 6.56496 3.60796 6.48363C3.57302 6.40229 3.55463 6.31481 3.55386 6.22629C3.55309 6.13777 3.56996 6.04999 3.60348 5.96806C3.637 5.88613 3.6865 5.81169 3.7491 5.7491C3.81169 5.6865 3.88612 5.637 3.96806 5.60348C4.04999 5.56996 4.13777 5.55309 4.22629 5.55386C4.31481 5.55463 4.40229 5.57302 4.48363 5.60796C4.56496 5.6429 4.63853 5.69368 4.70003 5.75736L8.00003 9.05736L11.3 5.75736C11.4258 5.63592 11.5942 5.56872 11.769 5.57024C11.9438 5.57176 12.111 5.64187 12.2346 5.76548C12.3582 5.88908 12.4283 6.05629 12.4298 6.23109C12.4313 6.40589 12.3641 6.57429 12.2427 6.70003L8.47136 10.4714Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_down">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
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

function RightChevronIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M6 12L10 8L6 4"
        stroke="#C2C4C7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function PhoneNumberScreen() {
  const router = useRouter();
  const { userData, updateUserData } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState(userData.phone || '');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isValid = phoneNumber.trim().length >= 7;

  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.code.includes(searchQuery) ||
      c.nationality.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    if (!isValid) return;
    updateUserData({ phone: `${selectedCountry.code} ${phoneNumber.trim()}` });
    router.replace('/verify-phone' as any);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerCenterWrapper}>
          <View style={styles.mobileFrame}>
            <View style={styles.scrimOverlay}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.avoidingView}
              >
                {/* Sheet Card: 343x287, radius 32, bottom 23 */}
                <View style={styles.sheetCard}>
                  {/* Header Bar with Back and Close navigation */}
                  <View style={styles.headerBar}>
                    <TouchableOpacity
                      style={styles.iconCircleBtn}
                      onPress={() => router.replace('/create-password' as any)}
                    >
                      <BackIcon />
                    </TouchableOpacity>

                    <Text style={styles.titleText}>Enter your phone number</Text>

                    <TouchableOpacity
                      style={styles.iconCircleBtn}
                      onPress={() => router.replace('/welcome' as any)}
                    >
                      <CloseIcon />
                    </TouchableOpacity>
                  </View>

                  {/* Subtitle */}
                  <Text style={styles.subtitleText}>
                    Secure your account with your phone number. We will send you an OTP to verify it.
                  </Text>

                  {/* Input Group (Frame 2147230047: 311x52px) */}
                  <View style={styles.inputGroupRow}>
                    {/* Country Code Picker Button (Frame 2085653592: 114x52px) */}
                    <TouchableOpacity
                      style={styles.countryPickerBtn}
                      activeOpacity={0.8}
                      onPress={() => setPickerOpen(true)}
                    >
                      <Text style={styles.flagText}>{selectedCountry.flag}</Text>
                      <Text style={styles.dialCodeText}>{selectedCountry.code}</Text>
                      <DownLineIcon />
                    </TouchableOpacity>

                    {/* Phone Number Input Box (Frame 2085653593: 189x52px) */}
                    <View style={styles.phoneInputBox}>
                      <TextInput
                        style={styles.phoneTextInput}
                        placeholder="77708923453"
                        placeholderTextColor="#A1ABBF"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                      />
                    </View>
                  </View>

                  {/* Continue Button */}
                  <TouchableOpacity
                    style={[styles.continueBtn, !isValid && styles.continueBtnDisabled]}
                    activeOpacity={0.85}
                    disabled={!isValid}
                    onPress={handleContinue}
                  >
                    <Text style={styles.continueBtnText}>Continue</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>

              {/* Exact Figma Country Code Selector Modal (343x490, bottom 19, radius 32) */}
              <Modal visible={pickerOpen} transparent animationType="slide">
                <SafeAreaView style={styles.modalOverlay}>
                  <View style={styles.modalSheetCard}>
                    {/* Header Bar */}
                    <View style={styles.modalHeaderBar}>
                      <View style={{ width: 35 }} />
                      <Text style={styles.modalTitleText}>Select country</Text>
                      <TouchableOpacity
                        style={styles.iconCircleBtn}
                        onPress={() => setPickerOpen(false)}
                      >
                        <CloseIcon />
                      </TouchableOpacity>
                    </View>

                    {/* Search Bar Input (Frame 2147230051: 295x50) */}
                    <View style={styles.searchBarBox}>
                      <TextInput
                        style={styles.searchInputText}
                        placeholder="Search"
                        placeholderTextColor="#768498"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                      />
                    </View>

                    {/* Country List (Frame 2147230041: 343x343) */}
                    <FlatList
                      data={filteredCountries}
                      keyExtractor={(item) => item.name}
                      style={styles.countryFlatList}
                      contentContainerStyle={styles.countryListContainer}
                      showsVerticalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          style={styles.countryItemRow}
                          activeOpacity={0.7}
                          onPress={() => {
                            setSelectedCountry(item);
                            setPickerOpen(false);
                          }}
                        >
                          <View style={styles.countryRowLeft}>
                            <Text style={styles.itemFlagText}>{item.flag}</Text>
                            <Text style={styles.itemCountryLabel}>
                              {item.name} ({item.code})
                            </Text>
                          </View>
                          <RightChevronIcon />
                        </TouchableOpacity>
                      )}
                    />
                  </View>
                </SafeAreaView>
              </Modal>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    paddingBottom: 23,
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 287,
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
    marginTop: 16,
    width: 291,
    maxWidth: '100%',
  },
  inputGroupRow: {
    width: 311,
    maxWidth: '100%',
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
  },
  countryPickerBtn: {
    width: 114,
    height: 52,
    borderWidth: 0.5,
    borderColor: '#E6E7EB',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 8,
  },
  flagText: {
    fontSize: 20,
  },
  dialCodeText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#1D1F26',
    letterSpacing: -0.09,
  },
  phoneInputBox: {
    flex: 1,
    height: 52,
    borderWidth: 0.5,
    borderColor: '#E6E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  phoneTextInput: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#1D1F26',
    letterSpacing: -0.09,
    paddingVertical: 0,
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
    marginTop: 20,
  },
  continueBtnDisabled: {
    opacity: 0.5,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(39, 45, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalSheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 490,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 19,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 19,
  },
  modalHeaderBar: {
    width: 295,
    maxWidth: '100%',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitleText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#340D73',
    textAlign: 'center',
  },
  searchBarBox: {
    width: 295,
    maxWidth: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#D7D9DF',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginTop: 16,
  },
  searchInputText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#1D1F26',
    letterSpacing: -0.09,
  },
  countryFlatList: {
    width: 295,
    maxWidth: '100%',
    marginTop: 16,
  },
  countryListContainer: {
    paddingBottom: 16,
  },
  countryItemRow: {
    width: 295,
    maxWidth: '100%',
    height: 56,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E6E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  countryRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemFlagText: {
    fontSize: 22,
  },
  itemCountryLabel: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#3B4454',
    letterSpacing: 0.01,
  },
});
