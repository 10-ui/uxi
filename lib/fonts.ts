import { Inter } from 'next/font/google';
import local from 'next/font/local';

const LINE = local({
  src: [
    {
      path: '/fonts/LINESeedJP_OTF_Th.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '/fonts/LINESeedJP_OTF_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/LINESeedJP_OTF_Bd.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/fonts/LINESeedJP_OTF_Xb.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const inter = Inter({ subsets: ['latin'] });
