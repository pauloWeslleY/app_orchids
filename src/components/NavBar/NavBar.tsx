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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GiFlowerPot } from "react-icons/gi";
import { MobileNav, DesktopNav, ButtonToggleMode } from "./index";

export function NavBar() {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box bg={useColorModeValue("white", "pink.10")}>
         <Container maxW={"container.xl"}>
            <Flex
               minH={"60px"}
               py={{ base: 2 }}
               px={{ base: 4 }}
               align={"center"}
            >
               <Flex
                  flex={{ base: 1, md: "auto" }}
                  ml={{ base: -2 }}
                  display={{ base: "flex", md: "none" }}
               >
                  <IconButton
                     onClick={onToggle}
                     icon={
                        isOpen ? (
                           <CloseIcon w={3} h={3} />
                        ) : (
                           <HamburgerIcon w={5} h={5} />
                        )
                     }
                     variant={"ghost"}
                     aria-label={"Toggle Navigation"}
                  />
               </Flex>
               <Flex
                  flex={{ base: 1 }}
                  justify={{ base: "center", md: "space-around" }}
                  align={"center"}
               >
                  <Flex alignItems={"center"} gap={3}>
                     <Icon
                        as={GiFlowerPot}
                        w={6}
                        h={6}
                        color={useColorModeValue(
                           "purple.200",
                           "whiteAlpha.900"
                        )}
                     />
                     <Text
                        as={"h3"}
                        fontSize={"1.5rem"}
                        fontWeight={"regular"}
                        color={useColorModeValue(
                           "purple.200",
                           "whiteAlpha.900"
                        )}
                     >
                        Orquidário
                     </Text>
                  </Flex>
                  <Flex display={{ base: "none", md: "flex" }} ml={10}>
                     <DesktopNav />
                  </Flex>
                  <Stack
                     flex={{ base: 1, md: 0 }}
                     justify={"flex-end"}
                     direction={"row"}
                     spacing={6}
                     align={"center"}
                  >
                     <ButtonToggleMode />
                     <Avatar size={"sm"} src={"/favicon/favicon.ico"} />
                  </Stack>
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
