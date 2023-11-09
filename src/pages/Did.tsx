import { QRCodeSVG } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Did from '~/assets/page/Did.svg';

const DidPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const userType = location?.state?.type;

  const handleMainPageMove = () => {
    navigate('/main');
  };

  return (
    <Container>
      <img src={Did} alt="" />
      <QrBox>
        <QRCodeSVG
          width={234}
          height={234}
          fgColor={userType === 'normal' ? '#31A9FF' : '#FF7A00'}
          value={`http://192.168.0.108:3000/pay?did=~~~`}
          imageSettings={{
            src: 'https://static.zpao.com/favicon.png',
            x: undefined,
            y: undefined,
            height: 32,
            width: 32,
            excavate: true,
          }}
        />
      </QrBox>
      <BackButton onClick={handleMainPageMove} />
    </Container>
  );
};

export default DidPage;

const Container = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  img {
    display: block;
  }
`;

const QrBox = styled.div`
  position: absolute;
  background-color: red;
  top: 238px;
  left: 78px;
`;

const BackButton = styled.div`
  position: absolute;
  width: 33px;
  height: 33px;
  top: 64px;
  left: 21px;
`;
