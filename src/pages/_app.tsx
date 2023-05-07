 import { globalStyles } from '@/stitches'
import type { AppProps } from 'next/app'
import 'react-tabs/style/react-tabs.css';
export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}
