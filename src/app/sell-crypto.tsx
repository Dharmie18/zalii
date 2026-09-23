import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { AppShell } from '../components/AppShell';

function BackIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip_back)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.29303 12.7071C8.10556 12.5196 8.00024 12.2653 8.00024 12.0001C8.00024 11.7349 8.10556 11.4806 8.29303 11.2931L13.95 5.6361C14.0423 5.54059 14.1526 5.46441 14.2746 5.412C14.3966 5.35959 14.5279 5.332 14.6606 5.33085C14.7934 5.32969 14.9251 5.355 15.048 5.40528C15.1709 5.45556 15.2825 5.52981 15.3764 5.6237C15.4703 5.7176 15.5446 5.82925 15.5949 5.95214C15.6451 6.07504 15.6704 6.20672 15.6693 6.3395C15.6681 6.47228 15.6405 6.6035 15.5881 6.7255C15.5357 6.84751 15.4595 6.95773 15.364 7.0401L10.414 12.0001L15.364 16.9501C15.5462 17.1387 15.647 17.3913 15.6447 17.6535C15.6424 17.9157 15.5373 18.1665 15.3518 18.3519C15.1664 18.5373 14.9156 18.6425 14.6534 18.6448C14.3912 18.6471 14.1386 18.5463 13.95 18.3641L8.29303 12.7071Z"
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

function KeyholeIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip_key)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 1.66669C5.39758 1.66669 1.66675 5.39752 1.66675 10C1.66675 14.6025 5.39758 18.3334 10.0001 18.3334C14.6026 18.3334 18.3334 14.6025 18.3334 10C18.3334 5.39752 14.6026 1.66669 10.0001 1.66669ZM11.3942 10.2975C11.3338 10.3489 11.2872 10.4147 11.2588 10.4888C11.2304 10.563 11.2211 10.643 11.2317 10.7217L11.5859 12.8484C11.5958 12.908 11.5926 12.9691 11.5766 13.0274C11.5605 13.0857 11.5319 13.1398 11.4928 13.186C11.4537 13.2322 11.4051 13.2692 11.3502 13.2947C11.2953 13.3201 11.2356 13.3333 11.1751 13.3334H8.82508C8.7646 13.3333 8.70485 13.3201 8.64998 13.2947C8.59511 13.2692 8.54643 13.2322 8.50734 13.186C8.46825 13.1398 8.43967 13.0857 8.42359 13.0274C8.40752 12.9691 8.40433 12.908 8.41425 12.8484L8.76841 10.7217C8.77907 10.643 8.76976 10.563 8.74137 10.4888C8.71297 10.4147 8.66639 10.3489 8.60591 10.2975C8.29295 10.0155 8.07283 9.64526 7.9746 9.2356C7.87636 8.82594 7.90463 8.39612 8.05567 8.00285C8.20672 7.60959 8.47343 7.27135 8.82064 7.03277C9.16785 6.79419 9.57922 6.66647 10.0005 6.66647C10.4218 6.66647 10.8331 6.79419 11.1804 7.03277C11.5276 7.27135 11.7943 7.60959 11.9453 8.00285C12.0964 8.39612 12.1246 8.82594 12.0264 9.2356C11.9282 9.64526 11.7072 10.0155 11.3942 10.2975Z"
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

function WhiteClockIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_16_624)">
        <Path
          d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11.0001 12.2652 11.1055 12.5195 11.293 12.707L14.293 15.707C14.4816 15.8892 14.7342 15.99 14.9964 15.9877C15.2586 15.9854 15.5094 15.8802 15.6948 15.6948C15.8802 15.5094 15.9854 15.2586 15.9877 14.9964C15.99 14.7342 15.8892 14.4816 15.707 14.293L13 11.586V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_16_624">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function WhiteCheckmarkIcon() {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <G clipPath="url(#clip0_16_653)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.773 2.55553C10.9136 2.69618 10.9926 2.88691 10.9926 3.08578C10.9926 3.28466 10.9136 3.47539 10.773 3.61603L5.15151 9.23753C5.07722 9.31184 4.98902 9.37078 4.89195 9.411C4.79488 9.45121 4.69084 9.47191 4.58576 9.47191C4.48069 9.47191 4.37665 9.45121 4.27957 9.411C4.1825 9.37078 4.0943 9.31184 4.02001 9.23753L1.22701 6.44503C1.15538 6.37585 1.09824 6.29309 1.05894 6.20159C1.01963 6.11008 0.998941 6.01167 0.998075 5.91208C0.99721 5.8125 1.01619 5.71374 1.0539 5.62157C1.09161 5.5294 1.1473 5.44566 1.21772 5.37524C1.28814 5.30482 1.37188 5.24913 1.46405 5.21142C1.55622 5.17371 1.65498 5.15473 1.75456 5.1556C1.85415 5.15646 1.95256 5.17715 2.04407 5.21646C2.13557 5.25576 2.21833 5.3129 2.28751 5.38453L4.58551 7.68253L9.71201 2.55553C9.78166 2.48584 9.86436 2.43055 9.95539 2.39283C10.0464 2.35511 10.144 2.33569 10.2425 2.33569C10.341 2.33569 10.4386 2.35511 10.5296 2.39283C10.6207 2.43055 10.7034 2.48584 10.773 2.55553Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_16_653">
          <Rect width="12" height="12" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function YellowClockIcon() {
  return (
    <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <Path
        d="M14 0C21.7322 0 28 6.2678 28 14C28 21.7322 21.7322 28 14 28C6.2678 28 0 21.7322 0 14C0 6.2678 6.2678 0 14 0ZM14 5.6C13.6287 5.6 13.2726 5.7475 13.0101 6.01005C12.7475 6.2726 12.6 6.6287 12.6 7V14C12.6001 14.3713 12.7476 14.7273 13.0102 14.9898L17.2102 19.1898C17.4742 19.4448 17.8279 19.5859 18.195 19.5827C18.562 19.5796 18.9132 19.4323 19.1727 19.1727C19.4323 18.8132 19.5796 18.562 19.5827 18.195C19.5859 17.8279 19.4448 17.4742 19.1898 17.2102L15.4 13.4204V7C15.4 6.6287 15.2525 6.2726 14.9899 6.01005C14.7274 5.7475 14.3713 5.6 14 5.6Z"
        fill="#DBB452"
      />
    </Svg>
  );
}

function BigCompletedCheckIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.546 5.111C21.8272 5.39236 21.9852 5.77382 21.9852 6.1715C21.9852 6.56918 21.8272 6.95064 21.546 7.232L10.303 18.475C10.1544 18.6236 9.97799 18.7415 9.78385 18.8219C9.58971 18.9023 9.38163 18.9437 9.17148 18.9437C8.96133 18.9437 8.75325 18.9437 8.55911 18.8219C8.36497 18.7415 8.18856 18.6236 8.04 18.475L2.454 12.89C2.31076 12.7517 2.19648 12.5862 2.11788 12.4032C2.03927 12.2202 1.99788 12.0234 1.99615 11.8242C1.99442 11.625 2.03238 11.4275 2.1078 11.2431C2.18322 11.0588 2.2946 10.8913 2.43544 10.7505C2.57628 10.6097 2.74376 10.4983 2.9281 10.4229C3.11244 10.3475 3.30992 10.3095 3.50912 10.3112C3.70831 10.313 3.90513 10.3544 4.08814 10.433C4.27115 10.5116 4.43666 10.6259 4.575 10.769L9.17148 15.365L19.425 5.111C19.7064 4.82977 20.0878 4.67175 20.4855 4.67175C20.8832 4.67175 21.2646 4.82977 21.546 5.111Z"
        fill="white"
      />
    </Svg>
  );
}

interface CryptoCardItem {
  id: string;
  name: string;
  symbol: string;
  title: string;
  gradient: [string, string];
  rate: string;
  image: any;
  walletAddress: string;
  payoutAmount: string;
}

