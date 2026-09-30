import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import Svg, { Path, Rect, G } from 'react-native-svg';

// Figma Icons
function GiftCardIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 4C19.7652 3.99996 20.5015 4.29233 21.0583 4.81728C21.615 5.34224 21.9501 6.06011 21.995 6.824L22 7V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20 3.49849 19.7077 2.94174 19.1827C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7C1.99996 6.23479 2.29233 5.49849 2.81728 4.94174C3.34224 4.38499 4.06011 4.04989 4.824 4.005L5 4H19ZM12.354 8.992L12 9.604L11.646 8.992C11.4753 8.69623 11.248 8.43699 10.9771 8.22908C10.7062 8.02116 10.397 7.86865 10.0672 7.78024C9.73735 7.69184 9.39332 7.66928 9.05476 7.71385C8.7162 7.75842 8.38973 7.86924 8.094 8.04L7.501 8.383C7.19221 8.56115 6.92155 8.7984 6.70447 9.08118C6.48739 9.36396 6.32814 9.68674 6.23584 10.0311C6.14353 10.3754 6.11997 10.7346 6.1665 11.088C6.21302 11.4415 6.32873 11.7823 6.507 12.091C6.81828 12.6302 7.27633 13.0698 7.82782 13.3588C8.3793 13.6477 9.00151 13.774 9.622 13.723L8.654 15.4C8.52348 15.6296 8.48906 15.9014 8.55825 16.1563C8.62744 16.4111 8.79462 16.6282 9.02331 16.7603C9.25199 16.8923 9.52362 16.9285 9.77892 16.861C10.0342 16.7935 10.2524 16.6278 10.386 16.4L12 13.605L13.614 16.4C13.6792 16.5146 13.7664 16.6153 13.8706 16.6961C13.9749 16.7769 14.094 16.8363 14.2213 16.8708C14.3486 16.9054 14.4814 16.9144 14.6122 16.8974C14.743 16.8804 14.8691 16.8377 14.9833 16.7718C15.0975 16.7058 15.1976 16.6179 15.2777 16.5132C15.3578 16.4084 15.4164 16.2888 15.4501 16.1613C15.4838 16.0338 15.492 15.9009 15.4741 15.7703C15.4562 15.6396 15.4127 15.5138 15.346 15.4L14.378 13.723C14.9985 13.774 15.6207 13.6477 16.1722 13.3588C16.7237 13.0698 17.1817 12.6302 17.493 12.091C17.6713 11.7823 17.787 11.4415 17.8335 11.088C17.88 10.7346 17.8565 10.3754 17.7642 10.0311C17.6719 9.68674 17.5126 9.36396 17.2955 9.08118C17.0785 8.7984 16.8078 8.56115 16.499 8.383L15.906 8.04C15.6103 7.86924 15.2838 7.75842 14.9452 7.71385C14.6067 7.66928 14.2626 7.69184 13.9328 7.78024C13.603 7.86865 13.2938 8.02116 13.0229 8.22908C12.752 8.43699 12.5247 8.69623 12.354 8.992ZM14.817 9.73L14.905 9.772L15.499 10.115C15.5803 10.1618 15.6517 10.2242 15.7089 10.2986C15.7661 10.3731 15.808 10.458 15.8324 10.5487C15.8567 10.6393 15.8629 10.7339 15.8507 10.8269C15.8384 10.92 15.808 11.0097 15.761 11.091C15.6017 11.3667 15.3459 11.5735 15.0429 11.6714C14.74 11.7693 14.4115 11.7513 14.121 11.621L14.004 11.561L13.386 11.204L14.086 9.992C14.1489 9.88289 14.2446 9.79636 14.3595 9.74467C14.4744 9.69298 14.6026 9.67875 14.726 9.704L14.817 9.73ZM9.914 9.992L10.614 11.204L9.995 11.561C9.69978 11.7314 9.34899 11.7776 9.01973 11.6894C8.69046 11.6013 8.40965 11.3861 8.239 11.091C8.19204 11.0097 8.16157 10.92 8.14932 10.8269C8.13708 10.7339 8.1433 10.6393 8.16764 10.5487C8.19197 10.458 8.23394 10.3731 8.29114 10.2986C8.34834 10.2242 8.41966 10.1618 8.501 10.115L9.094 9.772C9.16228 9.73256 9.23766 9.70696 9.31583 9.69667C9.39401 9.68639 9.47344 9.69161 9.5496 9.71204C9.62576 9.73247 9.69714 9.76771 9.75966 9.81575C9.82219 9.86379 9.87463 9.92368 9.914 9.992Z"
        fill="#340D73"
      />
    </Svg>
  );
}

function DropdownIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.47133 10.4712C8.34631 10.5962 8.17677 10.6664 7.99999 10.6664C7.82322 10.6664 7.65368 10.5962 7.52866 10.4712L3.75733 6.6999C3.69365 6.63841 3.64287 6.56484 3.60793 6.48351C3.57299 6.40217 3.5546 6.31469 3.55383 6.22617C3.55306 6.13765 3.56993 6.04986 3.60345 5.96793C3.63697 5.886 3.68647 5.81157 3.74906 5.74897C3.81166 5.68638 3.88609 5.63688 3.96803 5.60336C4.04996 5.56983 4.13774 5.55297 4.22626 5.55374C4.31478 5.55451 4.40226 5.5729 4.4836 5.60784C4.56493 5.64277 4.6385 5.69356 4.69999 5.75724L7.99999 9.05724L11.3 5.75724C11.4257 5.6358 11.5941 5.5686 11.7689 5.57012C11.9437 5.57164 12.1109 5.64175 12.2345 5.76536C12.3581 5.88896 12.4283 6.05617 12.4298 6.23097C12.4313 6.40577 12.3641 6.57417 12.2427 6.6999L8.47133 10.4712Z"
        fill="#340D73"
      />
    </Svg>
  );
}

function TotalAmountInfoIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8.00001 1.3335C11.682 1.3335 14.6667 4.31816 14.6667 8.00016C14.6667 11.6822 11.682 14.6668 8.00001 14.6668C4.31801 14.6668 1.33334 11.6822 1.33334 8.00016C1.33334 4.31816 4.31801 1.3335 8.00001 1.3335ZM7.99334 6.66683H7.33334C7.16342 6.66702 6.99999 6.73208 6.87643 6.84873C6.75287 6.96537 6.67852 7.1248 6.66856 7.29443C6.6586 7.46405 6.71379 7.63108 6.82285 7.76138C6.93191 7.89169 7.08661 7.97543 7.25534 7.9955L7.33334 8.00016V11.3268C7.33334 11.6735 7.59601 11.9602 7.93334 11.9962L8.00668 12.0002H8.33334C8.47355 12.0002 8.61019 11.956 8.72383 11.8738C8.83747 11.7917 8.92233 11.6759 8.96634 11.5427C9.01034 11.4096 9.01126 11.266 8.96895 11.1323C8.92664 10.9987 8.84326 10.8817 8.73068 10.7982L8.66668 10.7562V7.34016C8.66668 6.9935 8.40401 6.70683 8.06668 6.67083L7.99334 6.66683ZM8.00001 4.66683C7.8232 4.66683 7.65363 4.73707 7.52861 4.86209C7.40358 4.98712 7.33334 5.15668 7.33334 5.3335C7.33334 5.51031 7.40358 5.67988 7.52861 5.8049C7.52861 5.92992 7.8232 6.00016 8.00001 6.00016C8.17682 6.00016 8.34639 5.92992 8.47141 5.8049C8.59644 5.67988 8.66668 5.51031 8.66668 5.3335C8.66668 5.15668 8.59644 4.98712 8.47141 4.86209C8.34639 4.73707 8.17682 4.66683 8.00001 4.66683Z"
        fill="#768498"
      />
    </Svg>
  );
}

function NigerianFlagIcon() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#flagClip)">
        <Rect width="8" height="24" fill="#6DA544" />
        <Rect x="8" width="8" height="24" fill="#EEEEEE" />
        <Rect x="16" width="8" height="24" fill="#6DA544" />
      </G>
    </Svg>
  );
}

function CloseCrossIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M12 4L4 12M4 4L12 12"
        stroke="#340D73"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

interface BuyGiftcardModalProps {
  visible: boolean;
  onClose: () => void;
  onProceed?: (details: {
    country: string;
    cardType: string;
    amount: number;
    quantity: number;
    totalAmount: number;
  }) => void;
}

