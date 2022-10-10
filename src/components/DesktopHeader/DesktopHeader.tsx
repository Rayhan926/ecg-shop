import { classes, menus } from '@config/constants';
import { cx } from '@utils';
import { useRouter } from 'next/router';

const DesktopHeader = () => {
  const router = useRouter();

  const pageTitlte = menus.find((menu) =>
    router.pathname.startsWith(menu.url),
  )?.text;

  return (
    <header
      className={cx('absolute lg:fixed top-0 w-full z-20', classes.header)}
    >
      <div className="w-[calc(100%-40px)] lg:w-[92%] lg:max-w-[1024px] bg-white border-b border-gray-light">
        <div className="pl-5 lg:pl-[30px] flex justify-between items-center h-[50px]">
          <p className="text-[14px] lg:text-[16px] leading-[150%] text-black font-primary font-semibold">
            <span className="text-gray-1">Page :</span> {pageTitlte || '- - -'}
          </p>

          <button className="text-[14px] lg:text-[16px] leading-[150%] text-black font-gilroy-bold pr-5 lg:pr-[30px] pl-6 border-l border-gray-light h-full">
            Share
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
