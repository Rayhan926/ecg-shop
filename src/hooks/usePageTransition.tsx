import { atom, useAtom } from 'jotai';

const pageTransitionAtom = atom(false);

const usePageTransition = () => {
  const [show, setShow] = useAtom(pageTransitionAtom);
  return { show, setShow };
};

export default usePageTransition;
