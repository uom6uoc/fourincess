import { QRCodeSVG } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { MOBILE_URL } from '~/app/constant';
import Did from '~/assets/page/Did.svg';
import logoDaegu from '~/assets/svg/logo-daegu.svg';

const DidPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { balanceToken } = useToken();

  const userType = location?.state?.type;

  const fgColor = userType === 'normal' ? '#31A9FF' : '#FF7A00';
  const sendType = userType === 'normal' ? 'transfer' : 'pay';

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
          fgColor={fgColor}
          value={`${MOBILE_URL}/${sendType}`}
          imageSettings={{
            src: logoDaegu,
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