export function BuyGiftcardModal({
  visible,
  onClose,
  onProceed,
}: BuyGiftcardModalProps) {
  const [country, setCountry] = useState('Nigeria');
  const [cardType, setCardType] = useState('Playstation');
  const [amount, setAmount] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);

  // Active Picker Modal State
  const [pickerType, setPickerType] = useState<
    'country' | 'cardType' | 'amount' | 'quantity' | null
  >(null);

  const countries = ['Nigeria', 'United States', 'United Kingdom', 'Canada', 'Ghana'];
  const cardTypes = [
    'Playstation',
    'Apple / iTunes',
    'Steam Wallet',
    'Amazon',
    'Google Play',
    'Razer Gold',
    'Xbox',
  ];
  const amounts = [25, 50, 100, 200, 500];
  const quantities = [1, 2, 3, 4, 5, 10];

  // Dynamic fee calculation (e.g. 10% processing fee as shown in Figma: $100 -> $110.00)
  const totalUsd = amount * quantity * 1.1;

  const handleProceed = () => {
    if (onProceed) {
      onProceed({
        country,
        cardType,
        amount,
        quantity,
        totalAmount: totalUsd,
      });
    } else {
      Alert.alert(
        'Order Placed',
        `Purchasing ${quantity}x ${cardType} ($${amount}) for $${totalUsd.toFixed(2)}`
      );
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.scrim}>
        <View style={styles.modalCard}>
          {/* Close Button Circle (Frame 2147227133) */}
          <TouchableOpacity
            style={styles.closeBtnCircle}
            activeOpacity={0.8}
            onPress={onClose}
          >
            <CloseCrossIcon />
          </TouchableOpacity>

          {/* Header Title & Subtitle */}
          <Text style={styles.headerTitle}>Buy giftcard</Text>
          <Text style={styles.headerSubtitle}>
            Fill information about the giftcard you would like to get
          </Text>

          {/* Form Fields Stack (Frame 2147230071) */}
          <View style={styles.formStack}>
            {/* 1. Country Selector (Frame 9611) */}
            <TouchableOpacity
              style={styles.fieldRow}
              activeOpacity={0.85}
              onPress={() => setPickerType('country')}
            >
              <View style={styles.leftIconBox}>
                <NigerianFlagIcon />
              </View>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>Country</Text>
                <Text style={styles.fieldValue}>{country}</Text>
              </View>
              <DropdownIcon />
            </TouchableOpacity>

            {/* 2. Giftcard Type (Frame 2147227134) */}
            <TouchableOpacity
              style={styles.fieldRow}
              activeOpacity={0.85}
              onPress={() => setPickerType('cardType')}
            >
              <View style={styles.leftIconBox}>
                <GiftCardIcon />
              </View>
              <View style={styles.fieldContent}>
                <Text style={styles.fieldLabel}>Giftcard type</Text>
                <Text style={styles.fieldValue}>{cardType}</Text>
              </View>
              <DropdownIcon />
            </TouchableOpacity>

            {/* 3. Amount Selector (Frame 2147227135) */}
            <TouchableOpacity
              style={styles.fieldRow}
              activeOpacity={0.85}
              onPress={() => setPickerType('amount')}
            >
              <View style={styles.fieldContentNoIcon}>
                <Text style={styles.fieldLabel}>Amount</Text>
                <Text style={styles.fieldValue}>${amount}</Text>
              </View>
              <DropdownIcon />
            </TouchableOpacity>

            {/* 4. Select Quantity (Frame 2147227136) */}
            <TouchableOpacity
              style={styles.fieldRow}
              activeOpacity={0.85}
              onPress={() => setPickerType('quantity')}
            >
              <View style={styles.fieldContentNoIcon}>
                <Text style={styles.fieldLabel}>Select quantity</Text>
                <Text style={styles.fieldValue}>{quantity}</Text>
              </View>
              <DropdownIcon />
            </TouchableOpacity>
          </View>

          {/* Total Amount Card (Frame 2147230070) */}
          <View style={styles.totalAmountCard}>
            <View style={styles.totalHeaderRow}>
              <Text style={styles.totalLabel}>Total amount</Text>
              <TotalAmountInfoIcon />
            </View>
            <Text style={styles.totalValue}>${totalUsd.toFixed(2)}</Text>
          </View>

          {/* Proceed Button (_Button Base) */}
          <TouchableOpacity
            style={styles.proceedBtn}
            activeOpacity={0.85}
            onPress={handleProceed}
          >
            <Text style={styles.proceedBtnText}>Proceed</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamic Selector Action Sheet */}
        {pickerType ? (
          <Modal transparent animationType="fade" visible={true} onRequestClose={() => setPickerType(null)}>
            <TouchableOpacity
              style={styles.pickerOverlay}
              activeOpacity={1}
              onPress={() => setPickerType(null)}
            >
              <View style={styles.pickerSheet}>
                <Text style={styles.pickerTitle}>
                  {pickerType === 'country' && 'Select Country'}
                  {pickerType === 'cardType' && 'Select Giftcard Type'}
                  {pickerType === 'amount' && 'Select Amount ($)'}
                  {pickerType === 'quantity' && 'Select Quantity'}
                </Text>
                <ScrollView style={{ maxHeight: 280 }}>
                  {pickerType === 'country' &&
                    countries.map((c) => (
                      <TouchableOpacity
                        key={c}
                        style={styles.pickerOption}
                        onPress={() => {
                          setCountry(c);
                          setPickerType(null);
                        }}
                      >
                        <Text style={[styles.pickerOptionText, country === c && styles.pickerOptionSelected]}>
                          {c}
                        </Text>
                      </TouchableOpacity>
                    ))}

                  {pickerType === 'cardType' &&
                    cardTypes.map((t) => (
                      <TouchableOpacity
                        key={t}
                        style={styles.pickerOption}
                        onPress={() => {
                          setCardType(t);
                          setPickerType(null);
                        }}
                      >
                        <Text style={[styles.pickerOptionText, cardType === t && styles.pickerOptionSelected]}>
                          {t}
                        </Text>
                      </TouchableOpacity>
                    ))}

                  {pickerType === 'amount' &&
                    amounts.map((a) => (
                      <TouchableOpacity
                        key={a}
                        style={styles.pickerOption}
                        onPress={() => {
                          setAmount(a);
                          setPickerType(null);
                        }}
                      >
                        <Text style={[styles.pickerOptionText, amount === a && styles.pickerOptionSelected]}>
                          ${a}
                        </Text>
                      </TouchableOpacity>
                    ))}

                  {pickerType === 'quantity' &&
                    quantities.map((q) => (
                      <TouchableOpacity
                        key={q}
                        style={styles.pickerOption}
                        onPress={() => {
                          setQuantity(q);
                          setPickerType(null);
                        }}
                      >
                        <Text style={[styles.pickerOptionText, quantity === q && styles.pickerOptionSelected]}>
                          {q}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </TouchableOpacity>
          </Modal>
        ) : null}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(39, 45, 52, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
  modalCard: {
    width: 343,
    height: 686,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    position: 'relative',
    alignItems: 'center',
  },
  closeBtnCircle: {
    position: 'absolute',
    right: 16,
    top: 20,
    width: 32,
    height: 32,
    borderRadius: 10000,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  headerTitle: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#0B1C56',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#5C688E',
    textAlign: 'center',
    maxWidth: 292,
    marginTop: 20,
    marginBottom: 24,
  },
  formStack: {
    width: 311,
    gap: 18,
    marginBottom: 20,
  },
  fieldRow: {
    width: 311,
    height: 68,
    backgroundColor: '#FEFEFE',
    borderWidth: 0.5,
    borderColor: '#340D73',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  leftIconBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fieldContent: {
    flex: 1,
    gap: 4,
  },
  fieldContentNoIcon: {
    flex: 1,
    gap: 4,
  },
  fieldLabel: {
    fontSize: 14,
    lineHeight: 18,
    color: '#768498',
    letterSpacing: -0.09,
  },
  fieldValue: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
    color: '#091748',
    letterSpacing: -0.14,
  },
  totalAmountCard: {
    width: 311,
    height: 64,
    backgroundColor: '#F6F1FD',
    borderRadius: 12,
    padding: 12,
    gap: 4,
    justifyContent: 'center',
    marginBottom: 24,
  },
  totalHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  totalLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#768498',
    lineHeight: 15,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 20,
    color: '#340D73',
    letterSpacing: -0.2,
  },
  proceedBtn: {
    width: 311,
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
  },
  proceedBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.14,
  },
  // Picker Overlay
  pickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  pickerSheet: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
  },
  pickerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0B1C56',
    marginBottom: 16,
    textAlign: 'center',
  },
  pickerOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  pickerOptionText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
  },
  pickerOptionSelected: {
    color: '#340D73',
    fontWeight: '700',
  },
});
