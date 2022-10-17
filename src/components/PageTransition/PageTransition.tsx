import { classes } from '@config/constants';
import useMobileSidebar from '@hooks/useMobileSidebar';
import usePageTransition from '@hooks/usePageTransition';
import { cx } from '@utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PageTransition = () => {
  const { isOpen } = useMobileSidebar();
  const { show, setShow } = usePageTransition();
  const router = useRouter();

  useEffect(() => {
    const onStart = (currentPath: any) => {
      if (currentPath === router.pathname) return;
      setShow(true);
    };
    const onEnd = (currentPath: any) => {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
    };
  }, [router.events, router.pathname, setShow]);

  return (
    <div
      className={cx(
        'fixed bg-red-600 z-[999999999]',
        classes.pageTransitionWrapper,
        show && !isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none duration-500',
      )}
    ></div>
  );
};

export default PageTransition;
