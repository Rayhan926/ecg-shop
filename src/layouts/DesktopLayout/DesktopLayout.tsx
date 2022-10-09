import DesktopSidebar from '@components/DesktopSidebar';
import MobileHeader from '@components/MobileHeader';
import { classes } from '@config/constants';
import { OnlyChildren } from '@config/types';
import { cx } from '@utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { use100vh } from 'react-div-100vh';

const DesktopHeader = dynamic(() => import('@components/DesktopHeader'));

const DesktopLayout = ({ children }: OnlyChildren) => {
  const screenHeight = use100vh();
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  return (
    <div>
      <DesktopSidebar />
      <div className={cx(classes.layoutWrapper)}>
        <div
          style={{ height: screenHeight || 0 }}
          className="overflow-y-auto relative flex flex-col"
        >
          <div className="absolute h-full w-full top-0 left-0 z-[1] pointer-events-none overflow-hidden">
            <img
              src="/img/background.png"
              alt="background"
              className="w-full"
            />
          </div>
          <MobileHeader />
          {!isHomePage && <DesktopHeader />}
          <div className={cx(!isHomePage && 'pl-8', 'grow')}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;
