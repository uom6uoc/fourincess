import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { WALLET_CUSTOMER } from '~/app/constant';

type WalletInfo = {
  name: string;
  address: string;
  privatekey: string;
};

interface State {
  user: WalletInfo;
  list: WalletInfo[];
}

interface Actions {
  addList: ({ name, address, privatekey }: WalletInfo) => void;
  updateUser: ({ name, address, privatekey }: WalletInfo) => void;
}

const initialState: State = {
  user: {
    name: WALLET_CUSTOMER.name,
    address: WALLET_CUSTOMER.address,
    privatekey: WALLET_CUSTOMER.privatekey,
  },
  list: [
    {
      name: WALLET_CUSTOMER.name,
      address: WALLET_CUSTOMER.address,
      privatekey: WALLET_CUSTOMER.privatekey,
    },
  ],
};

export const useWalletInfoStore = create<State & Actions>()(
  immer((set) => ({
    ...initialState,
    addList: ({ name, address, privatekey }) => {
      set((state) => {
        state.list.push({ name, address, privatekey });
      });
    },
    updateUser: ({ name, address, privatekey }) => {
      set((state) => {
        state.user = { name, address, privatekey };
        state.list[0] = { name, address, privatekey };
      });
    },
  }))
);