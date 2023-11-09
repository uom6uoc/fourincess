import styled, { css } from 'styled-components';

interface Props {
  histories: {
    createdAt: string;
    name: string;
    amount: string;
    type: 'send' | 'receive';
  }[];
}

const History = ({ histories }: Props) => {
  const diff = 10 - histories.length;
  return (
    <Container>
      {histories.map((history, index) => (
        <Row key={index}>
          <CreatedAt>
            <span>{history.createdAt}</span>
          </CreatedAt>
          <Inner>
            <Name>
              <span>{history.name}</span>
            </Name>
            <Amount type={history.type}>
              <span>
                {history.type === 'send' && '-'}
                {history.amount}
              </span>
            </Amount>
          </Inner>
        </Row>
      ))}
      {diff >= 1 &&
        Array.from({ length: diff }).map((_, index) => (
          <Row key={index}>
            <CreatedAt>
              <span>{''}</span>
            </CreatedAt>
            <Inner>
              <Name>
                <span>{''}</span>
              </Name>
              <Amount>
                <span>{''}</span>
              </Amount>
            </Inner>
          </Row>
        ))}
    </Container>
  );
};

export default History;

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow-y: auto;
`;

const Row = styled.div`
  min-height: 49px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  + div {
    border-top: 0.5px solid #d0d0d0;
  }
`;

const CreatedAt = styled.div`
  width: 118px;
  span {
    color: #707070;
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
  }
`;

const Inner = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Name = styled.div`
  span {
    color: #707070;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
  }
`;

const Amount = styled.div<{ type?: 'send' | 'receive' }>`
  span {
    ${({ type }) =>
      type === 'send'
        ? css`
            color: #707070;
            text-align: right;
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.42px;
          `
        : css`
            color: #31a9ff;
            text-align: right;
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.42px;
          `}
  }
`;
