import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PaySendComplete from '~/assets/page/PaySendComplete.svg';

const PaySendCompletePage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/main');
  };

  return (
    <Container>
      <img src={PaySendComplete} alt="" />
      <ConfirmButton onClick={handleConfirm} />
    </Container>
  );
};

export default PaySendCompletePage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const ConfirmButton = styled.div`
  position: absolute;
  width: 342px;
  height: 72px;
  bottom: 136px;
  left: 24px;
`;
