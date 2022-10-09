import { classes } from '@config/constants';
import { cx } from '@utils';

const DesktopHeader = () => {
  return (
    <header
      className={cx(
        'fixed top-0 container_fixed bg-yellow-600 z-20',
        classes.header,
      )}
    >
      ddd
    </header>
  );
};

export default DesktopHeader;
