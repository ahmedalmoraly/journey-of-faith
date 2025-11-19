
import localFont from 'next/font/local';

export const amsipro = localFont({
  src: [
    {
      path: '../../public/fonts/AmsiPro-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/AmsiPro-Bold.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-amsipro',
  display: 'swap',
});

export const avenir = localFont({
  src: [
    {
      path: '../../public/fonts/avenir_roman_12.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-avenir',
  display: 'swap',
});