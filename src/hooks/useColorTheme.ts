import { useColorModeValue } from "@chakra-ui/react";

export const useColorTheme = () => {
   const THEME = {
      COLORS: {
         COLORS_NAVIGATION: useColorModeValue("purple.200", "pink.900"),
         BG_NAVIGATION: useColorModeValue("whiteAlpha.900", "pink.300"),
         BG_BUTTON_NAVIGATION_HOVER: useColorModeValue("pink.100", "blackAlpha.200"),

         BUTTON_TOGGLE_MODE_COLORS: useColorModeValue("pink.10", "pink.10"),
         BACKGROUND_900: "gray.900",
         BACKGROUND_800: 'gray.800',

         TEXT: "whiteAlpha.900",
      }
   }

   return { THEME }
}