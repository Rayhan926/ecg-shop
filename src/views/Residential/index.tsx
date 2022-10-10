import CardsRendered from '@components/CardsRendered';
import CommonPageLayout from '@components/CommonPageLayout';
import GetInTouchFooter from '@components/GetInTouchFooter';
import { whatWeDoCards } from '@config/constants';

const Residential = () => {
  return (
    <CommonPageLayout
      bannerImgSrc="/img/residential-banner.jpeg"
      pageTitle="Residential"
    >
      <h2 className="__h2">Residential Hardscapes</h2>
      <p className="__body_text mt-5">
        Our Residential Hardscapes services lie at the heart of EarthCore Group.
        Our motto is Creating Organic Real Estate, and we believe that the most
        organic real estate is the space in which you and your family create
        loving memories at your home.
      </p>

      <div className="my-9 lg:my-12 pt-9 lg:pt-12 border-t border-gray-light">
        <CardsRendered
          cards={[...whatWeDoCards, ...whatWeDoCards.slice(0, 2)]}
        />
      </div>

      <GetInTouchFooter />
    </CommonPageLayout>
  );
};

export default Residential;