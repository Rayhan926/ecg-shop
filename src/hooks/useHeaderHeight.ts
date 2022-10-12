import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const headerHeightAtom = atom(0);

const useHeaderHeight = () => {
  const router = useRouter();
  const [headerHeight, setHeaderHeight] = useAtom(headerHeightAtom);

  useEffect(() => {
    const desktopHeader = document.getElementById('desktopHeader');

    setHeaderHeight(desktopHeader?.clientHeight || 0);
  }, [router.pathname, setHeaderHeight]);

  return { headerHeight };
};

export default useHeaderHeight;
