import { memo } from "react";
import {
   Box,
   Button,
   Link,
   Popover,
   PopoverContent,
   PopoverTrigger,
   Stack,
   useColorModeValue,
} from "@chakra-ui/react";

import { DesktopSubNav, NAV_ITEMS } from "./index";

export const DesktopNav = () => {
   const DESKTOP_NAV_BG_COLORS_HOVER = useColorModeValue(
      "pink.100",
      "purple.100"
   );
   const DESKTOP_NAV_COLORS_HOVER = useColorModeValue("pink.900", "purple.900");
   const DESKTOP_NAV_COLORS = useColorModeValue("purple.200", "whiteAlpha.900");
   const popoverContentBgColor = useColorModeValue("whiteAlpha.900", "pink.10");

   return (
      <Stack direction={"row"} spacing={4}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Button
                        p={2}
                        fontSize={"1rem"}
                        fontWeight={500}
                        bg={"transparent"}
                        color={DESKTOP_NAV_COLORS}
                        transition={"all 0.4s ease-in"}
                        _hover={{
                           transform: " scale(107%)",
                           boxShadow: "xl",
                           bg: DESKTOP_NAV_BG_COLORS_HOVER,
                           color: DESKTOP_NAV_COLORS_HOVER,
                        }}
                     >
                        {navItem.label}
                     </Button>
                  </PopoverTrigger>

                  {navItem.children && (
                     <PopoverContent
                        border={0}
                        boxShadow={"xl"}
                        bg={popoverContentBgColor}
                        p={4}
                        rounded={"xl"}
                        minW={"sm"}
                     >
                        <Stack>
                           {navItem.children.map((child) => (
                              <DesktopSubNav
                                 key={child.label}
                                 label={child.label}
                                 href={child.href}
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
