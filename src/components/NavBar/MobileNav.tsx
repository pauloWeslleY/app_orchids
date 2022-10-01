import { memo } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";
import { MobileNavItem, NAV_ITEMS } from "./index";

export const MobileNav = () => {
   return (
      <Stack
         bg={useColorModeValue("white", "gray.800")}
         p={4}
         display={{ md: "none" }}
      >
         {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   );
};

export default memo(MobileNav);
