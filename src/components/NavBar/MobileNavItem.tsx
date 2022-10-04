import { memo } from "react";
import {
   Collapse,
   Flex,
   Icon,
   Link,
   Stack,
   Text,
   useColorModeValue,
   useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { NavItem } from "./index";

export const MobileNavItem = ({ label, children, link }: NavItem) => {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Stack align={"center"} spacing={4} onClick={children && onToggle}>
         <Flex
            py={2}
            as={Link}
            href={`/${link}`}
            justify={"space-between"}
            align={"center"}
            _hover={{
               textDecoration: "none",
            }}
         >
            <Text fontWeight={600} color={"whiteAlpha.800"}>
               {label}
            </Text>
            {children && (
               <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  transform={isOpen ? "rotate(180deg)" : ""}
                  w={6}
                  h={6}
               />
            )}
         </Flex>
         <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
         >
            <Stack mt={2} pl={4} align={"start"}>
               {children &&
                  children.map((child) => (
                     <Link key={child.label} py={2} href={child.link}>
                        {child.label}
                     </Link>
                  ))}
            </Stack>
         </Collapse>
      </Stack>
   );
};

export default memo(MobileNavItem);
