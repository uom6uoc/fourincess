import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Main from '~/assets/page/Main.svg';
import Carousel from '~/component/Carousel';
import useToken from '~/hooks/useToken';
import { useWalletInfoStore } from '~/store/walletInfo';
import promise from '~/utils/promise';

type CardData = {
  title: string;
  gu: string;
  createdAt: string;
  tokenId: string;
  name: string;
  type: 'normal' | 'company';
  amount: number;
};

const BASE_CARD_DATA: Omit<CardData, 'name' | 'type' | 'amount'> = {
  title: '디지털 신분증',
  gu: '수성구',
  createdAt: '23. 11. 09',
  tokenId: 'AND',
};

const MainPage = () => {
  const navigate = useNavigate();

  const didList = useWalletInfoStore((state) => state.list);

  const { balanceToken } = useToken();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cardData, setCardData] = React.useState<CardData[]>([]);

  const fetchData = async () => {
    if (didList.length < 1) return;

    const getBalance = didList.map((did) => {
      return balanceToken({ addr: did.address });
    });

    try {
      const newCardData = await promise.allResolved(getBalance);

      const cardData: CardData[] = didList.map((did, index) => {
        const target = newCardData.find((item) => {
          if (item.addr === did.address) {
            return item.balance;
          }
        });
        return {
          ...BASE_CARD_DATA,
          name: did.name,
          type: index === 0 ? 'normal' : 'company',
          amount: target.balance ?? 0,
        };
      });

      setCardData(cardData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  React.useEffect(() => {
    const fetchDataInterval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(fetchDataInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleApplyMembershipMove = () => {
    navigate('/apply-membership');
  };

  return (
    <Container>
      <img src={Main} />
      {cardData.length > 0 && <StyledCarousel cardData={cardData} />}
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
