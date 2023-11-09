import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Charge from '~/assets/page/Charge.svg';

const ChargePage = () => {
  const navigate = useNavigate();

  const handleCharge = () => {
    console.log('충전로직');
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
