import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import Card from './Card';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <Embla ref={emblaRef}>
      <EmblaContainer>
        <EmblaSlide>
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
        </EmblaSlide>
      </EmblaContainer>
    </Embla>
  );
};

export default Carousel;

const Embla = styled.div`
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
