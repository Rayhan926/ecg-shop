import Menus from '@components/Menus';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import FacebookIcon from '@components/Svgs/FacebookIcon';
import InstagramIcon from '@components/Svgs/InstagramIcon';

const SidebarContent = () => {
  return (
    <div className="h-full flex flex-col lg:pt-[60px] overflow-y-auto gap-4">
      <div>
        <div className="pl-5 lg:pl-8 max-w-[160px] hidden lg:block">
          <SiteLogo />
        </div>
        <p className="text-[14px] lg:text-[16px] leading-[150%] font-gilroy-regular text-black mt-6 pl-5 lg:pl-8">
          CREATING, ORGANIC,
          <br /> REAL, ESTATE.
        </p>

        <Menus />

        {/** Contact Info --Start-- */}
        <div className="pl-5 lg:pl-8 mt-9 lg:mt-[53px]">
          <h6 className="font-primary font-bold text-[16px] lg:text-[18px] mb-5">
            CONTACT INFO
          </h6>

          <div className="space-y-4">
            <p className="text-[14px] lg:text-[16px] leading-[19px] text-black font-gilroy-regular">
              Address :{' '}
              <span className="text-gray-2">2103 Faulkner Rd NE, Atlanta</span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[19px] text-black font-gilroy-regular">
              Phone : <span className="text-gray-2">404-858-7391</span>
            </p>
            <p className="text-[14px] lg:text-[16px] leading-[19px] text-black font-gilroy-regular">
              Email :{' '}
              <a className="text-gray-2" href="mailto:info@earthcoregroup.com">
                info@earthcoregroup.com
              </a>
            </p>
          </div>
        </div>
        {/** Contact Info --End-- */}
      </div>

      {/** Find Us --Start-- */}
      <div className="mt-10 pl-5 lg:pl-8">
        <h6 className="font-primary font-bold text-[16px] lg:text-[18px]">
          FIND US
        </h6>

        <div className="mt-3 lg:mt-5 flex gap-2 lg:gap-4">
          <a href="#" className="w-6 lg:w-7">
            <FacebookIcon />
          </a>
          <a href="#" className="w-6 lg:w-7">
            <InstagramIcon />
          </a>
        </div>
      </div>
      {/** Find Us --End-- */}

      {/** Copyrights --Start-- */}
      <div className="mt-auto py-5 px-8 text-center border-t border-gray-light text-[14px] lg:text-[16px] text-black font-gilroy-regular">
        <p>2022 © EARTHCORE GROUP LLC</p>
      </div>
      {/** Copyrights --End-- */}
    </div>
  );
};

export default SidebarContent;
