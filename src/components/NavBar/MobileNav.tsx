import { memo } from "react";
import { Stack } from "@chakra-ui/react";
import { MobileNavItem, NAV_ITEMS, NAV_MOBILE } from "./index";

export const MobileNav = () => {
   return (
      <Stack bg={"pink.10"} p={4} display={{ md: "none" }}>
         {NAV_MOBILE.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
         ))}
      </Stack>
   );
};

export default memo(MobileNav);
