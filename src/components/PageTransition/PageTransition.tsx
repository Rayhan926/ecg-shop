import { classes } from '@config/constants';
import { cx } from '@utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PageTransition = () => {
  const [show, setShow] = useState(false);
  //   const { show } = usePageTransition();
  const router = useRouter();

  useEffect(() => {
    const onStart = () => {
      setShow(true);
    };
    const onEnd = () => {
      setShow(false);
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onEnd);

    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onEnd);
    };
  }, [router.events]);

  return (
    <div
      className={cx(
        'fixed top-0 h-screen bg-red-600 z-[999999999] duration-500',
        classes.pageTransitionWrapper,
        show
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
    ></div>
  );
};

export default PageTransition;
