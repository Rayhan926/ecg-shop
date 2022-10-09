import PlusIcon from '@components/Svgs/PlusIcon';
import { menus } from '@config/constants';
import { cx } from '@utils';
import Link from 'next/link';
import { ComponentProps, useState } from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const Menus = () => {
  const [isOpenSubMenu, setisOpenSubMenu] = useState(false);
  const [activeSubMenuKey, setActiveSubMenuKey] = useState<string | null>(null);

  const closeSubmenu = () => {
    setisOpenSubMenu(false);
  };

  const setSubmenuKey = (key: string) => {
    setActiveSubMenuKey(key);
    setisOpenSubMenu(true);
  };
  return (
    <div
      className={cx(
        'mt-8 lg:mt-10 overflow-hidden relative duration-500',
        !isOpenSubMenu
          ? 'h-[168px]'
          : activeSubMenuKey === 'about-us'
          ? 'h-[180px] lg:h-[186px]'
          : 'h-[230px] lg:h-[239px]',
      )}
    >
      <div
        className={cx(
          isOpenSubMenu ? '-translate-x-full' : 'translate-x-0',
          'duration-500 ease-in-out',
        )}
      >
        <Menu text="About Us" onClick={() => setSubmenuKey('about-us')} />
        <Menu text="Services" onClick={() => setSubmenuKey('services')} />

        <Link href={'/get-a-quote'}>
          <a className="font-primary text-[16px] leading-[18px] lg:text-[18px] lg:leading-[20px] text-black py-4 pr-8 pl-[68px] block border-b border-gray-light">
            Get a Qoute
          </a>
        </Link>
      </div>

      {/** Submenus --Start-- */}
      <div
        className={cx(
          isOpenSubMenu ? 'translate-x-0' : 'translate-x-full',
          'duration-500 ease-in-out absolute top-0 left-0 w-full',
        )}
      >
        <button className="mb-1 ml-8" onClick={closeSubmenu}>
          <HiArrowNarrowLeft size={20} />
        </button>

        {menus
          .filter((menu) => menu.pageKey === activeSubMenuKey)
          .map((menu, i) => (
            <Link href={menu.url} key={i}>
              <a className="font-primary text-[16px] leading-[18px] lg:text-[18px] lg:leading-[20px] text-black py-4 px-8 block border-b border-gray-light">
                {menu.text}
              </a>
            </Link>
          ))}
      </div>
      {/** Submenus --End-- */}
    </div>
  );
};

export default Menus;

type MenuProps = {
  text: string;
} & ComponentProps<'div'>;
const Menu = ({ text, ...props }: MenuProps) => {
  return (
    <div
      {...props}
      className="flex items-center px-8 py-4 gap-3 border-b border-gray-light first:border-t cursor-pointer"
    >
      <PlusIcon />
      <p className="font-primary text-[16px] leading-[18px] lg:text-[18px] lg:leading-[20px] text-black ">
        {text}
      </p>
    </div>
  );
};