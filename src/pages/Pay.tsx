import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Pay from '~/assets/page/Pay.svg';

const PayPage = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/pay/input/compelete');
  };

  return (
    <Container>
      <img src={Pay} alt="" />
      <ConfirmButton onClick={handleConfirm} />
    </Container>
  );
};

export default PayPage;

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
