import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PaySend from '~/assets/page/PaySend.svg';

const PaySendPage = () => {
  const navigate = useNavigate();

  const handleSendCompleteMove = () => {
    navigate('/pay/send/complete');
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
