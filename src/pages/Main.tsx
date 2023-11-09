import Carousel from '~/component/Carousel';
import QRCode from 'qrcode.react';
import { WALLET_1 } from '~/app/constant';
import History from '~/component/History';
import styled from 'styled-components';
import page3 from '~/assets/svg/page3.svg';

const HISTORIES: {
  createdAt: string;
  name: string;
  amount: string;
  type: 'send' | 'receive';
}[] = [
  {
    createdAt: '23. 11. 03',
    name: '대구치킨',
    amount: '30,000',
    type: 'send',
  },
  {
    createdAt: '23. 11. 02',
    name: '김밥천국',
    amount: '10,400',
    type: 'send',
  },
  {
    createdAt: '23. 11. 01',
    name: '대구패션',
    amount: '98,000',
    type: 'send',
  },
  {
    createdAt: '23. 10. 28',
    name: '김대구',
    amount: '500,000',
    type: 'receive',
  },
];

const MainPage = () => {
  return (
    <Container>
      <img src={page3} />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  position: relative;
  img {
    display: block;
    position: absolute;
    /* top: -53px; */
  }
`;
