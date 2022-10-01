import { memo } from "react";
import {
   Box,
   Flex,
   Text,
   IconButton,
   Stack,
   Collapse,
   useColorModeValue,
   useBreakpointValue,
   useDisclosure,
   Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MobileNav, DesktopNav } from "./index";

export function NavBar() {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Box bg={useColorModeValue("white", "pink.10")}>
         <Container maxW={"container.xl"}>
            <Flex
               bg={useColorModeValue("white", "pink.10")}
               color={useColorModeValue("gray.600", "white")}
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
                  justify={{ base: "center", md: "start" }}
               >
                  <Text
                     textAlign={useBreakpointValue({
                        base: "center",
                        md: "left",
                     })}
                     fontFamily={"heading"}
                     color={useColorModeValue("gray.800", "white")}
                  >
                     Orchids
                  </Text>
                  <Flex display={{ base: "none", md: "flex" }} ml={10}>
                     <DesktopNav />
                  </Flex>
               </Flex>

               <Stack
                  flex={{ base: 1, md: 0 }}
                  justify={"flex-end"}
                  direction={"row"}
                  spacing={6}
               >
                  <h1>Section</h1>
               </Stack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
               <MobileNav />
            </Collapse>
         </Container>
      </Box>
   );
}

export default memo(NavBar);
