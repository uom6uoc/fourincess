import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Item = {
  id: string;
  value: string;
};

interface State {
  list: Item[];
}

interface Actions {
  add: (value: string) => void;
  remove: (id: string) => void;
  update: (id: string, value: string) => void;
}

const initialState: State = {
  list: [],
};

export const useBaseStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      ...initialState,
      add: (value) => {
        set((state) => {
          state.list.push({ id: nanoid(), value });
        });
      },
      update: (id, value) => {
        set((state) => {
          const list = get().list;
          const index = list.findIndex((item) => item.id === id);
          if (index === -1) return;

          state.list[index].value = value;
        });
      },
      remove: (id) => {
        set((state) => {
          const list = get().list;
          state.list = list.filter((item) => item.id !== id);
        });
      },
    })),
    {
      name: 'explorer-chain',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const getValueById = (id: string): string => {
  const { list } = useBaseStore.getState();
  const item = list.find((item) => item.id === id);
  return item?.value ?? '';
};
