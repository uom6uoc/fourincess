import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { WALLET_CUSTOMER } from '~/app/constant';
import Charge from '~/assets/page/Charge.svg';
import useToken from '~/hooks/useToken';
import { useHistoryStore } from '~/store/history';
import { useWalletInfoStore } from '~/store/walletInfo';

const ChargePage = () => {
  const navigate = useNavigate();

  const user = useWalletInfoStore((state) => state.user);
  const addHistory = useHistoryStore((state) => state.addHistory);

  const { chargeToken } = useToken();

  const handleCharge = () => {
    chargeToken({ amount: 10000, address: user.address });

    addHistory({
      address: user.address,
      name: WALLET_CUSTOMER.name,
      amount: 10000,
    });

    navigate('/main');
  };

  return (
    <Container>
      <img src={Charge} alt="" />
      <ChargeButton onClick={handleCharge} />
    </Container>
  );
};

export default ChargePage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const ChargeButton = styled.div`
  position: absolute;
  width: 342px;
  height: 72px;
  bottom: 52px;
  left: 24px;
`;
