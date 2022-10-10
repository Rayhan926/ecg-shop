import CardWithImage from '@components/CardWithImage';
import { CardWithImageProps } from '@config/types';

const CardsRendered = ({ cards }: { cards: CardWithImageProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-3 lg:gap-5">
      {cards.map((card, i) => (
        <CardWithImage {...card} key={i} />
      ))}
    </div>
  );
};

export default CardsRendered;
