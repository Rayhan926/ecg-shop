import { atom, useAtom } from 'jotai';

const openMobileSidebar = atom(false);

const useMobileSidebar = () => {
  const [isOpen, setIsOpen] = useAtom(openMobileSidebar);

  const closeMenu = () => setIsOpen(false);

  return { isOpen, setIsOpen, closeMenu };
};

export default useMobileSidebar;
