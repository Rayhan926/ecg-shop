import { AppPropsWithLayout } from '@config/types';
import DesktopLayout from '@layouts/DesktopLayout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DesktopLayout>{page}</DesktopLayout>);

  return getLayout(<Component {...pageProps} />);
}
