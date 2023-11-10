import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TransferHistory from '~/assets/page/History.svg';
import Table from '~/component/History';
import { useHistoryStore } from '~/store/history';

const HistoryPage = () => {
  const navigate = useNavigate();

  const history = useHistoryStore();

  const handleBack = () => {
    navigate('/main');
  };

  return (
    <Container>
      <img src={TransferHistory} alt="" />
      <Table histories={[]} />
      <BackButton onClick={handleBack} />
    </Container>
  );
};

export default HistoryPage;

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
