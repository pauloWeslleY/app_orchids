import { memo } from "react";
import {
   Container,
   Box,
   Flex,
   Text,
   Stack,
   Collapse,
   IconButton,
   Icon,
   Avatar,
   useColorModeValue,
   useDisclosure,
   HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GiFlowerPot } from "react-icons/gi";
import { MobileNav, DesktopNav } from "./index";

export function NavBar() {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box bg={"pink.10"}>
         <Container maxW={"6xl"}>
            <Flex
               minH={"60px"}
               py={{ base: 2 }}
               px={{ base: 4 }}
               align={"center"}
               justifyContent={"space-between"}
            >
               <IconButton
                  aria-label={"Toggle Navigation"}
                  isActive={false}
                  color={"whiteAlpha.900"}
                  bg={"transparent"}
                  _hover={{
                     bg: "transparent",
                  }}
                  _active={{
                     bg: "transparent",
                  }}
                  display={{ md: "none" }}
                  onClick={onToggle}
                  icon={
                     isOpen ? (
                        <CloseIcon w={3} h={3} />
                     ) : (
                        <HamburgerIcon w={5} h={5} />
                     )
                  }
               />
               <Flex alignItems={"center"} gap={3} color={"whiteAlpha.900"}>
                  <Icon as={GiFlowerPot} w={6} h={6} />
                  <Text as={"h3"} fontSize={"1.5rem"} fontWeight={"regular"}>
                     Orquidário
                  </Text>
               </Flex>
               <HStack spacing={8} alignItems={"center"}>
                  <HStack
                     as={"nav"}
                     spacing={4}
                     display={{ base: "none", md: "flex" }}
                  >
                     <DesktopNav />
                  </HStack>
               </HStack>
               <Flex align={"center"}>
                  <Avatar size={"sm"} src={"/favicon/favicon.ico"} />
               </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
               <MobileNav />
            </Collapse>
         </Container>
      </Box>
   );
}

export default memo(NavBar);
