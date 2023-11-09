import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TransferInputComplete from '~/assets/page/TransferInputComplete.svg';

const TransferInputCompletePage = () => {
  const navigate = useNavigate();

  const handleSendMove = () => {
    navigate('/transfer/send');
  };

  return (
    <Container>
      <img src={TransferInputComplete} alt="" />
      <SendMoveButton onClick={handleSendMove} />
    </Container>
  );
};

export default TransferInputCompletePage;

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