const CRYPTO_LIST: CryptoCardItem[] = [
  {
    id: 'btc',
    name: 'BTC',
    symbol: 'BTC',
    title: 'Sell your BTC',
    gradient: ['#F18740', '#F29658'],
    rate: 'Rate: 1 BTC/₦131,414,495.00',
    image: require('../../assets/btc.png'),
    walletAddress: 'bc1q99363hgtrsy63549n7jkq9mt',
    payoutAmount: '$3020.29',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    title: 'Sell your\nEthereum',
    gradient: ['#6333F5', '#764DF5'],
    rate: 'Rate: 1 ETH/₦5,250,000.00',
    image: require('../../assets/eth.png'),
    walletAddress: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    payoutAmount: '$3020.29',
  },
  {
    id: 'sol',
    name: 'solana',
    symbol: 'SOL',
    title: 'Sell your\nsolana',
    gradient: ['#4061F1', '#5876F2'],
    rate: 'Rate: 1 SOL/₦295,000.00',
    image: require('../../assets/sol.png'),
    walletAddress: 'HN7cABqLq46Es1jh92dQQisAq662SmxELL5cziP285N5',
    payoutAmount: '$3020.29',
  },
  {
    id: 'ltc',
    name: 'litecoin',
    symbol: 'LTC',
    title: 'Sell your\nlitecoin',
    gradient: ['#AB3AC0', '#B653C8'],
    rate: 'Rate: 1 LTC/₦145,000.00',
    image: require('../../assets/litecoin.png'),
    walletAddress: 'LTC1q99363hgtrsy63549n7jkq9mt8439',
    payoutAmount: '$3020.29',
  },
  {
    id: 'cashapp_btc',
    name: 'Cashapp BTC',
    symbol: 'BTC',
    title: 'Sell your\nCashapp BTC',
    gradient: ['#49A367', '#58AE7A'],
    rate: 'Rate: 1 BTC/₦131,414,495.00',
    image: require('../../assets/btc.png'),
    walletAddress: 'bc1q99363hgtrsy63549n7jkq9mt',
    payoutAmount: '$3020.29',
  },
  {
    id: 'usdt_trc',
    name: 'USDT TRC',
    symbol: 'USDT',
    title: 'Sell your\nUSDT TRC',
    gradient: ['#3AC0A5', '#53C8B1'],
    rate: 'Rate: 1 USDT/₦1,650.00',
    image: require('../../assets/usdt.png'),
    walletAddress: 'TYDzsYUEpvnYmQk4zGP9sWWcTEd2MiAtW6',
    payoutAmount: '$3020.29',
  },
  {
    id: 'doge',
    name: 'Dogecoin',
    symbol: 'DOGE',
    title: 'Sell your\nDogecoin',
    gradient: ['#A39649', '#AEA158'],
    rate: 'Rate: 1 DOGE/₦250.00',
    image: require('../../assets/dogecoin.png'),
    walletAddress: 'D8vFzW3q890fn3298hjfks390f7h39j',
    payoutAmount: '$3020.29',
  },
  {
    id: 'usdt_eth',
    name: 'USDT ETH',
    symbol: 'USDT',
    title: 'Sell your\nUSDT ETH',
    gradient: ['#3A4EC0', '#5365C8'],
    rate: 'Rate: 1 USDT/₦1,650.00',
    image: require('../../assets/usdt.png'),
    walletAddress: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    payoutAmount: '$3020.29',
  },
];

