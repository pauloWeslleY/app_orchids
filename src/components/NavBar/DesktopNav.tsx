import { memo } from "react";
import {
   Box,
   Button,
   Popover,
   PopoverContent,
   PopoverTrigger,
   Stack,
} from "@chakra-ui/react";

import { DesktopSubNav, NAV_ITEMS } from "./index";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
   const THEME = {
      COLORS: {
         DESKTOP_NAV_BG_COLORS_HOVER: "pink.100",
         DESKTOP_NAV_COLORS_HOVER: "pink.900",
         DESKTOP_NAV_COLORS: "white",
         POPOVER_CONTENT_BG: "pink.10",
      },
   };

   return (
      <Stack direction={"row"} spacing={4}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Link to={`/${navItem.link}`}>
                        <Button
                           p={2}
                           fontSize={"1rem"}
                           fontWeight={500}
                           bg={"transparent"}
                           color={THEME.COLORS.DESKTOP_NAV_COLORS}
                           transition={"all 0.4s ease-in"}
                           _hover={{
                              transform: " scale(107%)",
                              boxShadow: "xl",
                              bg: THEME.COLORS.DESKTOP_NAV_BG_COLORS_HOVER,
                              color: THEME.COLORS.DESKTOP_NAV_COLORS_HOVER,
                           }}
                        >
                           {navItem.label}
                        </Button>
                     </Link>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={THEME.COLORS.POPOVER_CONTENT_BG}
                        p={4}
                        rounded={"xl"}
                        minW={"sm"}
                     >
                        <Stack>
                           {navItem.children.map((child) => (
                              <DesktopSubNav
                                 key={child.label}
                                 label={child.label}
                                 link={child.link}
                              />
                           ))}
                        </Stack>
                     </PopoverContent>
                  )}
               </Popover>
            </Box>
         ))}
      </Stack>
   );
};

export default memo(DesktopNav);
