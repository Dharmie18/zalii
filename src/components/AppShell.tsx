import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native';
import { colors, layout } from '../theme/tokens';
import { BottomNav } from './BottomNav';

interface AppShellProps {
  children: React.ReactNode;
  withNav?: boolean;
  backgroundColor?: string;
  darkStatusBar?: boolean;
}

export function AppShell({
  children,
  withNav = true,
  backgroundColor = colors.bgLight,
  darkStatusBar = true,
}: AppShellProps) {
  return (
    <SafeAreaView style={[styles.rootContainer, { backgroundColor }]}>
      <StatusBar
        barStyle={darkStatusBar ? 'dark-content' : 'light-content'}
        backgroundColor={backgroundColor}
      />
      <View style={styles.centerWrapper}>
        <View style={[styles.contentContainer, { backgroundColor }]}>
          <View style={[styles.innerContent, withNav && styles.withNavPadding]}>
            {children}
          </View>
          {withNav && <BottomNav />}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgLight,
  },
  centerWrapper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    maxWidth: layout.maxContentWidth,
    position: 'relative',
  },
  innerContent: {
    flex: 1,
  },
  withNavPadding: {
    paddingBottom: Platform.OS === 'ios' ? 90 : 75,
  },
});
