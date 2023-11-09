import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Main from '~/assets/page/Main.svg';
import Carousel from '~/component/Carousel';

const CARD_DATA: {
  title: string;
  name: string;
  gu: string;
  type: 'normal' | 'company';
  createdAt: string;
  amount: number;
  tokenId: string;
}[] = [
  {
    title: '디지털 신분증',
    name: '김대구',
    gu: '수성구',
    type: 'normal',
    createdAt: '23. 11. 09',
    amount: 100000,
    tokenId: 'AND',
  },
  {
    title: '나의 토큰',
    name: '대구치킨',
    gu: '달서구',
    type: 'company',
    createdAt: '23. 11. 09',
    amount: 100000,
    tokenId: 'AND',
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleApplyMembershipMove = () => {
    navigate('/apply-membership');
  };

  return (
    <Container>
      <img src={Main} />
      <StyledCarousel cardData={CARD_DATA} />
      <ApplyMembershipMoveButton onClick={handleApplyMembershipMove} />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  overflow: hidden;
  img {
    display: block;
  }
`;

const StyledCarousel = styled(Carousel)`
  position: absolute;
  top: 119px;
  left: 20px;
`;

const ApplyMembershipMoveButton = styled.div`
  position: absolute;
  width: 60px;
  height: 80px;
  bottom: 27px;
  right: 51px;
`;
