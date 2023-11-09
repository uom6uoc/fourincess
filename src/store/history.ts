import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Item = {
  createdAt: string;
  name: string;
  amount: number;
};

interface State {
  list: Item[];
}

interface Actions {
  add: ({ name, amount }: { name: string; amount: number }) => void;
}

const initialState: State = {
  list: [],
};

export const useHistoryStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      add: ({ name, amount }) => {
        set((state) => {
          state.list.push({ createdAt: '23. 11. 10', name, amount });
        });
      },
    })),
    {
      name: 'abb-history',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
