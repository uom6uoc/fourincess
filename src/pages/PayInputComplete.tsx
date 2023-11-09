import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PayInputComplete from '~/assets/page/PayInputComplete.svg';

const PayInputCompletePage = () => {
  const navigate = useNavigate();

  const handleSendMove = () => {
    navigate('/pay/send');
  };

  return (
    <Container>
      <img src={PayInputComplete} alt="" />
      <SendMoveButton onClick={handleSendMove} />
    </Container>
  );
};

export default PayInputCompletePage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const SendMoveButton = styled.div`
  position: absolute;
  width: 342px;
  height: 72px;
  bottom: 52px;
  left: 24px;
`;
