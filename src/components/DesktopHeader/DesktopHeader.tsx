import { classes } from '@config/constants';
import { cx } from '@utils';

const DesktopHeader = () => {
  return (
    <header
      className={cx(
        'absolute lg:fixed top-0 w-[calc(100%-40px)] lg:container_fixed bg-yellow-600 z-20 h-[50px]',
        classes.header,
      )}
    >
      ddd
    </header>
  );
};

export default DesktopHeader;
