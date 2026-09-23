import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { X } from 'lucide-react-native';
import { colors, radii } from '../theme/tokens';

interface AmountModalProps {
  visible: boolean;
  title: string;
  actionLabel: string;
  maxAmount?: number;
  onConfirm: (amount: number) => void;
  onClose: () => void;
}

export function AmountModal({
  visible,
  title,
  actionLabel,
  maxAmount,
  onConfirm,
  onClose,
}: AmountModalProps) {
  const [raw, setRaw] = useState('');
  const amount = parseFloat(raw) || 0;
  const isExceeded = maxAmount !== undefined && amount > maxAmount;
  const isValid = amount > 0 && !isExceeded;

  const handleConfirm = () => {
    if (!isValid) return;
    onConfirm(amount);
    setRaw('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.avoidingView}
          >
            <View style={styles.sheet}>
              {/* Header */}
              <View style={styles.header}>
                <View style={styles.headerSpacer} />
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                  <X size={18} color={colors.textPrimary} />
                </TouchableOpacity>
              </View>

              {/* Input Box */}
              <View style={styles.inputContainer}>
                <Text style={styles.currencySymbol}>₦</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.00"
                  placeholderTextColor={colors.textMuted}
                  keyboardType="decimal-pad"
                  value={raw}
                  onChangeText={setRaw}
                  autoFocus
                />
              </View>

              {isExceeded ? (
                <Text style={styles.errorText}>
                  Insufficient balance. Available: ₦{maxAmount?.toLocaleString('en-NG')}
                </Text>
              ) : null}

              {/* Submit Button */}
              <TouchableOpacity
                style={[
                  styles.submitBtn,
                  !isValid && styles.disabledBtn,
                ]}
                disabled={!isValid}
                onPress={handleConfirm}
              >
                <Text style={styles.submitBtnText}>{actionLabel}</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  avoidingView: {
    width: '100%',
  },
  sheet: {
    backgroundColor: colors.bgLight,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerSpacer: {
    width: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.bgSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primarySoft,
    borderRadius: radii.xl,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.bgSecondary,
  },
  currencySymbol: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textSecondary,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  errorText: {
    fontSize: 12,
    color: colors.destructive,
    marginTop: 8,
    marginLeft: 4,
  },
  submitBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: radii.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  disabledBtn: {
    opacity: 0.4,
    shadowOpacity: 0,
  },
  submitBtnText: {
    color: colors.textWhite,
    fontSize: 16,
    fontWeight: '700',
  },
});
