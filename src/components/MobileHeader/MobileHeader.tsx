import SidebarContent from '@components/SidebarContent';
import SiteLogo from '@components/SiteLogo/SiteLogo';
import MenuIcon from '@components/Svgs/MenuIcon';
import useMobileSidebar from '@hooks/useMobileSidebar';
import { cx } from '@utils';

const MobileHeader = () => {
  const { isOpen, setIsOpen, closeMenu } = useMobileSidebar();
  return (
    <>
      <header className="px-5 relative h-[54px] bg-body-gray z-[3] flex items-center lg:hidden shrink-0">
        <button onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </button>

        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10">
          <SiteLogo />
        </div>
      </header>

      <div
        id="overlay"
        onClick={(e: any) => e.target.id === 'overlay' && closeMenu()}
        className={cx(
          'fixed top-0 left-0 w-full h-full bg-[#545454]/80 z-[999999] duration-200 lg:hidden',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0 delay-500',
        )}
      >
        <div
          className={cx(
            'h-full bg-white w-[80%] duration-500 flex flex-col',
            isOpen ? 'translate-x-0 delay-200' : '-translate-x-full',
          )}
        >
          <div className="px-5 relative h-[54px] flex items-center lg:hidden shrink-0">
            <button onClick={closeMenu}>
              <MenuIcon />
            </button>

            <div className="absolute top-1/2 -translate-y-1/2 left-[167px] w-10">
              <SiteLogo />
            </div>
          </div>

          <div className="grow">
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
