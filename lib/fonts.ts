import { Inter } from 'next/font/google';
import local from 'next/font/local';

export const lineFont = local({
  src: [
    {
      path: 'font/LINESeedJP_OTF_Th.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'font/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'font/LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'font/LINESeedJP_OTF_Eb.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const inter = Inter({ subsets: ['latin'] });
