import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/tokens';

interface QuickActionCardProps {
  icon: React.ReactNode;
  label: string;
  backgroundColor?: string;
  onPress?: () => void;
  badgeEmoji?: string;
}

export function QuickActionCard({
  icon,
  label,
  backgroundColor = colors.bgSecondary,
  onPress,
  badgeEmoji,
}: QuickActionCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75} onPress={onPress}>
      <View style={[styles.iconBox, { backgroundColor }]}>
        {icon}
        {badgeEmoji ? (
          <View style={styles.badgeBox}>
            <Text style={styles.badgeText}>{badgeEmoji}</Text>
          </View>
        ) : null}
      </View>
      <Text style={styles.labelText} numberOfLines={2}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 72,
    gap: 6,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badgeBox: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#F7D774',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 10,
  },
  labelText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
