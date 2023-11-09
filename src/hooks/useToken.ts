import axios from 'axios';

import { BASE_API_URL } from '~/app/config';
import {
  API_TOKEN,
  CHAIN,
  WALLET_DAEGU_CHAIN,
  TOKEN_CONTRACT_ADDRESS,
} from '~/app/constant';

const useToken = () => {
  const balanceToken = async ({ addr }: { addr: string }) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/token/balance`, {
        token: API_TOKEN,
        chain: CHAIN,
        cont_addr: TOKEN_CONTRACT_ADDRESS,
        addr: addr,
      });

      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

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
      cont_addr: TOKEN_CONTRACT_ADDRESS,
      sender: WALLET_DAEGU_CHAIN.address,
      sender_pkey: WALLET_DAEGU_CHAIN.privatekey,
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
      cont_addr: TOKEN_CONTRACT_ADDRESS,
      sender: senderAddress,
      sender_pkey: senderPrivateKey,
      receiver,
      amount,
    });
  };

  return { balanceToken, chargeToken, sendToken };
};

export default useToken;
