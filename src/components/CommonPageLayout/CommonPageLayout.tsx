import { CommonPageLayoutProps } from '@config/types';

const CommonPageLayout = ({
  bannerImgSrc,
  pageTitle,
  children,
}: CommonPageLayoutProps) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url("${bannerImgSrc}")` }}
        className="w-full h-[500px] bg-slate-300 bg-cover bg-center pr-[158px] flex items-center justify-end"
      >
        <h1 className="text-white/50 font-extrabold text-[76px] font-primary uppercase">
          {pageTitle}
        </h1>
      </div>
      <div className="container_fixed">
        <div className="bg-white relative z-[3] -mt-10 lg:-mt-[52px] mb-[60px]">
          <div className="h-[52px] border-b border-gray-light flex items-center justify-end pr-12">
            <div className="w-[100px] h-px bg-gray-2"></div>
          </div>
          <div className="max-w-[calc(900px+32px)] px-4 mx-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPageLayout;
