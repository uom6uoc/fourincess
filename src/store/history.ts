import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { WALLET_BOSS, WALLET_CUSTOMER } from '~/app/constant';

type Item = {
  createdAt: string;
  name: string;
  amount: number;
};

interface State {
  list: {
    [address: string]: Item[];
  };
}

interface Actions {
  addHistory: ({
    address,
    name,
    amount,
  }: {
    address: string;
    name: string;
    amount: number;
  }) => void;
}

const initHistory = {
  createdAt: '23. 11. 09',
  name: 'DID 생성',
  amount: 1,
};

const isBoss = localStorage.getItem('isBoss');
const initWallet = isBoss ? WALLET_BOSS : WALLET_CUSTOMER;

const initialState: State = {
  list: {
    [initWallet.address]: [initHistory],
  },
};

export const useHistoryStore = create<State & Actions>()(
  persist(
    immer((set) => ({
      ...initialState,
      addHistory: ({ address, name, amount }) => {
        set((state) => {
          state.list[address].push({ createdAt: '23. 11. 10', name, amount });
        });
      },
    })),
    {
      name: 'abb-history',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