export default function SellCryptoScreen() {
  const router = useRouter();
  const [selectedCoin, setSelectedCoin] = useState<CryptoCardItem | null>(null);
  const [orderStatus, setOrderStatus] = useState<'none' | 'deposit' | 'pending' | 'completed'>('none');
  const [copied, setCopied] = useState(false);

  // Auto-advance from pending to completed after 4 seconds for interactive demonstration
  useEffect(() => {
    let timer: any;
    if (orderStatus === 'pending') {
      timer = setTimeout(() => {
        setOrderStatus('completed');
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [orderStatus]);

  const handleSelectCoin = (item: CryptoCardItem) => {
    setSelectedCoin(item);
    setOrderStatus('deposit');
  };

  const handleCopyAddress = (address: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(address);
    }
    setCopied(true);
    Alert.alert('Copied!', 'Wallet address copied to clipboard.');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSentCryptoPress = () => {
    setOrderStatus('pending');
  };

  const handleCloseAll = () => {
    setOrderStatus('none');
    setSelectedCoin(null);
  };

  const handleCancelOrder = () => {
    Alert.alert(
      'Cancel Order',
      'Are you sure you want to cancel this sell order?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes, Cancel', style: 'destructive', onPress: handleCloseAll },
      ]
    );
  };

  return (
    <AppShell withNav>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header Row */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.backCircleBtn}
            activeOpacity={0.8}
            onPress={() => router.back()}
          >
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sell crypto</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* 2-Column Grid Container */}
        <View style={styles.gridContainer}>
          {CRYPTO_LIST.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.cryptoCard}
              activeOpacity={0.9}
              onPress={() => handleSelectCoin(item)}
            >
              <LinearGradient
                colors={item.gradient}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.gradientFill}
              >
                {/* Title */}
                <Text style={styles.cardTitle}>{item.title}</Text>

                {/* Coin Image Background */}
                <View style={styles.imageOverlayWrapper} pointerEvents="none">
                  <Image
                    source={item.image}
                    style={styles.coinImage}
                    resizeMode="contain"
                  />
                </View>

                {/* Rate Pill Badge */}
                <View style={styles.rateBadgePill}>
                  <Text style={styles.rateBadgeText} numberOfLines={1}>
                    {item.rate}
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* 1. Modal Popup for Selected Crypto Trade Deposit */}
      <Modal
        visible={!!selectedCoin && orderStatus === 'deposit'}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseAll}
      >
        <View style={styles.modalScrimOverlay}>
          {selectedCoin && (
            <View style={styles.modalSheetCard}>
              {/* Top Navigation Row */}
              <View style={styles.modalHeaderRow}>
                <Text style={styles.modalTitle}>Sell {selectedCoin.name}</Text>
                <TouchableOpacity
                  style={styles.modalCloseBtnCircle}
                  activeOpacity={0.8}
                  onPress={handleCloseAll}
                >
                  <CloseIcon />
                </TouchableOpacity>
              </View>

              {/* Subtitle Instructions */}
              <Text style={styles.instructionTitleText}>
                Go to your wallet and send your {selectedCoin.symbol} to the address below
              </Text>

              {/* QR Code Container (Frame 2147230058: 288x184, radius 12, #F0EBF9) */}
              <View style={styles.qrContainerBox}>
                <View style={styles.qrRatePill}>
                  <Text style={styles.qrRatePillText}>Rate: $1=₦1,427</Text>
                </View>

                <Image
                  source={require('../../assets/coin_splash.png')}
                  style={styles.qrCodeImage}
                  resizeMode="contain"
                />
              </View>

              {/* Wallet Address Box (Frame 9609: 311x68, border 0.5px #340D73) */}
              <View style={styles.walletBoxRow}>
                <KeyholeIcon />
                <View style={styles.walletBoxColumn}>
                  <Text style={styles.walletBoxLabel}>Wallet address</Text>
                  <Text
                    style={styles.walletBoxAddressText}
                    numberOfLines={1}
                    ellipsizeMode="middle"
                  >
                    {selectedCoin.walletAddress}
                  </Text>
                </View>
              </View>

              {/* Action Buttons Row: Copy address & Rate calculator */}
              <View style={styles.actionButtonsRow}>
                <TouchableOpacity
                  style={styles.copyAddressBtn}
                  activeOpacity={0.85}
                  onPress={() => handleCopyAddress(selectedCoin.walletAddress)}
                >
                  <Text style={styles.copyAddressBtnText}>
                    {copied ? 'Copied!' : 'Copy address'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.rateCalcBtn}
                  activeOpacity={0.85}
                  onPress={() => Alert.alert('Rate Calculator', 'Rate: 1 USD = ₦1,427')}
                >
                  <Text style={styles.rateCalcBtnText}>Rate calculator</Text>
                </TouchableOpacity>
              </View>

              {/* What Happens Next Section */}
              <View style={styles.whatHappensNextSection}>
                <Text style={styles.nextSectionTitle}>What happens next</Text>
                <Text style={styles.nextSectionBody}>
                  Upon sending your crypto to the wallet address above, we will promptly initiate the sale at the current market rate. your funds will be transferred to your wallet immediately and may take between a few minutes to 2 business days to arrive
                </Text>
              </View>

              {/* Bottom Confirmation Button ("I've sent the crypto") */}
              <TouchableOpacity
                style={styles.sentCryptoBtn}
                activeOpacity={0.85}
                onPress={handleSentCryptoPress}
              >
                <Text style={styles.sentCryptoBtnText}>I’ve sent the crypto</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>

      {/* 2. Order Tracking Pending Status Modal Popup (Frame 1000002829: 343x656px) */}
      <Modal
        visible={!!selectedCoin && orderStatus === 'pending'}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseAll}
      >
        <View style={styles.modalScrimOverlay}>
          {selectedCoin && (
            <View style={styles.trackingSheetCard}>
              {/* Header Row */}
              <View style={styles.modalHeaderRow}>
                <Text style={styles.modalTitle}>Sell {selectedCoin.symbol}</Text>
                <TouchableOpacity
                  style={styles.modalCloseBtnCircle}
                  activeOpacity={0.8}
                  onPress={handleCloseAll}
                >
                  <CloseIcon />
                </TouchableOpacity>
              </View>

              {/* Animated Glowing Clock Rings */}
              <View style={styles.clockOuterWrapper}>
                <View style={styles.clockOuterRing}>
                  <View style={styles.clockMiddleRing}>
                    <View style={styles.clockInnerBadge}>
                      <WhiteClockIcon />
                    </View>
                  </View>
                </View>
              </View>

              {/* Title Status */}
              <Text style={styles.orderStatusMainTitle}>Your order is being completed</Text>

              {/* Order timeline section header */}
              <Text style={styles.timelineSectionTitle}>Order timeline</Text>

              {/* Stepper Row with 4 steps */}
              <View style={styles.stepperBarRow}>
                {/* Step 1: Order sent */}
                <View style={[styles.stepBadge, styles.stepBadgeGreen]}>
                  <WhiteCheckmarkIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 2: Received */}
                <View style={styles.stepBadgeYellow}>
                  <YellowClockIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 3: Processed */}
                <View style={[styles.stepBadge, styles.stepBadgeGray]}>
                  <WhiteCheckmarkIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 4: Completed */}
                <View style={[styles.stepBadge, styles.stepBadgeGray]}>
                  <WhiteCheckmarkIcon />
                </View>
              </View>

              {/* Stepper Labels Row */}
              <View style={styles.timelineLabelsRow}>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Order sent</Text>
                  <Text style={styles.timelineStepTime}>11:29 AM</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Received</Text>
                  <Text style={styles.timelineStepTime}>Pending</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Processed</Text>
                  <Text style={styles.timelineStepTime}>-</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Completed</Text>
                  <Text style={styles.timelineStepTime}>-</Text>
                </View>
              </View>

              {/* Waiting for deposit Section */}
              <View style={styles.waitingDepositSection}>
                <Text style={styles.waitingDepositTitle}>Waiting for deposit</Text>
                <Text style={styles.waitingDepositBody}>
                  We are waiting to receive your crypto, please check and confirm that crypto has been sent
                </Text>
              </View>

              {/* No longer selling warning card */}
              <TouchableOpacity
                style={styles.noLongerSellingCard}
                activeOpacity={0.9}
                onPress={handleCancelOrder}
              >
                <Text style={styles.noLongerSellingTitle}>No longer selling</Text>
                <Text style={styles.noLongerSellingBody}>
                  If you no longer want to sell, you can tap here to cancel your order
                </Text>
              </TouchableOpacity>

              {/* Bottom Done Button */}
              <TouchableOpacity
                style={styles.doneActionBtn}
                activeOpacity={0.85}
                onPress={() => setOrderStatus('completed')}
              >
                <Text style={styles.doneActionBtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>

      {/* 3. Order COMPLETED Status Modal Popup (Frame 1000002829: 343x656px, radius 32px) */}
      <Modal
        visible={!!selectedCoin && orderStatus === 'completed'}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseAll}
      >
        <View style={styles.modalScrimOverlay}>
          {selectedCoin && (
            <View style={styles.trackingSheetCard}>
              {/* Header Row */}
              <View style={styles.modalHeaderRow}>
                <Text style={styles.modalTitle}>Sell {selectedCoin.symbol}</Text>
                <TouchableOpacity
                  style={styles.modalCloseBtnCircle}
                  activeOpacity={0.8}
                  onPress={handleCloseAll}
                >
                  <CloseIcon />
                </TouchableOpacity>
              </View>

              {/* Green Completed Check Badge (Frame 2147230066: 53x53 #37A970) */}
              <View style={styles.completedGreenBadgeCircle}>
                <BigCompletedCheckIcon />
              </View>

              {/* Title Status */}
              <Text style={styles.orderStatusMainTitle}>Your order is complete</Text>

              {/* Order timeline section header */}
              <Text style={styles.timelineSectionTitle}>Order timeline</Text>

              {/* Stepper Row with 4 COMPLETED steps */}
              <View style={styles.stepperBarRow}>
                {/* Step 1: Order sent */}
                <View style={[styles.stepBadge, styles.stepBadgeGreen]}>
                  <WhiteCheckmarkIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 2: Received */}
                <View style={[styles.stepBadge, styles.stepBadgeGreen]}>
                  <WhiteCheckmarkIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 3: Processed */}
                <View style={[styles.stepBadge, styles.stepBadgeGreen]}>
                  <WhiteCheckmarkIcon />
                </View>

                <View style={styles.stepDividerLine} />

                {/* Step 4: Completed */}
                <View style={[styles.stepBadge, styles.stepBadgeGreen]}>
                  <WhiteCheckmarkIcon />
                </View>
              </View>

              {/* Stepper Labels Row */}
              <View style={styles.timelineLabelsRow}>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Order sent</Text>
                  <Text style={styles.timelineStepTime}>11:29 AM</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Received</Text>
                  <Text style={styles.timelineStepTime}>11:29 AM</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Processed</Text>
                  <Text style={styles.timelineStepTime}>11:29 AM</Text>
                </View>
                <View style={styles.timelineLabelCol}>
                  <Text style={styles.timelineStepName}>Completed</Text>
                  <Text style={styles.timelineStepTime}>11:29 AM</Text>
                </View>
              </View>

              {/* We sent money to your wallet Section */}
              <View style={styles.completedSentSection}>
                <Text style={styles.completedSentTitle}>
                  We sent {selectedCoin.payoutAmount} to your wallet
                </Text>
                <Text style={styles.completedSentBody}>
                  We have sent your money to your wallet, it might take between 1 - 5 business days to reflect in your wallet balance
                </Text>
              </View>

              {/* Bottom Done Button */}
              <TouchableOpacity
                style={styles.doneActionBtn}
                activeOpacity={0.85}
                onPress={handleCloseAll}
              >
                <Text style={styles.doneActionBtnText}>Done</Text>
              </TouchableOpacity>
            </View>
          )}
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
    paddingTop: 16,
    paddingBottom: 120,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backCircleBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  gridContainer: {
    width: 343,
    maxWidth: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cryptoCard: {
    width: 165.5,
    maxWidth: '48%',
    height: 125,
    borderRadius: 24,
    overflow: 'hidden',
  },
  gradientFill: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
    position: 'relative',
  },
  cardTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    letterSpacing: -0.16,
    zIndex: 2,
  },
  imageOverlayWrapper: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 110,
    height: 110,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 0.9,
  },
  coinImage: {
    width: '100%',
    height: '100%',
  },
  rateBadgePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 10000,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 2,
  },
  rateBadgeText: {
    fontSize: 8,
    lineHeight: 10,
    fontWeight: '500',
    color: '#340D73',
  },
  modalScrimOverlay: {
    flex: 1,
    backgroundColor: 'rgba(39, 45, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 19,
  },
  modalSheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 740,
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  trackingSheetCard: {
    width: 343,
    maxWidth: '92%',
    height: 656,
    maxHeight: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeaderRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
  },
  modalCloseBtnCircle: {
    position: 'absolute',
    right: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionTitleText: {
    width: 292,
    maxWidth: '100%',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
    marginTop: 24,
  },
  qrContainerBox: {
    width: 288,
    maxWidth: '100%',
    height: 170,
    backgroundColor: '#F0EBF9',
    borderRadius: 12,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  qrRatePill: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: '#F6F6F6',
    borderRadius: 100000,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  qrRatePillText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: '#6B6B6B',
  },
  qrCodeImage: {
    width: 112,
    height: 119,
  },
  walletBoxRow: {
    width: 311,
    maxWidth: '100%',
    height: 68,
    backgroundColor: '#FEFEFE',
    borderWidth: 0.5,
    borderColor: '#340D73',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 16,
  },
  walletBoxColumn: {
    flex: 1,
  },
  walletBoxLabel: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '400',
    color: '#768498',
  },
  walletBoxAddressText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#091748',
    marginTop: 2,
  },
  actionButtonsRow: {
    width: 311,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  copyAddressBtn: {
    width: 138,
    height: 42,
    backgroundColor: '#340D73',
    borderRadius: 100000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyAddressBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  rateCalcBtn: {
    width: 132,
    height: 42,
    backgroundColor: '#F6F6F6',
    borderRadius: 100000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateCalcBtnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#340D73',
  },
  whatHappensNextSection: {
    width: 311,
    maxWidth: '100%',
    marginTop: 16,
    gap: 4,
  },
  nextSectionTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  nextSectionBody: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: '#5C688E',
  },
  sentCryptoBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#340D73',
    borderRadius: 100000,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#7D00FF',
    shadowColor: '#7D00FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  sentCryptoBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },
  clockOuterWrapper: {
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
  },
  clockOuterRing: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#D5ADFF',
    borderWidth: 1,
    borderColor: '#C695F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockMiddleRing: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#E2C7FD',
    borderWidth: 1,
    borderColor: '#D6B3FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockInnerBadge: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#340D73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedGreenBadgeCircle: {
    width: 53,
    height: 53,
    borderRadius: 26.5,
    backgroundColor: '#37A970',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  orderStatusMainTitle: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '500',
    color: '#340D73',
    textAlign: 'center',
    marginTop: 16,
  },
  timelineSectionTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 24,
  },
  stepperBarRow: {
    width: 266,
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  stepBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBadgeGreen: {
    backgroundColor: '#37A970',
  },
  stepBadgeGray: {
    backgroundColor: '#BBBAC4',
  },
  stepBadgeYellow: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepDividerLine: {
    width: 43.33,
    height: 1,
    backgroundColor: '#E1E4EA',
  },
  timelineLabelsRow: {
    width: 311,
    maxWidth: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  timelineLabelCol: {
    alignItems: 'center',
    width: 65,
  },
  timelineStepName: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    color: '#0B1C56',
    textAlign: 'center',
  },
  timelineStepTime: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    color: '#BBBAC4',
    textAlign: 'center',
    marginTop: 2,
  },
  waitingDepositSection: {
    width: 311,
    maxWidth: '100%',
    marginTop: 24,
    gap: 4,
  },
  waitingDepositTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  waitingDepositBody: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
  },
  completedSentSection: {
    width: 311,
    maxWidth: '100%',
    marginTop: 28,
    gap: 4,
  },
  completedSentTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#0B1C56',
  },
  completedSentBody: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
  },
  noLongerSellingCard: {
    width: 311,
    maxWidth: '100%',
    height: 88,
    backgroundColor: '#FEF1F1',
    borderWidth: 1,
    borderColor: '#DC5355',
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    gap: 4,
  },
  noLongerSellingTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    color: '#DC5355',
  },
  noLongerSellingBody: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#5C688E',
    letterSpacing: -0.14,
  },
  doneActionBtn: {
    width: 311,
    maxWidth: '100%',
    height: 42,
    backgroundColor: '#340D73',
    borderRadius: 100000,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#7D00FF',
    shadowColor: '#7D00FF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  doneActionBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: -0.14,
  },
});
