import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Plus, ArrowUpFromLine, ArrowDownToLine } from 'lucide-react-native';
import { AppShell } from '../../components/AppShell';
import { AmountModal } from '../../components/AmountModal';
import { useAuth, Transaction } from '../../contexts/AuthContext';
import { colors, radii } from '../../theme/tokens';

function formatNGN(amount: number) {
  const whole = Math.floor(amount).toLocaleString('en-NG');
  const cents = (amount % 1).toFixed(2).slice(1);
  return `₦${whole}${cents}`;
}

export default function WalletScreen() {
  const { balance, transactions, addMoney, withdraw } = useAuth();
  const [modalType, setModalType] = useState<'add' | 'withdraw' | null>(null);

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    const isDebit = item.type === 'debit';

    return (
      <View style={styles.txCard}>
        <View
          style={[
            styles.iconCircle,
            {
              backgroundColor: isDebit
                ? 'rgba(239, 68, 68, 0.1)'
                : 'rgba(16, 185, 129, 0.1)',
            },
          ]}
        >
          {isDebit ? (
            <ArrowUpFromLine size={18} color={colors.destructive} />
          ) : (
            <ArrowDownToLine size={18} color={colors.success} />
          )}
        </View>

        <View style={styles.txInfo}>
          <Text style={styles.txLabel} numberOfLines={1}>
            {item.label}
          </Text>
          <Text style={styles.txDate}>{item.date}</Text>
        </View>

        <Text
          style={[
            styles.txAmount,
            { color: isDebit ? colors.destructive : colors.success },
          ]}
        >
          {isDebit ? '-' : '+'}{formatNGN(item.amount)}
        </Text>
      </View>
    );
  };

  return (
    <AppShell withNav>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Wallet</Text>

        {/* Balance Card Banner */}
        <LinearGradient
          colors={colors.gradients.walletBanner}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.balanceCard}
        >
          <Text style={styles.balanceLabel}>NGN wallet balance</Text>
          <Text style={styles.balanceAmount}>{formatNGN(balance)}</Text>

          <View style={styles.cardActionsRow}>
            <TouchableOpacity
              style={styles.addMoneyBtn}
              activeOpacity={0.8}
              onPress={() => setModalType('add')}
            >
              <Plus size={16} color={colors.textWhite} />
              <Text style={styles.addMoneyText}>Add money</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.withdrawBtn}
              activeOpacity={0.8}
              onPress={() => setModalType('withdraw')}
            >
              <ArrowUpFromLine size={16} color={colors.primary} />
              <Text style={styles.withdrawText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Activity Section */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Recent activity</Text>

          {transactions.length === 0 ? (
            <View style={styles.emptyState}>
              <ArrowDownToLine size={36} color={colors.textMuted} />
              <Text style={styles.emptyText}>No transactions yet</Text>
            </View>
          ) : (
            <FlatList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={renderTransactionItem}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
        </View>
      </ScrollView>

      {/* Modals */}
      <AmountModal
        visible={modalType === 'add'}
        title="Add money"
        actionLabel="Add money"
        onConfirm={(amt) => addMoney(amt, 'Wallet top up')}
        onClose={() => setModalType(null)}
      />

      <AmountModal
        visible={modalType === 'withdraw'}
        title="Withdraw"
        actionLabel="Withdraw"
        maxAmount={balance}
        onConfirm={(amt) => withdraw(amt, 'Withdrawal to bank')}
        onClose={() => setModalType(null)}
      />
    </AppShell>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  balanceCard: {
    marginTop: 20,
    borderRadius: radii.xxl,
    padding: 24,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },
  balanceLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  balanceAmount: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.textWhite,
    marginTop: 8,
  },
  cardActionsRow: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 12,
  },
  addMoneyBtn: {
    flex: 1,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  addMoneyText: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: '600',
  },
  withdrawBtn: {
    flex: 1,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: colors.bgLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  withdrawText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  activitySection: {
    marginTop: 28,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 14,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  txCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.bgSecondary,
    borderRadius: radii.xl,
    padding: 14,
    gap: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txInfo: {
    flex: 1,
  },
  txLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  txDate: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  txAmount: {
    fontSize: 14,
    fontWeight: '700',
  },
  separator: {
    height: 8,
  },
});
