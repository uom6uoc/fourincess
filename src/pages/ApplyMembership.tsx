import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ApplyMembership from '~/assets/page/ApplyMembership.svg';

const ApplyMembershipPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/main');
  };

  const handleApply = () => {
    console.log('가맹 등록 로직');
    handleBack();
  };

  return (
    <Container>
      <img src={ApplyMembership} alt="" />
      <ApplyButton onClick={handleApply} />
      <BackButton onClick={handleBack} />
    </Container>
  );
};

export default ApplyMembershipPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const ApplyButton = styled.div`
  position: absolute;
  width: 342px;
  height: 72px;
  bottom: 52px;
  left: 24px;
`;

const BackButton = styled.div`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 64px;
  left: 21px;
`;
