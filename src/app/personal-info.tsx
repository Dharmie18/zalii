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
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { countries, Country } from '../lib/countries';
import { useAuth } from '../contexts/AuthContext';

function CalendarIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip_cal)">
        <Path
          d="M14 5.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333H14ZM5.66667 10H5C4.83008 10.0002 4.66665 10.0653 4.54309 10.1819C4.41953 10.2985 4.34518 10.458 4.33522 10.6276C4.32526 10.7972 4.38045 10.9643 4.48951 11.0946C4.59857 11.2249 4.75327 11.3086 4.922 11.3287L5 11.3333H5.66667C5.83659 11.3331 6.00002 11.2681 6.12358 11.1514C6.24714 11.0348 6.32149 10.8754 6.33145 10.7057C6.34141 10.5361 6.28622 10.3691 6.17716 10.2388C6.0681 10.1085 5.9134 10.0247 5.74467 10.0047L5.66667 10ZM8.33333 10H7.66667C7.48986 10 7.32029 10.0702 7.19526 10.1953C7.07024 10.3203 7 10.4899 7 10.6667C7 10.8435 7.07024 11.013 7.19526 11.1381C7.32029 11.2631 7.48986 11.3333 7.66667 11.3333H8.33333C8.51014 11.3333 8.67971 11.2631 8.80474 11.1381C8.92976 11.013 9 10.8435 9 10.6667C9 10.4899 8.92976 10.3203 8.80474 10.1953C8.67971 10.0702 8.51014 10 8.33333 10ZM5.66667 7.33333H5C4.82319 7.33333 4.65362 7.40357 4.5286 7.5286C4.40357 7.65362 4.33333 7.82319 4.33333 8C4.33333 8.17681 4.40357 8.34638 4.5286 8.4714C4.65362 8.59643 4.82319 8.66667 5 8.66667H5.66667C5.84348 8.66667 6.01305 8.59643 6.13807 8.4714C6.2631 8.34638 6.33333 8.17681 6.33333 8C6.33333 7.82319 6.2631 7.65362 6.13807 7.5286C6.01305 7.40357 5.84348 7.33333 5.66667 7.33333ZM8.33333 7.33333H7.66667C7.49675 7.33352 7.33331 7.39859 7.20975 7.51523C7.0862 7.63188 7.01184 7.7913 7.00189 7.96093C6.99193 8.13056 7.04712 8.29759 7.15618 8.42789C7.26524 8.55819 7.41994 8.64193 7.58867 8.662L7.66667 8.66667H8.33333C8.50325 8.66648 8.66669 8.60141 8.79025 8.48477C8.9138 8.36812 8.98816 8.2087 8.99812 8.03907C9.00807 7.86944 8.95288 7.70241 8.84382 7.57211C8.73476 7.44181 8.58006 7.35807 8.41133 7.338L8.33333 7.33333ZM11 7.33333H10.3333C10.1565 7.33333 9.98695 7.40357 9.86193 7.5286C9.73691 7.65362 9.66667 7.82319 9.66667 8C9.66667 8.17681 9.73691 8.34638 9.86193 8.4714C9.98695 8.59643 10.1565 8.66667 10.3333 8.66667H11C11.1768 8.66667 11.3464 8.59643 11.4714 8.4714C11.5964 8.34638 11.6667 8.17681 11.6667 8C11.6667 7.82319 11.5964 7.65362 11.4714 7.5286C11.3464 7.40357 11.1768 7.33333 11 7.33333ZM12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V4H2V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667Z"
          fill="#768498"
        />
      </G>
      <Defs>
        <ClipPath id="clip_cal">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function DropdownIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip_drop)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.47136 10.4714C8.34634 10.5963 8.1768 10.6665 8.00003 10.6665C7.82325 10.6665 7.65371 10.5963 7.52869 10.4714L3.75736 6.70003C3.69369 6.63853 3.6429 6.56496 3.60796 6.48363C3.57302 6.40229 3.55463 6.31481 3.55386 6.22629C3.55309 6.13777 3.56996 6.04999 3.60348 5.96806C3.637 5.88613 3.6865 5.81169 3.7491 5.7491C3.81169 5.6865 3.88612 5.637 3.96806 5.60348C4.04999 5.56996 4.13777 5.55309 4.22629 5.55386C4.31481 5.55463 4.40229 5.57302 4.48363 5.60796C4.56496 5.6429 4.63853 5.69368 4.70003 5.75736L8.00003 9.05736L11.3 5.75736C11.4258 5.63592 11.5942 5.56872 11.769 5.57024C11.9438 5.57176 12.111 5.64187 12.2346 5.76548C12.3582 5.88908 12.4283 6.05629 12.4298 6.23109C12.4313 6.40589 12.3641 6.57429 12.2427 6.70003L8.47136 10.4714Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_drop">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { userData, updateUserData } = useAuth();
  const [firstName, setFirstName] = useState(userData.firstName || '');
  const [lastName, setLastName] = useState(userData.lastName || '');
  const [dob, setDob] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [countryPickerOpen, setCountryPickerOpen] = useState(false);

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const dobRef = useRef<TextInput>(null);
  const hiddenDateInputRef = useRef<HTMLInputElement | null>(null);

  // DOB auto-formatting & capping handler (DD/MM/YYYY)
  const handleDobChange = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    let formatted = '';

    if (cleaned.length > 0) {
      let day = cleaned.slice(0, 2);
      if (day.length === 2) {
        const dayNum = parseInt(day, 10);
        if (dayNum > 31) day = '31';
        if (dayNum === 0) day = '01';
      }
      formatted += day;

      if (cleaned.length >= 3) {
        let month = cleaned.slice(2, 4);
        if (month.length === 2) {
          const monthNum = parseInt(month, 10);
          if (monthNum > 12) month = '12';
          if (monthNum === 0) month = '01';
        }
        formatted += '/' + month;
      }

      if (cleaned.length >= 5) {
        let year = cleaned.slice(4, 8);
        formatted += '/' + year;
      }
    }
    setDob(formatted);
  };

  // Helper to validate complete date
  const isDobValid = (dobStr: string): boolean => {
    if (dobStr.length !== 10) return false;
    const parts = dobStr.split('/');
    if (parts.length !== 3) return false;
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
    if (day < 1 || day > 31) return false;
    if (month < 1 || month > 12) return false;
    if (year < 1920 || year > 2026) return false;

    // Check exact max days for month/year
    const daysInMonth = new Date(year, month, 0).getDate();
    return day <= daysInMonth;
  };

  // Trigger Native Calendar Date Picker
  const handleOpenDatePicker = () => {
    if (Platform.OS === 'web' && hiddenDateInputRef.current) {
      try {
        if ('showPicker' in hiddenDateInputRef.current) {
          (hiddenDateInputRef.current as any).showPicker();
        } else {
          hiddenDateInputRef.current.click();
        }
      } catch (err) {
        hiddenDateInputRef.current.click();
      }
    } else {
      dobRef.current?.focus();
    }
  };

  // Handle native HTML date picker change (YYYY-MM-DD -> DD/MM/YYYY)
  const handleNativeDatePicked = (e: any) => {
    const val = e.target.value; // "YYYY-MM-DD"
    if (val && val.includes('-')) {
      const [yyyy, mm, dd] = val.split('-');
      setDob(`${dd}/${mm}/${yyyy}`);
    }
  };

  const dobIsValid = isDobValid(dob);
  const dobIsInvalid = dob.length === 10 && !dobIsValid;

  // User MUST enter First Name, Last Name, and a VALID DOB before Continue is enabled!
  const isValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    dobIsValid;

  const handleContinue = () => {
    if (!isValid) return;
    updateUserData({ firstName: firstName.trim(), lastName: lastName.trim() });
    router.replace('/verify-email' as any);
  };

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#3D019D" />

      {/* Hidden native HTML date picker for web calendar selector */}
      {Platform.OS === 'web' && (
        <input
          type="date"
          ref={hiddenDateInputRef as any}
          style={{ display: 'none', position: 'absolute', opacity: 0 }}
          onChange={handleNativeDatePicked}
          min="1920-01-01"
          max="2026-12-31"
        />
      )}

      <View style={styles.outerCenterWrapper}>
        <View style={styles.mobileFrame}>
          <View style={styles.scrimOverlay}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.avoidingView}
            >
              {/* White Sheet Card (Frame 1000002829: 343x528, radius 32) */}
              <View style={styles.sheetCard}>
                {/* Header Text (Frame 1000002892) */}
                <View style={styles.headerGroup}>
                  <Text style={styles.titleText}>Your personal info</Text>
                  <Text style={styles.subtitleText}>
                    Let us get to know you a little bit better
                  </Text>
                </View>

                {/* Form Fields Container */}
                <ScrollView
                  style={styles.fieldsScroll}
                  contentContainerStyle={styles.fieldsContainer}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Legal First Name */}
                  <TouchableOpacity
                    style={styles.fieldBox}
                    activeOpacity={0.95}
                    onPress={() => firstNameRef.current?.focus()}
                  >
                    <View style={styles.inputColumn}>
                      <Text style={styles.fieldLabel}>Legal first name</Text>
                      <TextInput
                        ref={firstNameRef}
                        style={styles.textInput}
                        placeholder="e.g. Jonathan"
                        placeholderTextColor="#9CA3AF"
                        value={firstName}
                        onChangeText={setFirstName}
                        editable={true}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* Legal Last Name */}
                  <TouchableOpacity
                    style={styles.fieldBox}
                    activeOpacity={0.95}
                    onPress={() => lastNameRef.current?.focus()}
                  >
                    <View style={styles.inputColumn}>
                      <Text style={styles.fieldLabel}>Legal last name</Text>
                      <TextInput
                        ref={lastNameRef}
                        style={styles.textInput}
                        placeholder="e.g. Doe"
                        placeholderTextColor="#9CA3AF"
                        value={lastName}
                        onChangeText={setLastName}
                        editable={true}
                      />
                    </View>
                  </TouchableOpacity>

                  {/* Date of Birth */}
                  <View style={[styles.fieldBoxRow, dobIsInvalid && styles.fieldBoxError]}>
                    <View style={styles.inputColumn}>
                      <Text style={[styles.fieldLabel, dobIsInvalid && styles.labelError]}>
                        {dobIsInvalid ? 'Date of birth (Invalid Date)' : 'Date of birth'}
                      </Text>
                      <TextInput
                        ref={dobRef}
                        style={[styles.textInput, dobIsInvalid && styles.textError]}
                        placeholder="DD/MM/YYYY"
                        placeholderTextColor="#9CA3AF"
                        keyboardType="number-pad"
                        maxLength={10}
                        value={dob}
                        onChangeText={handleDobChange}
                        editable={true}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={handleOpenDatePicker}
                      activeOpacity={0.7}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <CalendarIcon />
                    </TouchableOpacity>
                  </View>

                  {/* Nationality Selector */}
                  <TouchableOpacity
                    style={styles.fieldBoxRow}
                    activeOpacity={0.85}
                    onPress={() => setCountryPickerOpen(true)}
                  >
                    <View style={styles.inputColumn}>
                      <Text style={styles.fieldLabel}>Nationality</Text>
                      <View style={styles.countryRowValue}>
                        <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
                        <Text style={styles.countryValueText}>
                          {selectedCountry.name}
                        </Text>
                      </View>
                    </View>
                    <DropdownIcon />
                  </TouchableOpacity>

                  {/* Continue Button: DISABLED until user fills out details */}
                  <TouchableOpacity
                    style={[styles.continueBtn, !isValid && styles.btnDisabled]}
                    activeOpacity={0.85}
                    disabled={!isValid}
                    onPress={handleContinue}
                  >
                    <Text style={styles.continueText}>Continue</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>

        {/* Nationality Modal Picker */}
        <Modal
          visible={countryPickerOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setCountryPickerOpen(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Country</Text>
                <TouchableOpacity
                  onPress={() => setCountryPickerOpen(false)}
                  style={styles.modalCloseBtn}
                >
                  <Text style={styles.modalCloseText}>✕</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={countries}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      setSelectedCountry(item);
                      setCountryPickerOpen(false);
                    }}
                  >
                    <Text style={styles.countryItemFlag}>{item.flag}</Text>
                    <Text style={styles.countryItemName}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>
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
    paddingBottom: 20,
  },
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 528,
    maxHeight: '90%',
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
    marginBottom: 16,
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
  fieldsScroll: {
    width: '100%',
  },
  fieldsContainer: {
    gap: 12,
    paddingBottom: 10,
  },
  fieldBox: {
    width: 311,
    maxWidth: '100%',
    height: 60,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  fieldBoxRow: {
    width: 311,
    maxWidth: '100%',
    height: 60,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  fieldBoxError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  labelError: {
    color: '#DC2626',
  },
  textError: {
    color: '#B91C1C',
  },
  inputColumn: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  fieldLabel: {
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
  countryRowValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 2,
  },
  flagEmoji: {
    fontSize: 16,
  },
  countryValueText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#091748',
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
    marginTop: 8,
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '60%',
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B1C56',
  },
  modalCloseBtn: {
    padding: 4,
  },
  modalCloseText: {
    fontSize: 18,
    color: '#768498',
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E1E4EA',
    gap: 12,
  },
  countryItemFlag: {
    fontSize: 20,
  },
  countryItemName: {
    fontSize: 15,
    color: '#091748',
    fontWeight: '500',
  },
});
