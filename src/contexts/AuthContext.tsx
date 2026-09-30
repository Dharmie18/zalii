import React, { createContext, useContext, useState } from 'react';

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob?: string;
  nationality?: string;
  password?: string;
}

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  label: string;
  amount: number;
  date: string;
  category?: 'crypto' | 'giftcard' | 'wallet';
}

interface AuthContextType {
  userData: UserData;
  balance: number;
  transactions: Transaction[];
  addMoney: (amount: number, label?: string) => void;
  withdraw: (amount: number, label?: string) => void;
  updateUserData: (data: Partial<UserData>) => void;
  signOut: () => void;
  deleteAccount: () => Promise<{ ok: boolean; error?: string }>;
}

const defaultUser: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
};

const initialTransactions: Transaction[] = [
  {
    id: 'tx-1',
    type: 'credit',
    label: 'Sold Apple Giftcard',
    amount: 45000,
    date: 'Today, 2:15 PM',
    category: 'giftcard',
  },
  {
    id: 'tx-2',
    type: 'debit',
    label: 'Withdrawal to GTBank',
    amount: 15000,
    date: 'Yesterday, 6:40 PM',
    category: 'wallet',
  },
  {
    id: 'tx-3',
    type: 'credit',
    label: 'Sold 0.002 BTC',
    amount: 120000,
    date: '28 Aug 2026',
    category: 'crypto',
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUser);
  const [balance, setBalance] = useState<number>(150000.50);
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addMoney = (amount: number, label = 'Deposit') => {
    setBalance((prev) => prev + amount);
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'credit',
      label,
      amount,
      date: 'Just now',
      category: 'wallet',
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const withdraw = (amount: number, label = 'Withdrawal') => {
    if (amount > balance) return;
    setBalance((prev) => prev - amount);
    const newTx: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'debit',
      label,
      amount,
      date: 'Just now',
      category: 'wallet',
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const signOut = () => {
    setUserData({ firstName: '', lastName: '', email: '', phone: '' });
  };

  const deleteAccount = async () => {
    signOut();
    return { ok: true };
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        balance,
        transactions,
        addMoney,
        withdraw,
        updateUserData,
        signOut,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
