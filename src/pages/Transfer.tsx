import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Transfer from '~/assets/page/Transfer.svg';

const TransferPage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/transfer/input/compelete');
  };

  return (
    <Container>
      <img src={Transfer} alt="" />
      <ConfirmButton onClick={handleConfirm} />
    </Container>
  );
};

export default TransferPage;

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
  bottom: 52px;
  left: 24px;
`;
