import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CreateAccount from '~/assets/page/CreateAccount.svg';

const CreateAccountPage = () => {
  const navigate = useNavigate();

  const handleCreateAccountCertificationMove = () => {
    navigate('/create-account/certification');
  };

  return (
    <Container>
      <img src={CreateAccount} alt="" />
      <NextButton onClick={handleCreateAccountCertificationMove} />
    </Container>
  );
};

export default CreateAccountPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
    position: absolute;
    /* top: -53px; */
  }
`;

const NextButton = styled.button`
  position: absolute;
  width: 342px;
  height: 72px;
  bottom: 52px;
  right: 24px;
  z-index: 1;
`;
