import React, { useState, useRef, useMemo } from 'react';
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

function BackIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_back_pi)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.293 12.7069C8.10553 12.5193 8.00021 12.265 8.00021 11.9999C8.00021 11.7347 8.10553 11.4804 8.293 11.2929L13.95 5.63585C14.0422 5.54034 14.1526 5.46416 14.2746 5.41175C14.3966 5.35934 14.5278 5.33176 14.6606 5.3306C14.7934 5.32945 14.9251 5.35475 15.048 5.40503C15.1708 5.45531 15.2825 5.52957 15.3764 5.62346C15.4703 5.71735 15.5445 5.829 15.5948 5.9519C15.6451 6.0748 15.6704 6.20648 15.6693 6.33926C15.6681 6.47204 15.6405 6.60325 15.5881 6.72526C15.5357 6.84726 15.4595 6.95761 15.364 7.04985L10.414 11.9999L15.364 16.9499C15.5462 17.1385 15.647 17.3911 15.6447 17.6533C15.6424 17.9155 15.5372 18.1663 15.3518 18.3517C15.1664 18.5371 14.9156 18.6423 14.6534 18.6445C14.3912 18.6468 14.1386 18.546 13.95 18.3639L8.293 12.7069Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_back_pi">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CloseIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_close_pi)">
        <Path
          d="M15.889 6.69724C16.0789 6.52178 16.3294 6.42662 16.5879 6.43169C16.8464 6.43676 17.0929 6.54166 17.2758 6.72443C17.4587 6.9072 17.5638 7.15365 17.5691 7.41216C17.5743 7.67068 17.4793 7.92119 17.304 8.11124L13.414 12.0002L17.304 15.8902C17.4862 16.0788 17.587 16.3314 17.5847 16.5936C17.5824 16.8558 17.4772 17.1066 17.2918 17.2921C17.1064 17.4775 16.8556 17.5826 16.5934 17.5849C16.3312 17.5872 16.0786 17.4864 15.89 17.3042L12 13.4142L8.11101 17.3042C8.01877 17.3998 7.90842 17.4759 7.78642 17.5283C7.66441 17.5807 7.53319 17.6083 7.40041 17.6095C7.26763 17.6106 7.13595 17.5853 7.01306 17.5351C6.89016 17.4848 6.77851 17.4105 6.68462 17.3166C6.59072 17.2227 6.51647 17.1111 6.46619 16.9882C6.41591 16.8653 6.39061 16.7336 6.39176 16.6008C6.39292 16.4681 6.4205 16.3368 6.47291 16.2148C6.52532 16.0928 6.6015 15.9825 6.69701 15.8902L10.586 12.0002L6.69701 8.11024C6.51485 7.92164 6.41406 7.66903 6.41634 7.40684C6.41862 7.14464 6.52379 6.89383 6.70919 6.70842C6.8946 6.52301 7.14541 6.41784 7.40761 6.41557C7.66981 6.41329 7.92241 6.51408 8.11101 6.69624L12 10.5862L15.889 6.69724Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_close_pi">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function CalendarMonthFillIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip_cal_pi)">
        <Path
          d="M14 5.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333H14ZM5.66667 10H5C4.83008 10.0002 4.66665 10.0653 4.54309 10.1819C4.41953 10.2985 4.34518 10.458 4.33522 10.6276C4.32526 10.7972 4.38045 10.9643 4.48951 11.0946C4.59857 11.2249 4.75327 11.3086 4.922 11.3287L5 11.3333H5.66667C5.83659 11.3331 6.00002 11.2681 6.12358 11.1514C6.24714 11.0348 6.32149 10.8754 6.33145 10.7057C6.34141 10.5361 6.28622 10.3691 6.17716 10.2388C6.0681 10.1085 5.9134 10.0247 5.74467 10.0047L5.66667 10ZM8.33333 10H7.66667C7.48986 10 7.32029 10.0702 7.19526 10.1953C7.07024 10.3203 7 10.4899 7 10.6667C7 10.8435 7.07024 11.013 7.19526 11.1381C7.32029 11.2631 7.48986 11.3333 7.66667 11.3333H8.33333C8.51014 11.3333 8.67971 11.2631 8.80474 11.1381C8.92976 11.013 9 10.8435 9 10.6667C9 10.4899 8.92976 10.3203 8.80474 10.1953C8.67971 10.0702 8.51014 10 8.33333 10ZM5.66667 7.33333H5C4.82319 7.33333 4.65362 7.40357 4.5286 7.5286C4.40357 7.65362 4.33333 7.82319 4.33333 8C4.33333 8.17681 4.40357 8.34638 4.5286 8.4714C4.65362 8.59643 4.82319 8.66667 5 8.66667H5.66667C5.84348 8.66667 6.01305 8.59643 6.13807 8.4714C6.2631 8.34638 6.33333 8.17681 6.33333 8C6.33333 7.82319 6.2631 7.65362 6.13807 7.5286C6.01305 7.40357 5.84348 7.33333 5.66667 7.33333ZM8.33333 7.33333H7.66667C7.49675 7.33352 7.33331 7.39859 7.20975 7.51523C7.0862 7.63188 7.01184 7.7913 7.00189 7.96093C6.99193 8.13056 7.04712 8.29759 7.15618 8.42789C7.26524 8.55819 7.41994 8.64193 7.58867 8.662L7.66667 8.66667H8.33333C8.50325 8.66648 8.66669 8.60141 8.79025 8.48477C8.9138 8.36812 8.98816 8.2087 8.99812 8.03907C9.00807 7.86944 8.95288 7.70241 8.84382 7.57211C8.73476 7.44181 8.58006 7.35807 8.41133 7.338L8.33333 7.33333ZM11 7.33333H10.3333C10.1565 7.33333 9.98695 7.40357 9.86193 7.5286C9.73691 7.65362 9.66667 7.82319 9.66667 8C9.66667 8.17681 9.73691 8.34638 9.86193 8.4714C9.98695 8.59643 10.1565 8.66667 10.3333 8.66667H11C11.1768 8.66667 11.3464 8.59643 11.4714 8.4714C11.5964 8.34638 11.6667 8.17681 11.6667 8C11.6667 7.82319 11.5964 7.65362 11.4714 7.5286C11.3464 7.40357 11.1768 7.33333 11 7.33333ZM12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V4H2V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667Z"
          fill="#768498"
        />
      </G>
      <Defs>
        <ClipPath id="clip_cal_pi">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function DownLineIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip_down_pi)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.47136 10.4714C8.34634 10.5963 8.1768 10.6665 8.00003 10.6665C7.82325 10.6665 7.65371 10.5963 7.52869 10.4714L3.75736 6.70003C3.69369 6.63853 3.6429 6.56496 3.60796 6.48363C3.57302 6.40229 3.55463 6.31481 3.55386 6.22629C3.55309 6.13777 3.56996 6.04999 3.60348 5.96806C3.637 5.88613 3.6865 5.81169 3.7491 5.7491C3.81169 5.6865 3.88612 5.637 3.96806 5.60348C4.04999 5.56996 4.13777 5.55309 4.22629 5.55386C4.31481 5.55463 4.40229 5.57302 4.48363 5.60796C4.56496 5.6429 4.63853 5.69368 4.70003 5.75736L8.00003 9.05736L11.3 5.75736C11.4258 5.63592 11.5942 5.56872 11.769 5.57024C11.9438 5.57176 12.111 5.64187 12.2346 5.76548C12.3582 5.88908 12.4283 6.05629 12.4298 6.23109C12.4313 6.40589 12.3641 6.57429 12.2427 6.70003L8.47136 10.4714Z"
          fill="#340D73"
        />
      </G>
      <Defs>
        <ClipPath id="clip_down_pi">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function ChevronLeftIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <Path
        d="M10 12L6 8L10 4"
        stroke="#333333"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ChevronRightIcon() {
  return (
    <Svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <Path
        d="M6 4L10 8L6 12"
        stroke="#333333"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ChevronDownSmall() {
  return (
    <Svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <Path
        d="M4 6L8 10L12 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const WEEK_DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

interface CustomCalendarProps {
  selectedDob: string;
  onSelectDate: (formatted: string) => void;
  onClose: () => void;
}

function CustomCalendarWidget({ selectedDob, onSelectDate, onClose }: CustomCalendarProps) {
  const initialDate = useMemo(() => {
    if (selectedDob && selectedDob.length === 10) {
      const parts = selectedDob.split('/');
      if (parts.length === 3) {
        const d = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        const y = parseInt(parts[2], 10);
        if (!isNaN(d) && !isNaN(m) && !isNaN(y)) {
          return { day: d, month: m, year: y };
        }
      }
    }
    return { day: 10, month: 11, year: 2023 };
  }, [selectedDob]);

  const [viewYear, setViewYear] = useState<number>(initialDate.year);
  const [viewMonth, setViewMonth] = useState<number>(initialDate.month);
  const [showYearPicker, setShowYearPicker] = useState<boolean>(false);

  const yearsList = useMemo(() => {
    const list: number[] = [];
    for (let y = 2026; y >= 1950; y--) {
      list.push(y);
    }
    return list;
  }, []);

  const calendarWeeks = useMemo(() => {
    const firstDayRaw = new Date(viewYear, viewMonth, 1).getDay();
    const firstDayIndex = (firstDayRaw + 6) % 7;
    const totalDaysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const items: (number | null)[] = [];
    for (let i = 0; i < firstDayIndex; i++) {
      items.push(null);
    }
    for (let d = 1; d <= totalDaysInMonth; d++) {
      items.push(d);
    }
    while (items.length % 7 !== 0) {
      items.push(null);
    }

    const weeks: (number | null)[][] = [];
    for (let i = 0; i < items.length; i += 7) {
      weeks.push(items.slice(i, i + 7));
    }
    return weeks;
  }, [viewYear, viewMonth]);

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleDayPress = (dayNum: number) => {
    const dd = String(dayNum).padStart(2, '0');
    const mm = String(viewMonth + 1).padStart(2, '0');
    const formatted = `${dd}/${mm}/${viewYear}`;
    onSelectDate(formatted);
    onClose();
  };

  const isSelected = (dayNum: number) => {
    if (!selectedDob || selectedDob.length !== 10) {
      return dayNum === 10 && viewMonth === 11 && viewYear === 2023;
    }
    const parts = selectedDob.split('/');
    if (parts.length !== 3) return false;
    const d = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10) - 1;
    const y = parseInt(parts[2], 10);
    return d === dayNum && m === viewMonth && y === viewYear;
  };

  return (
    <View style={styles.calendarCard}>
      <View style={styles.calHeaderRow}>
        <TouchableOpacity
          style={styles.monthYearSelectorBtn}
          activeOpacity={0.7}
          onPress={() => setShowYearPicker(!showYearPicker)}
        >
          <Text style={styles.calMonthYearTitle}>
            {MONTH_NAMES[viewMonth]} {viewYear}
          </Text>
          <ChevronDownSmall />
        </TouchableOpacity>

        <View style={styles.calArrowsRow}>
          <TouchableOpacity
            style={styles.calNavCircleBtn}
            activeOpacity={0.8}
            onPress={handlePrevMonth}
          >
            <ChevronLeftIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calNavCircleBtn}
            activeOpacity={0.8}
            onPress={handleNextMonth}
          >
            <ChevronRightIcon />
          </TouchableOpacity>
        </View>
      </View>

      {showYearPicker ? (
        <View style={styles.yearPickerContainer}>
          <Text style={styles.yearPickerHeading}>Select Year & Month</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.monthPillsScroll}
            contentContainerStyle={styles.monthPillsContainer}
          >
            {MONTH_NAMES.map((mName, idx) => (
              <TouchableOpacity
                key={mName}
                style={[
                  styles.monthPill,
                  viewMonth === idx && styles.monthPillActive,
                ]}
                onPress={() => setViewMonth(idx)}
              >
                <Text
                  style={[
                    styles.monthPillText,
                    viewMonth === idx && styles.monthPillTextActive,
                  ]}
                >
                  {mName.slice(0, 3)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView style={styles.yearsScrollList} showsVerticalScrollIndicator={true}>
            <View style={styles.yearsGrid}>
              {yearsList.map((y) => (
                <TouchableOpacity
                  key={y}
                  style={[
                    styles.yearGridItem,
                    viewYear === y && styles.yearGridItemActive,
                  ]}
                  onPress={() => {
                    setViewYear(y);
                    setShowYearPicker(false);
                  }}
                >
                  <Text
                    style={[
                      styles.yearGridText,
                      viewYear === y && styles.yearGridTextActive,
                    ]}
                  >
                    {y}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <>
          <View style={styles.calWeekRow}>
            {WEEK_DAYS.map((wd, i) => (
              <View key={i} style={styles.calWeekCell}>
                <Text style={styles.calWeekText}>{wd}</Text>
              </View>
            ))}
          </View>

          <View style={styles.calWeeksContainer}>
            {calendarWeeks.map((week, wIndex) => (
              <View key={`week-${wIndex}`} style={styles.calWeekRow}>
                {week.map((d, dIndex) => {
                  if (d === null) {
                    return <View key={`empty-${dIndex}`} style={styles.calWeekCell} />;
                  }
                  const active = isSelected(d);
                  return (
                    <View key={`day-${d}`} style={styles.calWeekCell}>
                      <TouchableOpacity
                        style={[styles.calDayBtn, active && styles.calDayBtnActive]}
                        activeOpacity={0.7}
                        onPress={() => handleDayPress(d)}
                      >
                        <Text
                          style={[
                            styles.calDayText,
                            active && styles.calDayTextActive,
                          ]}
                        >
                          {d}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </>
      )}
    </View>
  );
}

export default function PersonalInfoScreen() {
  const router = useRouter();
  const { userData, updateUserData } = useAuth();
  const [firstName, setFirstName] = useState(userData.firstName || '');
  const [lastName, setLastName] = useState(userData.lastName || '');
  const [dob, setDob] = useState(userData.dob || '');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countryPickerOpen, setCountryPickerOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const firstNameRef = useRef<TextInput>(null);
  const lastNameRef = useRef<TextInput>(null);
  const dobRef = useRef<TextInput>(null);

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

    const daysInMonth = new Date(year, month, 0).getDate();
    return day <= daysInMonth;
  };

  const dobIsValid = isDobValid(dob);
  const dobIsInvalid = dob.length === 10 && !dobIsValid;

  // Validation state: first name, last name, valid DOB and selected country
  const isValid =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    dobIsValid &&
    selectedCountry !== null;

  const handleContinue = () => {
    if (!isValid || !selectedCountry) return;
    updateUserData({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      dob: dob.trim(),
      nationality: selectedCountry.name,
    });
    router.replace('/verify-email' as any);
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
              {/* White Sheet Card (Frame 1000002829: 343x528, bottom: 23px, radius: 32px) */}
              <View style={styles.sheetCard}>
                {/* Top Navigation Row (Component 4: 311x35) */}
                <View style={styles.topNavRow}>
                  <TouchableOpacity
                    style={styles.navCircleBtn}
                    activeOpacity={0.8}
                    onPress={() => router.back()}
                  >
                    <BackIcon />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.navCircleBtn}
                    activeOpacity={0.8}
                    onPress={() => router.replace('/welcome' as any)}
                  >
                    <CloseIcon />
                  </TouchableOpacity>
                </View>

                {/* Header Text (Frame 1000002892) */}
                <View style={styles.headerGroup}>
                  <Text style={styles.titleText}>Your personal info</Text>
                  <Text style={styles.subtitleText}>
                    Let us get to know you a little bit better
                  </Text>
                </View>

                {/* Form Fields Stack (Frame 2147227131 / Frame 2147230057) */}
                <ScrollView
                  style={styles.fieldsScroll}
                  contentContainerStyle={styles.fieldsContainer}
                  showsVerticalScrollIndicator={false}
                >
                  {/* Field 1: Legal First Name (Frame 9608: 311x56, border 0.5px #E5E5E5) */}
                  <TouchableOpacity
                    style={styles.fieldBox}
                    activeOpacity={0.95}
                    onPress={() => {
                      setCalendarOpen(false);
                      firstNameRef.current?.focus();
                    }}
                  >
                    <TextInput
                      ref={firstNameRef}
                      style={styles.textInputField}
                      placeholder="Legal first name"
                      placeholderTextColor="#768498"
                      value={firstName}
                      onChangeText={setFirstName}
                      editable={true}
                    />
                  </TouchableOpacity>

                  {/* Field 2: Legal Last Name (Frame 9612: 311x56, border 0.5px #E5E5E5) */}
                  <TouchableOpacity
                    style={styles.fieldBox}
                    activeOpacity={0.95}
                    onPress={() => {
                      setCalendarOpen(false);
                      lastNameRef.current?.focus();
                    }}
                  >
                    <TextInput
                      ref={lastNameRef}
                      style={styles.textInputField}
                      placeholder="Legal last name"
                      placeholderTextColor="#768498"
                      value={lastName}
                      onChangeText={setLastName}
                      editable={true}
                    />
                  </TouchableOpacity>

                  {/* Field 3: Date of Birth (Frame 9613: 311x56, border 0.5px #E5E5E5) */}
                  <TouchableOpacity
                    style={[styles.fieldBoxRow, dobIsInvalid && styles.fieldBoxError]}
                    activeOpacity={0.95}
                    onPress={() => {
                      setCalendarOpen(!calendarOpen);
                    }}
                  >
                    <TextInput
                      ref={dobRef}
                      style={[styles.textInputFieldWithIcon, dobIsInvalid && styles.textError]}
                      placeholder="Date of birth"
                      placeholderTextColor="#768498"
                      keyboardType="number-pad"
                      maxLength={10}
                      value={dob}
                      onChangeText={handleDobChange}
                      editable={true}
                    />
                    <TouchableOpacity
                      onPress={() => setCalendarOpen(!calendarOpen)}
                      activeOpacity={0.7}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <CalendarMonthFillIcon />
                    </TouchableOpacity>
                  </TouchableOpacity>

                  {/* Interactive Calendar Dropdown Widget */}
                  {calendarOpen && (
                    <CustomCalendarWidget
                      selectedDob={dob}
                      onSelectDate={(newDate) => {
                        setDob(newDate);
                        setCalendarOpen(false);
                      }}
                      onClose={() => setCalendarOpen(false)}
                    />
                  )}

                  {/* Field 4: Nationality (Frame 9611: 311x68 if selected, or 311x56 if unselected) */}
                  {selectedCountry ? (
                    <TouchableOpacity
                      style={styles.fieldBoxSelectedNat}
                      activeOpacity={0.85}
                      onPress={() => {
                        setCalendarOpen(false);
                        setCountryPickerOpen(true);
                      }}
                    >
                      <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
                      <View style={styles.selectedNatTextCol}>
                        <Text style={styles.selectedNatLabel}>Nationality</Text>
                        <Text style={styles.selectedNatValue}>{selectedCountry.name}</Text>
                      </View>
                      <DownLineIcon />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.fieldBoxRow}
                      activeOpacity={0.85}
                      onPress={() => {
                        setCalendarOpen(false);
                        setCountryPickerOpen(true);
                      }}
                    >
                      <Text style={styles.placeholderNatText}>Nationality</Text>
                      <DownLineIcon />
                    </TouchableOpacity>
                  )}

                  {/* Continue Button (_Button Base: 311x42, radius 100000px, background #340D73) */}
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
    paddingBottom: 23,
  },

  /* Sheet Card: 343x528, bottom: 23px, radius: 32px */
  sheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 528,
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
    position: 'relative',
  },

  /* Top Nav Row: 311x35 */
  topNavRow: {
    width: 311,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  navCircleBtn: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Header Group: Frame 1000002892 */
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
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
    textAlign: 'center',
  },

  /* Form Fields */
  fieldsScroll: {
    width: '100%',
  },
  fieldsContainer: {
    gap: 8,
    paddingBottom: 10,
  },
  fieldBox: {
    width: 311,
    maxWidth: '100%',
    height: 56,
    backgroundColor: '#FEFEFE',
    borderRadius: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
  },
  fieldBoxRow: {
    width: 311,
    maxWidth: '100%',
    height: 56,
    backgroundColor: '#FEFEFE',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
  },
  fieldBoxSelectedNat: {
    width: 311,
    maxWidth: '100%',
    height: 68,
    backgroundColor: '#FEFEFE',
    borderRadius: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#340D73',
    gap: 12,
  },
  fieldBoxError: {
    borderColor: '#EF4444',
    backgroundColor: '#FEF2F2',
  },
  textInputField: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#091748',
    padding: 0,
    letterSpacing: -0.09,
    ...(Platform.OS === 'web' ? { outlineWidth: 0, outlineStyle: 'none' } : {}),
  } as any,
  textInputFieldWithIcon: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#091748',
    padding: 0,
    letterSpacing: -0.09,
    ...(Platform.OS === 'web' ? { outlineWidth: 0, outlineStyle: 'none' } : {}),
  } as any,
  placeholderNatText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#768498',
    letterSpacing: -0.09,
  },
  selectedNatTextCol: {
    flex: 1,
    justifyContent: 'center',
  },
  selectedNatLabel: {
    fontSize: 11,
    lineHeight: 14,
    color: '#768498',
    fontWeight: '400',
  },
  selectedNatValue: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#091748',
    letterSpacing: -0.14,
  },
  flagEmoji: {
    fontSize: 24,
  },
  textError: {
    color: '#B91C1C',
  },

  /* Continue Button (_Button Base: 311x42, radius 100000px, background #340D73) */
  continueBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#340D73',
    borderRadius: 100000,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#7D00FF',
    shadowColor: '#7D00FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 16,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  continueText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: -0.14,
    textAlign: 'center',
  },

  /* Custom Calendar Widget Styles */
  calendarCard: {
    width: 311,
    backgroundColor: '#ECEEF2',
    borderRadius: 24,
    padding: 16,
    marginVertical: 4,
  },
  calHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  monthYearSelectorBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  calMonthYearTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  calArrowsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  calNavCircleBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calWeekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 2,
  },
  calWeekCell: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calWeekText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  calWeeksContainer: {
    gap: 4,
  },
  calDayBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calDayBtnActive: {
    backgroundColor: '#000000',
  },
  calDayText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  calDayTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  /* Year & Month Quick Selector */
  yearPickerContainer: {
    paddingVertical: 4,
  },
  yearPickerHeading: {
    fontSize: 12,
    fontWeight: '600',
    color: '#5C688E',
    marginBottom: 8,
    textAlign: 'center',
  },
  monthPillsScroll: {
    maxHeight: 36,
    marginBottom: 10,
  },
  monthPillsContainer: {
    gap: 6,
  },
  monthPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  monthPillActive: {
    backgroundColor: '#340D73',
  },
  monthPillText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0B1C56',
  },
  monthPillTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  yearsScrollList: {
    maxHeight: 140,
  },
  yearsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    justifyContent: 'center',
  },
  yearGridItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  yearGridItemActive: {
    backgroundColor: '#340D73',
  },
  yearGridText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0B1C56',
  },
  yearGridTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  /* Country Modal */
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
