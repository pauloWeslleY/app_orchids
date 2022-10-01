import { memo } from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorTheme } from "../../hooks/useColorTheme";

export function ButtonToggleMode(props: any) {
   const { toggleColorMode } = useColorMode();
   const text = useColorModeValue("dark", "light");
   const SwitchIcon = useColorModeValue(FaMoon, FaSun);
   const { THEME } = useColorTheme();

   return (
      <IconButton
         size={"md"}
         fontSize={"lg"}
         aria-label={`Switch to ${text} mode`}
         variant={"ghost"}
         color={THEME.COLORS.BUTTON_TOGGLE_MODE_COLORS}
         marginLeft={"2"}
         onClick={toggleColorMode}
         icon={<SwitchIcon />}
         {...props}
      />
   );
}

export default memo(ButtonToggleMode);
