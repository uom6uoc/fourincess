import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import CreateAccountCertification from '~/assets/page/CreateAccountCertification.svg';

const CreateAccountCertificationPage = () => {
  const navigate = useNavigate();

  const handleMainMove = () => {
    navigate('/main');
  };
  return (
    <Container>
      <img src={CreateAccountCertification} alt="" />
      <NextButton onClick={handleMainMove} />
    </Container>
  );
};

export default CreateAccountCertificationPage;

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
