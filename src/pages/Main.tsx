import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

import { WALLET_DAEGU_CHAIN } from '~/app/constant';
import page3 from '~/assets/svg/page3.svg';
import Carousel from '~/component/Carousel';
import History from '~/component/History';

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
      <QRCodeSVG
        fgColor={'#FF7A00'}
        value="https://reactjs.org/"
        imageSettings={{
          src: 'https://static.zpao.com/favicon.png',
          x: undefined,
          y: undefined,
          height: 32,
          width: 32,
          excavate: true,
        }}
      />
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
