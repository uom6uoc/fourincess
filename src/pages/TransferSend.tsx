import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TransferSend from '~/assets/page/TransferSend.svg';

const TransferSendPage = () => {
  const navigate = useNavigate();

  const handleSendCompleteMove = () => {
    navigate('/transfer/send/complete');
  };

  return (
    <Container>
      <img src={TransferSend} alt="" />
      <SendCompleteMoveButton onClick={handleSendCompleteMove} />
    </Container>
  );
};

export default TransferSendPage;

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
