import useEmblaCarousel from 'embla-carousel-react';
import { type } from 'os';
import styled from 'styled-components';

import Card from './Card';

interface Props {
  className?: string;
  cardData: {
    title: string;
    name: string;
    gu: string;
    type: 'normal' | 'company';
    createdAt: string;
    amount: number;
    tokenId: string;
  }[];
}

const Carousel = ({ className, cardData }: Props) => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <Embla ref={emblaRef} className={className}>
      <EmblaContainer>
        {cardData.map((cardinfo, index) => (
          <EmblaSlide key={index}>
            <Card
              title={cardinfo.title}
              gu={cardinfo.gu}
              type={cardinfo.type}
              name={cardinfo.name}
              createdAt={cardinfo.createdAt}
              amount={cardinfo.amount}
              tokenId={cardinfo.tokenId}
            />
          </EmblaSlide>
        ))}
        {/* <EmblaSlide>
          <Card
            title={'디지털 신분증'}
            gu={'수성구'}
            type={'normal'}
            name={'김대구'}
            createdAt={'23.11.09'}
            amount={10000000}
            tokenId={'AND'}
          />
        </EmblaSlide>
        <EmblaSlide>
          <Card
            title={'디지털 신분증'}
            gu={'달서구'}
            type={'company'}
            name={'대구치킨'}
            createdAt={'23.11.09'}
            amount={10000000}
            tokenId={'AND'}
          />
        </EmblaSlide> */}
      </EmblaContainer>
    </Embla>
  );
};

export default Carousel;

const Embla = styled.div`
  width: 100%;
  overflow: hidden;
`;

const EmblaContainer = styled.div`
  width: 326px;
  display: flex;
`;

const EmblaSlide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  margin-right: 16px;
`;
