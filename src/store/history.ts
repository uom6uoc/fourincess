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
  list: [Item[]];
}

interface Actions {
  addHistory: ({
    index,
    name,
    amount,
  }: {
    index: number;
    name: string;
    amount: number;
  }) => void;
}

const initHistory = {
  createdAt: '23. 11. 09',
  name: 'DID 생성',
  amount: 1,
};

const initialState: State = {
  list: [[initHistory]],
};

export const useHistoryStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      addHistory: ({ index, name, amount }) => {
        set((state) => {
          state.list[index].push({ createdAt: '23. 11. 10', name, amount });
        });
      },
    })),
    {
      name: 'abb-history',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
