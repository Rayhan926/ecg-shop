import { CardWithImageProps } from '@config/types';
import Image from 'next/image';

const CardWithImage = ({ imgSrc, label }: CardWithImageProps) => {
  return (
    <div className="relative overflow-hidden group cursor-pointer">
      <div className="group-hover:scale-[1.05] duration-500 bg-gray-light">
        <Image
          width={430}
          height={280}
          src={imgSrc}
          alt={label}
          layout="responsive"
        />
      </div>

      <div
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(41, 41, 41, 0) 5.92%, #292929 111.84%)',
        }}
        className="absolute bottom-0 left-0 w-full h-10 lg:h-[76px] text-xs lg:text-2xl flex justify-center items-center text-white text-center"
      >
        {label}
      </div>
    </div>
  );
};

export default CardWithImage;
