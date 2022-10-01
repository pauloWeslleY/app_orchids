
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

//? Include custom option in here... colors, fonts, etc!!
const customTheme = {};

const config: ThemeConfig = {
   initialColorMode: 'light',
   useSystemColorMode: true
}

const colors = {
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

const theme = extendTheme({
   customTheme,
   config,
   fonts: {
      body: `'Montserrat', sans-serif`,
   },
   colors,
});

export default theme;