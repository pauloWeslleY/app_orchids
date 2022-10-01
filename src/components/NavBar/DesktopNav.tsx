import { memo } from "react";
import {
   Box,
   Link,
   Popover,
   PopoverContent,
   PopoverTrigger,
   Stack,
   useColorModeValue,
} from "@chakra-ui/react";

import { DesktopSubNav, NAV_ITEMS } from "./index";

export const DesktopNav = () => {
   const linkColor = useColorModeValue("gray.600", "gray.200");
   const linkHoverColor = useColorModeValue("gray.800", "white");
   const popoverContentBgColor = useColorModeValue("white", "gray.800");

   return (
      <Stack direction={"row"} spacing={4}>
         {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
               <Popover trigger={"hover"} placement={"bottom-start"}>
                  <PopoverTrigger>
                     <Link
                        p={2}
                        href={navItem.href ?? "#"}
                        fontSize={"sm"}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                           textDecoration: "none",
                           color: linkHoverColor,
                        }}
                     >
                        {navItem.label}
                     </Link>
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
