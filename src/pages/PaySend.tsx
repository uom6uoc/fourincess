import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { WALLET_STORE } from '~/app/constant';
import PaySend from '~/assets/page/PaySend.svg';
import useToken from '~/hooks/useToken';
import { useWalletInfoStore } from '~/store/walletInfo';

const PaySendPage = () => {
  const navigate = useNavigate();

  const user = useWalletInfoStore((state) => state.user);
  const { sendToken } = useToken();

  const handleSendCompleteMove = () => {
    sendToken({
      senderAddress: user.address,
      senderPrivateKey: user.privatekey,
      receiver: WALLET_STORE.address,
      amount: 10000,
    });
    navigate('/transfer/send/complete');
  };

  return (
    <Container>
      <img src={PaySend} alt="" />
      <SendCompleteMoveButton onClick={handleSendCompleteMove} />
    </Container>
  );
};

export default PaySendPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const SendCompleteMoveButton = styled.div`
  position: absolute;
  width: 214px;
  height: 72px;
  bottom: 136px;
  right: 24px;
`;
