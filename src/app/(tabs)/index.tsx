import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { AppShell } from '../../components/AppShell';
import { FeatureCard } from '../../components/FeatureCard';
import { QuickActionCard } from '../../components/QuickActionCard';
import { useAuth } from '../../contexts/AuthContext';
import { colors } from '../../theme/tokens';

function SellGiftcardIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.25 6.75H16.9613C16.9978 6.71906 17.0353 6.68906 17.0709 6.65625C17.3557 6.40329 17.5851 6.0943 17.745 5.74861C17.9049 5.40292 17.9917 5.02796 18 4.64718C18.0123 4.23063 17.9394 3.81595 17.7856 3.42861C17.6319 3.04127 17.4006 2.68944 17.106 2.39471C16.8113 2.09999 16.4596 1.8686 16.0723 1.71474C15.685 1.56088 15.2703 1.48781 14.8538 1.5C14.4728 1.5082 14.0977 1.59495 13.7518 1.75482C13.406 1.91468 13.0968 2.14422 12.8438 2.42906C12.4936 2.8349 12.2089 3.29291 12 3.78656C11.7911 3.29291 11.5064 2.8349 11.1562 2.42906C10.9032 2.14422 10.594 1.91468 10.2482 1.75482C9.90232 1.59495 9.52718 1.5082 9.14625 1.5C8.72969 1.48781 8.31503 1.56088 7.92774 1.71474C7.54044 1.8686 7.18868 2.09999 6.89405 2.39471C6.59941 2.68944 6.36812 3.04127 6.21438 3.42861C6.06064 3.81595 5.98768 4.23063 6 4.64718C6.00833 5.02796 6.09514 5.40292 6.255 5.74861C6.41486 6.0943 6.64434 6.40329 6.92906 6.65625C6.96469 6.68718 7.00219 6.71718 7.03875 6.75H3.75C3.35218 6.75 2.97064 6.90803 2.68934 7.18934C2.40804 7.47064 2.25 7.85217 2.25 8.25V11.25C2.25 11.6478 2.40804 12.0294 2.68934 12.3107C2.97064 12.592 3.35218 12.75 3.75 12.75V18.75C3.75 19.1478 3.90804 19.5294 4.18934 19.8107C4.47064 20.092 4.85218 20.25 5.25 20.25H10.875C10.9745 20.25 11.0698 20.2105 11.1402 20.1402C11.2105 20.0698 11.25 19.9745 11.25 19.875V11.25H3.75V8.25H11.25V11.25H12.75V8.25H20.25V11.25H12.75V19.875C12.75 19.9745 12.7895 20.0698 12.8598 20.1402C12.9302 20.2105 13.0255 20.25 13.125 20.25H18.75C19.1478 20.25 19.5294 20.092 19.8107 19.8107C20.092 19.5294 20.25 19.1478 20.25 18.75V12.75C20.6478 12.75 21.0294 12.592 21.3107 12.3107C21.592 12.0294 21.75 11.6478 21.75 11.25V8.25C21.75 7.85217 21.592 7.47064 21.3107 7.18934C21.0294 6.90803 20.6478 6.75 20.25 6.75ZM7.92281 5.53125C7.79168 5.4125 7.68651 5.26791 7.61391 5.10658C7.54131 4.94525 7.50285 4.77065 7.50094 4.59375C7.4962 4.38647 7.53287 4.18033 7.60881 3.9874C7.68476 3.79448 7.79844 3.61865 7.9432 3.47022C8.08796 3.32179 8.26089 3.20375 8.45186 3.12301C8.64282 3.04226 8.84798 3.00044 9.05531 3H9.10125C9.27815 3.0019 9.45275 3.04037 9.61409 3.11297C9.77542 3.18556 9.92 3.29073 10.0388 3.42187C10.8253 4.31062 11.1028 5.78437 11.2003 6.69562C10.2853 6.59906 8.8125 6.32156 7.92281 5.53125ZM16.0791 5.53125C15.1894 6.31875 13.7128 6.59625 12.7978 6.69375C12.9094 5.70843 13.2188 4.26562 13.9688 3.42281C14.0875 3.29167 14.2321 3.1865 14.3934 3.1139C14.5547 3.0413 14.7293 3.00284 14.9062 3.00093H14.9522C15.1595 3.00223 15.3645 3.0449 15.5552 3.12644C15.7458 3.20798 15.9183 3.32675 16.0624 3.47579C16.2066 3.62483 16.3195 3.80115 16.3947 3.99441C16.4698 4.18766 16.5056 4.39397 16.5 4.60125C16.4969 4.77695 16.4578 4.95016 16.3851 5.11013C16.3124 5.2701 16.2076 5.41344 16.0772 5.53125H16.0791Z"
        fill="#3FB12C"
      />
    </Svg>
  );
}

function HottestCardsIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.2928 4.82624C15.1269 3.59764 13.815 2.51647 12.3862 1.60686C12.2696 1.53678 12.1361 1.49976 12 1.49976C11.8639 1.49976 11.7304 1.53678 11.6137 1.60686C10.185 2.51647 8.87305 3.59764 7.70719 4.82624C5.11781 7.54499 3.75 10.5441 3.75 13.5C3.75 15.688 4.61919 17.7864 6.16637 19.3336C7.71354 20.8808 9.81196 21.75 12 21.75C14.188 21.75 16.2865 20.8808 17.8336 19.3336C19.3808 17.7864 20.25 15.688 20.25 13.5C20.25 10.5441 18.8822 7.54499 16.2928 4.82624ZM9 17.25C9 14.6559 11.1122 12.8175 12 12.1594C12.8888 12.8156 15 14.6559 15 17.25C15 18.0456 14.6839 18.8087 14.1213 19.3713C13.5587 19.9339 12.7956 20.25 12 20.25C11.2044 20.25 10.4413 19.9339 9.87868 19.3713C9.31607 18.8087 9 18.0456 9 17.25Z"
        fill="#50B8C3"
      />
    </Svg>
  );
}

function RateAlertsIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.8975 5.625C22.7895 5.55761 22.6662 5.51881 22.5391 5.51225C22.412 5.50569 22.2853 5.53159 22.1709 5.5875C18.1462 7.55625 15.2719 6.63375 12.2334 5.66063C9.0375 4.64344 5.7375 3.58875 1.17094 5.81813C1.04482 5.8797 0.938513 5.97543 0.8641 6.09442C0.789687 6.21342 0.750156 6.35091 0.75 6.49125V17.7347C0.749982 17.8619 0.782342 17.9871 0.844035 18.0984C0.905728 18.2097 0.994725 18.3035 1.10265 18.3709C1.21057 18.4383 1.33388 18.4772 1.46096 18.4838C1.58804 18.4904 1.71471 18.4646 1.82906 18.4088C5.85375 16.44 8.72812 17.3625 11.7712 18.3356C13.575 18.9122 15.4125 19.5 17.49 19.5C19.0922 19.5 20.8397 19.1513 22.8253 18.1819C22.9514 18.1203 23.0577 18.0246 23.1322 17.9056C23.2066 17.7866 23.2461 17.6491 23.2463 17.5087V6.26531C23.2474 6.13773 23.2159 6.01197 23.1549 5.89992C23.0939 5.78788 23.0053 5.69325 22.8975 5.625ZM4.5 14.25C4.5 14.4489 4.42098 14.6397 4.28033 14.7803C4.13968 14.921 3.94891 15 3.75 15C3.55109 15 3.36032 14.921 3.21967 14.7803C3.07902 14.6397 3 14.4489 3 14.25V8.25C3 8.05109 3.07902 7.86032 3.21967 7.71967C3.36032 7.57902 3.55109 7.5 3.75 7.5C3.94891 7.5 4.13968 7.57902 4.28033 7.71967C4.42098 7.86032 4.5 8.05109 4.5 8.25V14.25ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45543 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM21 15.75C21 15.9489 20.921 16.1397 20.7803 16.2803C20.6397 16.421 20.4489 16.5 20.25 16.5C20.0511 16.5 19.8603 16.421 19.7197 16.2803C19.579 16.1397 19.5 15.9489 19.5 15.75V9.75C19.5 9.55109 19.579 9.36032 19.7197 9.21967C19.8603 9.07902 20.0511 9 20.25 9C20.4489 9 20.6397 9.07902 20.7803 9.21967C20.921 9.36032 21 9.55109 21 9.75V15.75Z"
        fill="#597ABF"
      />
    </Svg>
  );
}

function RateCalculatorIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.75 2.25H5.25C4.85218 2.25 4.47064 2.40804 4.18934 2.68934C3.90804 2.97064 3.75 3.35218 3.75 3.75V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V3.75C20.25 3.35218 20.092 2.97064 19.8107 2.68934C19.5294 2.40804 19.1478 2.25 18.75 2.25ZM8.25 18.75C8.0275 18.75 7.80999 18.684 7.62498 18.5604C7.43998 18.4368 7.29578 18.2611 7.21064 18.0555C7.12549 17.85 7.10321 17.6238 7.14662 17.4055C7.19002 17.1873 7.29717 16.9868 7.4545 16.8295C7.61184 16.6722 7.81229 16.565 8.03052 16.5216C8.24875 16.4782 8.47495 16.5005 8.68052 16.5856C8.88609 16.6708 9.06179 16.815 9.1854 17C9.30902 17.185 9.375 17.4025 9.375 17.625C9.375 17.9234 9.25647 18.2095 9.0455 18.4205C8.83452 18.6315 8.54837 18.75 8.25 18.75ZM8.25 15C8.0275 15 7.80999 14.934 7.62498 14.8104C7.43998 14.6868 7.29578 14.5111 7.21064 14.3055C7.12549 14.1 7.10321 13.8738 7.14662 13.6555C7.19002 13.4373 7.29717 13.2368 7.4545 13.0795C7.61184 12.9222 7.81229 12.815 8.03052 12.7716C8.24875 12.7282 8.47495 12.7505 8.68052 12.8356C8.88609 12.9208 9.06179 13.065 9.1854 13.25C9.30902 13.435 9.375 13.6525 9.375 13.875C9.375 14.1734 9.25647 14.4595 9.0455 14.6705C8.83452 14.8815 8.54837 15 8.25 15ZM12 18.75C11.7775 18.75 11.56 18.684 11.375 18.5604C11.19 18.4368 11.0458 18.2611 10.9606 18.0555C10.8755 17.85 10.8532 17.6238 10.8966 17.4055C10.94 17.1873 11.0472 16.9868 11.2045 16.8295C11.3618 16.6722 11.5623 16.565 11.7805 16.5216C11.9988 16.4782 12.225 16.5005 12.4305 16.5856C12.6361 16.6708 12.8118 16.815 12.9354 17C13.059 17.185 13.125 17.4025 13.125 17.625C13.125 17.9234 13.0065 18.2095 12.7955 18.4205C12.5845 18.6315 12.2984 18.75 12 18.75ZM12 15C11.7775 15 11.56 14.934 11.375 14.8104C11.19 14.6868 11.0458 14.5111 10.9606 14.3055C10.8755 14.1 10.8532 13.8738 10.8966 13.6555C10.94 13.4373 11.0472 13.2368 11.2045 13.0795C11.3618 12.9222 11.5623 12.815 11.7805 12.7716C11.9988 12.7282 12.225 12.7505 12.4305 12.8356C12.6361 12.9208 12.8118 13.065 12.9354 13.25C13.059 13.435 13.125 13.6525 13.125 13.875C13.125 14.1734 13.0065 14.4595 12.7955 14.6705C12.5845 14.8815 12.2984 15 12 15ZM15.75 18.75C15.5275 18.75 15.31 18.684 15.125 18.5604C14.94 18.4368 14.7958 18.2611 14.7106 18.0555C14.6255 17.85 14.6032 17.6238 14.6466 17.4055C14.69 17.1873 14.7972 16.9868 14.9545 16.8295C15.1118 16.6722 15.3123 16.565 15.5305 16.5216C15.7488 16.4782 15.975 16.5005 16.1805 16.5856C16.3861 16.6708 16.5618 16.815 16.6854 17C16.809 17.185 16.875 17.4025 16.875 17.625C16.875 17.9234 16.7565 18.2095 16.5455 18.4205C16.3345 18.6315 16.0484 18.75 15.75 18.75ZM15.75 15C15.5275 15 15.31 14.934 15.125 14.8104C14.94 14.6868 14.7958 14.5111 14.7106 14.3055C14.6255 14.1 14.6032 13.8738 14.6466 13.6555C14.69 13.4373 14.7972 13.2368 14.9545 13.0795C15.1118 12.9222 15.3123 12.815 15.5305 12.7716C15.7488 12.7282 15.975 12.7505 16.1805 12.8356C16.3861 12.9208 16.5618 13.065 16.6854 13.25C16.809 13.435 16.875 13.6525 16.875 13.875C16.875 14.1734 16.7565 14.4595 16.5455 14.6705C16.3345 14.8815 16.0484 15 15.75 15ZM17.25 9.75C17.25 9.94891 17.171 10.1397 17.0303 10.2803C16.8897 10.421 16.6989 10.5 16.5 10.5H7.5C7.30109 10.5 7.11032 10.421 6.96967 10.2803C6.82902 10.1397 6.75 9.94891 6.75 9.75V6C6.75 5.80109 6.82902 5.61032 6.96967 5.46967C7.11032 5.32902 7.30109 5.25 7.5 5.25H16.5C16.6989 5.25 16.8897 5.32902 17.0303 5.46967C17.171 5.61032 17.25 5.80109 17.25 6V9.75Z"
        fill="#DE7D54"
      />
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

function ChevronRightIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M6 12L10 8L6 4"
        stroke="#D4C2F1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default function HomeScreen() {
  const router = useRouter();
  const { userData, balance } = useAuth();
  const [showGiftcardModal, setShowGiftcardModal] = useState(false);

  const firstName = userData.firstName || 'Ayodeji';
  const initial = firstName.charAt(0).toUpperCase();

  const whole = Math.floor(balance).toLocaleString('en-NG');
  const cents = (balance % 1).toFixed(2).slice(1);

  return (
    <AppShell withNav>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitial}>{initial}</Text>
          </View>
          <View>
            <Text style={styles.greetingSub}>Hello</Text>
            <Text style={styles.greetingName}>{firstName}</Text>
          </View>
        </View>

        {/* Balance Display */}
        <View style={styles.balanceSection}>
          <View style={styles.walletBadge}>
            <View style={styles.flagCircle} />
            <Text style={styles.walletBadgeText}>ngn wallet balance</Text>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.nairaSymbol}>₦</Text>
            <Text style={styles.wholeAmount}>{whole}</Text>
            <Text style={styles.centsAmount}>{cents}</Text>
          </View>

          <Text style={styles.balanceSub}>Your total balance</Text>
        </View>

        {/* Primary Action Buttons */}
        <View style={styles.primaryActionsRow}>
          <TouchableOpacity
            style={styles.buyBtn}
            activeOpacity={0.85}
            onPress={() => setShowGiftcardModal(true)}
          >
            <Text style={styles.buyBtnText}>Buy giftcard</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sellBtn}
            activeOpacity={0.85}
            onPress={() => router.push('/sell-crypto')}
          >
            <Text style={styles.sellBtnText}>Sell crypto</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickSection}>
          <View style={styles.quickHeaderRow}>
            <Text style={styles.quickTitle}>Quick Actions</Text>
          </View>

          <View style={styles.quickGrid}>
            <QuickActionCard
              icon={<SellGiftcardIcon />}
              backgroundColor="#E7FAE3"
              label="Sell giftcard"
              onPress={() => setShowGiftcardModal(true)}
            />
            <QuickActionCard
              icon={<HottestCardsIcon />}
              backgroundColor="#E4FAFC"
              label="Hottest cards"
              onPress={() => Alert.alert('Hottest Cards', 'Viewing trending giftcards')}
            />
            <QuickActionCard
              icon={<RateAlertsIcon />}
              backgroundColor="#ECF1FD"
              label="Rate alerts"
              onPress={() => Alert.alert('Rate Alerts', 'Setting up rate notifications')}
            />
            <QuickActionCard
              icon={<RateCalculatorIcon />}
              backgroundColor="#FCEAD9"
              label="Rate calculator"
              onPress={() => Alert.alert('Calculator', 'Opening rate calculator')}
            />
          </View>
        </View>

        {/* 2x2 Feature Cards Grid using exact Figma asset images */}
        <View style={styles.featureGrid}>
          {/* Row 1 */}
          <View style={styles.featureRow}>
            <FeatureCard
              title={'Sell your\ncrypto asset'}
              gradientColors={colors.gradients.crypto}
              imageSource={require('../../../assets/sell_crypto_asset.png')}
              onPress={() => router.push('/sell-crypto')}
            />
            <FeatureCard
              title={'Buy and sell\ngiftcards'}
              gradientColors={colors.gradients.giftcard}
              imageSource={require('../../../assets/buy_sell_giftcards.png')}
              onPress={() => setShowGiftcardModal(true)}
            />
          </View>

          {/* Row 2 */}
          <View style={styles.featureRow}>
            <FeatureCard
              title={'Withdraw into\nyour account'}
              gradientColors={colors.gradients.withdraw}
              imageSource={require('../../../assets/withdraw.png')}
              onPress={() => router.push('/(tabs)/wallet')}
            />
            <FeatureCard
              title={'Refer and\nearn money'}
              gradientColors={colors.gradients.refer}
              imageSource={require('../../../assets/earn.png')}
              onPress={() => router.push('/(tabs)/settings')}
            />
          </View>
        </View>
      </ScrollView>

      {/* Giftcards Action Bottom Sheet Modal (Frame 1000002829: 343x306px, radius 32px) */}
      <Modal
        visible={showGiftcardModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowGiftcardModal(false)}
      >
        <View style={styles.modalScrimOverlay}>
          <View style={styles.giftcardSheetCard}>
            {/* Header Title & Subtitle */}
            <View style={styles.sheetHeaderCol}>
              <Text style={styles.sheetHeaderTitle}>Giftcards</Text>
              <Text style={styles.sheetHeaderSubtitle}>What do you want to do?</Text>
            </View>

            {/* Close Button Circle */}
            <TouchableOpacity
              style={styles.sheetCloseBtnCircle}
              activeOpacity={0.8}
              onPress={() => setShowGiftcardModal(false)}
            >
              <CloseIcon />
            </TouchableOpacity>

            {/* Stack Container for Buy & Sell Options */}
            <View style={styles.optionsStackContainer}>
              {/* Option 1: Buy giftcard */}
              <TouchableOpacity
                style={styles.buyOptionRow}
                activeOpacity={0.9}
                onPress={() => {
                  setShowGiftcardModal(false);
                  Alert.alert('Buy Giftcard', 'Navigating to Buy Giftcard marketplace...');
                }}
              >
                <View style={styles.optionTextCol}>
                  <Text style={styles.optionTitle}>Buy giftcard</Text>
                  <Text style={styles.optionBody}>
                    Purchase and receive your giftcard instantly
                  </Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>

              {/* Option 2: Sell giftcard */}
              <TouchableOpacity
                style={styles.sellOptionRow}
                activeOpacity={0.9}
                onPress={() => {
                  setShowGiftcardModal(false);
                  router.push('/sell-crypto');
                }}
              >
                <View style={styles.optionTextCol}>
                  <Text style={styles.optionTitle}>Sell giftcard</Text>
                  <Text style={styles.optionBody}>
                    Easily sell your giftcards - it’s money in your pocket
                  </Text>
                </View>
                <ChevronRightIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </AppShell>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 110,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#991BB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  greetingSub: {
    fontSize: 12,
    lineHeight: 16,
    color: '#4F555F',
    fontWeight: '400',
  },
  greetingName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
  },
  balanceSection: {
    marginTop: 24,
    alignItems: 'center',
  },
  walletBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F3F3F3',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 7,
  },
  flagCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#6DA544',
  },
  walletBadgeText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#000000',
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 18,
    gap: 2,
  },
  nairaSymbol: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    color: '#000000',
  },
  wholeAmount: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '500',
    color: '#000000',
    letterSpacing: -0.64,
  },
  centsAmount: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '500',
    color: '#000000',
  },
  balanceSub: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#868C98',
    marginTop: 2,
  },
  primaryActionsRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 10,
    justifyContent: 'center',
  },
  buyBtn: {
    width: 151,
    height: 48,
    backgroundColor: '#3D019D',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  sellBtn: {
    width: 151,
    height: 48,
    backgroundColor: '#F1F1F1',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sellBtnText: {
    color: '#000000',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  quickSection: {
    marginTop: 24,
  },
  quickHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  quickTitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#868C98',
    letterSpacing: -0.12,
  },
  quickGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureGrid: {
    marginTop: 24,
    gap: 12,
  },
  featureRow: {
    flexDirection: 'row',
    gap: 12,
  },
  modalScrimOverlay: {
    flex: 1,
    backgroundColor: 'rgba(39, 45, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12,
  },
  giftcardSheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 306,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 24,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  sheetHeaderCol: {
    width: 161,
    gap: 8,
  },
  sheetHeaderTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  sheetHeaderSubtitle: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '400',
    color: '#5C688E',
  },
  sheetCloseBtnCircle: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsStackContainer: {
    width: 311,
    maxWidth: '100%',
    height: 172,
    marginTop: 24,
  },
  buyOptionRow: {
    width: '100%',
    height: 86,
    backgroundColor: '#FEFEFE',
    borderWidth: 0.5,
    borderColor: '#D4C2F1',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  sellOptionRow: {
    width: '100%',
    height: 86,
    backgroundColor: '#FEFEFE',
    borderWidth: 0.5,
    borderTopWidth: 0,
    borderColor: '#D4C2F1',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  optionTextCol: {
    flex: 1,
    gap: 6,
  },
  optionTitle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#091748',
    letterSpacing: -0.14,
  },
  optionBody: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#768498',
    letterSpacing: -0.09,
  },
});
