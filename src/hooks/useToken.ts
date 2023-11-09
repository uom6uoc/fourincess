import axios from 'axios';
import { BASE_API_URL } from '~/app/config';
import {
  API_TOKEN,
  CHAIN,
  OWNER_WALLET,
  TOKEN_CONTRACT_ADDRESS,
} from '~/app/constant';

const useToken = () => {
  const chargeToken = ({
    amount,
    address,
  }: {
    amount: number;
    address: string;
  }) => {
    return axios.post(`${BASE_API_URL}/token/transfer`, {
      token: API_TOKEN,
      chain: CHAIN,
      cont_addr: TOKEN_CONTRACT_ADDRESS.AAA,
      sender: OWNER_WALLET.address,
      sender_pkey: OWNER_WALLET.privatekey,
      receiver: address,
      amount,
    });
  };

  const sendToken = ({
    senderAddress,
    senderPrivateKey,
    receiver,
    amount,
  }: {
    senderAddress: string;
    senderPrivateKey: string;
    receiver: string;
    amount: number;
  }) => {
    return axios.post(`${BASE_API_URL}/token/transfer`, {
      token: API_TOKEN,
      chain: CHAIN,
      cont_addr: TOKEN_CONTRACT_ADDRESS.AAA,
      sender: senderAddress,
      sender_pkey: senderPrivateKey,
      receiver,
      amount,
    });
  };

  return { chargeToken, sendToken };
};

export default useToken;
