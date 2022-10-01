import { memo, ReactNode } from "react";
import {
   Box,
   Flex,
   Avatar,
   HStack,
   Stack,
   Text,
   IconButton,
   Button,
   Icon,
   useDisclosure,
   Popover,
   PopoverTrigger,
   PopoverContent,
   PopoverHeader,
   PopoverBody,
   PopoverFooter,
   PopoverArrow,
   PopoverCloseButton,
   PopoverAnchor,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GiFlowerPot } from "react-icons/gi";
import { useColorTheme } from "../../hooks/useColorTheme";
import { ButtonToggleMode } from "../BtnToggleMode";

const Links = ["Início", "Orquídeas", "Sobre", "Contatos"];

const NavLink = ({ children }: { children: ReactNode }) => {
   const { THEME } = useColorTheme();

   return (
      <Button
         px={2}
         py={1}
         rounded={"md"}
         variant={"solid"}
         bg={"transparent"}
         transition={"all 0.4s ease-in"}
         color={THEME.COLORS.COLORS_NAVIGATION}
         _hover={{
            transform: "translateY(-5px) scale(107%)",
            boxShadow: "xl",
            bg: THEME.COLORS.BG_BUTTON_NAVIGATION_HOVER,
         }}
      >
         {children}
      </Button>
   );
};

export function Navigation() {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const { THEME } = useColorTheme();

   return (
      <nav>
         <Box bg={THEME.COLORS.BG_NAVIGATION} px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-around"}>
               <IconButton
                  size={"md"}
                  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  aria-label={"Open Menu"}
                  display={{ md: "none" }}
                  onClick={isOpen ? onClose : onOpen}
               />
               <HStack spacing={8} alignItems={"center"}>
                  <Box
                     color={THEME.COLORS.COLORS_NAVIGATION}
                     display={"flex"}
                     alignItems={"center"}
                     gap={3}
                  >
                     <Icon as={GiFlowerPot} w={6} h={6} />
                     <Text as={"h3"} fontSize={"1.6rem"} fontWeight={"bold"}>
                        Orquidário
                     </Text>
                  </Box>
                  <HStack
                     as={"nav"}
                     spacing={4}
                     display={{ base: "none", md: "flex" }}
                  >
                     {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                     ))}
                  </HStack>
               </HStack>
               <Flex alignItems={"center"} gap={3}>
                  <ButtonToggleMode />
                  <Avatar size={"sm"} src={"/favicon/favicon.ico"} />
               </Flex>
            </Flex>

            {isOpen ? (
               <Box pb={4} display={{ md: "none" }}>
                  <Stack as={"nav"} spacing={4}>
                     {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                     ))}
                  </Stack>
               </Box>
            ) : null}
         </Box>
      </nav>
   );
}

export default memo(Navigation);
