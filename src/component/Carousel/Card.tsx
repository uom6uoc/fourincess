import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import iconCompany from '~/assets/svg/icon-company.svg';
import iconIndividual from '~/assets/svg/icon-individual.svg';
import iconPlus from '~/assets/svg/icon-plus.svg';
import iconScan from '~/assets/svg/icon-scan.svg';
import iconSwap from '~/assets/svg/icon-swap.svg';
import logoDaegu from '~/assets/svg/logo-daegu.svg';

interface Props {
  title: string;
  type: 'normal' | 'company';
  gu: string;
  name: string;
  createdAt: string;
  amount: number;
  tokenId: string;
}

const Card = ({ type, title, name, gu, createdAt, amount, tokenId }: Props) => {
  const navigate = useNavigate();

  const handleQrpageMove = () => {
    navigate('/did', { state: { type } });
  };

  const handleExchange = () => {
    console.log('handleExchange');
  };

  const handleCharge = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigate(`/charge?type=${type}`);
  };

  const handleHistoryMove = () => {
    navigate('/transfer/history');
  };

  return (
    <CardContainer>
      <IdCardContainer>
        <IdCardQrCode type={type} onClick={handleQrpageMove}>
          <img src={iconScan} />
        </IdCardQrCode>
        <IdCardHeader>
          <IdCardTitle>
            <span>{title}</span>
          </IdCardTitle>
          <IdCardTagBox>
            {type === 'normal' ? (
              <IdCardTag type={type}>
                <img src={iconIndividual} alt="" />
                <span>{'개인용'}</span>
              </IdCardTag>
            ) : (
              <IdCardTag type={type}>
                <img src={iconCompany} />
                <span>{'가맹용'}</span>
              </IdCardTag>
            )}
            {gu && (
              <IdCardTag type={type}>
                <span>{gu}</span>
              </IdCardTag>
            )}
          </IdCardTagBox>
        </IdCardHeader>
        <IdCardContent>
          <IdCardData>
            <IdCardDateTitle>
              <span>{'이름'}</span>
            </IdCardDateTitle>
            <IdCardDateValue>
              <span>{name}</span>
            </IdCardDateValue>
          </IdCardData>
          <IdCardData>
            <IdCardDateTitle>
              <span>{'발급일'}</span>
            </IdCardDateTitle>
            <IdCardDateValue>
              <span>{createdAt}</span>
            </IdCardDateValue>
          </IdCardData>
        </IdCardContent>
      </IdCardContainer>
      <TokenCardContainer onClick={handleHistoryMove}>
        <TokenCardHeader>
          <TokenCardTitle>
            <span>{'나의토큰'}</span>
          </TokenCardTitle>
          {type === 'normal' ? (
            <TokenCardMenu onClick={handleCharge}>
              <img src={iconPlus} />
              <span>{'충전하기'}</span>
            </TokenCardMenu>
          ) : (
            <TokenCardMenu onClick={handleExchange}>
              <img src={iconSwap} />
              <span>{'환전하기'}</span>
            </TokenCardMenu>
          )}
        </TokenCardHeader>
        <TokenCardContent>
          <TokenCardSymbol>
            <img src={logoDaegu} alt="" />
          </TokenCardSymbol>
          <TokenCardAmount>
            <span>{amount.toLocaleString()}</span>
            <span>{tokenId}</span>
          </TokenCardAmount>
        </TokenCardContent>
      </TokenCardContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  border-radius: 12px;
  background: #272739;
`;

const IdCardContainer = styled.div`
  position: relative;
  padding: 22px 22px 24px;
  border-radius: 12px;
  background: #fff;
`;

const IdCardQrCode = styled.div<{ type: 'normal' | 'company' }>`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 9px;
  bottom: 24px;
  right: 22px;
  border-radius: 12px;
  background-color: ${({ type }) =>
    type === 'normal' ? '#31A9FF' : '#FF7A00'};
  img {
    width: 36px;
    height: 36px;
  }
`;

const IdCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IdCardTitle = styled.div`
  span {
    color: #000;
    font-family: 'Pretendard';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.51px;
  }
`;

const IdCardTagBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const IdCardTag = styled.div<{ type: 'normal' | 'company' }>`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 12px;
  border: 1px solid ${({ type }) => (type === 'normal' ? '#31A9FF' : '#FF7A00')};
  span {
    vertical-align: bottom;
    color: ${({ type }) => (type === 'normal' ? '#31A9FF' : '#FF7A00')};
    text-align: center;
    font-family: 'Pretendard';
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }
`;

const IdCardContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 56px;
`;

const IdCardData = styled.div`
  display: flex;
  column-gap: 16px;
`;

const IdCardDateTitle = styled.div`
  width: 42px;
  span {
    color: #707070;
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

const IdCardDateValue = styled.div`
  span {
    color: #707070;
    font-family: 'Pretendard';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.48px;
  }
`;

const TokenCardContainer = styled.div`
  padding: 32px 22px 24px 21px;
`;

const TokenCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TokenCardTitle = styled.div`
  span {
    color: #fff;
    font-family: 'Pretendard';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.51px;
  }
`;

const TokenCardMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 10px;
  border-radius: 12px;
  border: 1px solid #fff;
  span {
    color: #fff;
    font-family: 'Pretendard';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const TokenCardContent = styled.div`
  margin-top: 39px;
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const TokenCardSymbol = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
`;

const TokenCardAmount = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  span {
    color: #fff;
    text-align: right;
    font-family: 'Pretendard';
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  :last-child {
    color: #fff;
    font-family: 'Pretendard';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
