import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TransferHistory from '~/assets/page/TransferHistory.svg';

const TransferHistoryPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/main');
  };
  return (
    <Container>
      <img src={TransferHistory} alt="" />
      <BackButton onClick={handleBack} />
    </Container>
  );
};

export default TransferHistoryPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const BackButton = styled.div`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 64px;
  left: 21px;
`;
