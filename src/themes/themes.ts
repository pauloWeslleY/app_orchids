
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: false
}

const colors = {
   bg_dark: 'var(--bg-dark)',
   bg_light: 'var(--bg-light)',
   red: {
      40: 'var(--red-40)',
      50: 'var(--red-50)'
   },
   gray: {
      10: 'var(--gray-10)',
      20: 'var(--gray-20)',
      40: 'var(--gray-40)',
   },
   pink: {
      10: 'var(--pink-10)',
   }
}

const styles = {
   global: (props: any) => ({
      body: {
         bg: mode('bg_light', 'bg_dark')(props),
      },
   }),
};

const theme = extendTheme({
   customTheme,
   config,
   colors,
   styles,
   fonts: {
      body: `'Quicksand', sans-serif`,
   },
});

export default theme;