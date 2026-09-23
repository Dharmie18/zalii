import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { ArrowUpFromLine, ArrowDownToLine, Clock } from 'lucide-react-native';
import { AppShell } from '../../components/AppShell';
import { useAuth, Transaction } from '../../contexts/AuthContext';
import { colors, radii } from '../../theme/tokens';

type FilterType = 'all' | 'crypto' | 'giftcard' | 'wallet';

function formatNGN(amount: number) {
  const whole = Math.floor(amount).toLocaleString('en-NG');
  const cents = (amount % 1).toFixed(2).slice(1);
  return `₦${whole}${cents}`;
}

export default function HistoryScreen() {
  const { transactions } = useAuth();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTransactions = transactions.filter((tx) => {
    if (filter === 'all') return true;
    return tx.category === filter;
  });

  const renderItem = ({ item }: { item: Transaction }) => {
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
        <Text style={styles.headerTitle}>History</Text>

        {/* Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterScroll}
          contentContainerStyle={styles.filterContainer}
        >
          {(['all', 'crypto', 'giftcard', 'wallet'] as const).map((cat) => {
            const isActive = filter === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.filterPill,
                  isActive && styles.activeFilterPill,
                ]}
                activeOpacity={0.8}
                onPress={() => setFilter(cat)}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.activeFilterText,
                  ]}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Transaction Timeline */}
        <View style={styles.listSection}>
          {filteredTransactions.length === 0 ? (
            <View style={styles.emptyState}>
              <Clock size={40} color={colors.textMuted} />
              <Text style={styles.emptyText}>No transaction history found</Text>
            </View>
          ) : (
            <FlatList
              data={filteredTransactions}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              scrollEnabled={false}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          )}
        </View>
      </ScrollView>
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
  filterScroll: {
    marginTop: 20,
  },
  filterContainer: {
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radii.full,
    backgroundColor: colors.bgSecondary,
  },
  activeFilterPill: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  activeFilterText: {
    color: colors.textWhite,
  },
  listSection: {
    marginTop: 24,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
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
