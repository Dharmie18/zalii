import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Circle, Ellipse, Line } from 'react-native-svg';

interface FeatureCardProps {
  title: string;
  gradientColors: readonly [string, string, ...string[]];
  symbol?: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  badgeLabel?: string;
}

export function FeatureCard({
  title,
  gradientColors,
  symbol,
  imageSource,
  onPress,
  badgeLabel,
}: FeatureCardProps) {
  const lines = title.split('\n');

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <LinearGradient
        colors={gradientColors as [string, string]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradientCard}
      >
        {/* Title */}
        <View style={styles.titleContainer}>
          {lines.map((line, idx) => (
            <Text key={idx} style={styles.titleText}>
              {line}
            </Text>
          ))}
        </View>

        {/* Optional Badge */}
        {badgeLabel ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeLabel}</Text>
          </View>
        ) : null}

        {/* Illustration or Image Background */}
        {imageSource ? (
          <View style={styles.cardImageWrapper} pointerEvents="none">
            <Image source={imageSource} style={styles.cardImage} resizeMode="contain" />
          </View>
        ) : (
          <View style={styles.illustrationWrapper} pointerEvents="none">
            <View style={styles.globeCircle}>
              <Svg width="110" height="110" viewBox="0 0 110 110" style={styles.globeSvg}>
                <Circle cx="55" cy="55" r="54" stroke="white" strokeWidth="0.6" opacity="0.35" />
                <Ellipse cx="55" cy="55" rx="22" ry="54" stroke="white" strokeWidth="0.6" opacity="0.35" />
                <Ellipse cx="55" cy="55" rx="40" ry="54" stroke="white" strokeWidth="0.6" opacity="0.35" />
                <Line x1="1" y1="55" x2="109" y2="55" stroke="white" strokeWidth="0.6" opacity="0.35" />
                <Ellipse cx="55" cy="55" rx="54" ry="20" stroke="white" strokeWidth="0.6" opacity="0.35" />
                <Ellipse cx="55" cy="55" rx="54" ry="36" stroke="white" strokeWidth="0.6" opacity="0.35" />
              </Svg>
            </View>
            {symbol ? (
              <LinearGradient
                colors={['#F7D774', '#C8860A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.goldCoin}
              >
                <Text style={styles.coinSymbol}>{symbol}</Text>
              </LinearGradient>
            ) : null}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 125,
    borderRadius: 24,
    overflow: 'hidden',
  },
  gradientCard: {
    flex: 1,
    borderRadius: 24,
    padding: 14,
    justifyContent: 'space-between',
    position: 'relative',
  },
  titleContainer: {
    zIndex: 10,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.2,
  },
  badge: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    zIndex: 10,
    marginTop: 4,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#340D73',
  },
  cardImageWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 120,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  illustrationWrapper: {
    position: 'absolute',
    right: -10,
    bottom: -15,
    width: 110,
    height: 110,
  },
  globeCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  globeSvg: {
    width: '100%',
    height: '100%',
  },
  goldCoin: {
    position: 'absolute',
    left: 20,
    top: 25,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  coinSymbol: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
