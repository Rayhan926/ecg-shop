import SidebarContent from '@components/SidebarContent';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import MenuIcon from '@components/Svgs/MenuIcon';
import { cx } from '@utils';
import { useState } from 'react';

const MobileHeader = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  return (
    <>
      <header className="px-5 relative h-[54px] bg-body-gray z-[3] flex items-center lg:hidden shrink-0">
        <button onClick={() => setIsOpenSidebar(true)}>
          <MenuIcon />
        </button>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10">
          <SiteLogo />
        </div>
      </header>

      <div
        id="overlay"
        onClick={(e: any) =>
          e.target.id === 'overlay' && setIsOpenSidebar(false)
        }
        className={cx(
          'fixed top-0 left-0 w-full h-full bg-[#545454]/80 z-[100] duration-200',
          isOpenSidebar
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0 delay-500',
        )}
      >
        <div
          className={cx(
            'h-full bg-white w-[80%] duration-500',
            isOpenSidebar ? 'translate-x-0 delay-200' : '-translate-x-full',
          )}
        >
          <SidebarContent />
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
