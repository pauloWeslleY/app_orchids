import { memo } from "react";
import { Box, Divider, Stack, Text, VStack, chakra } from "@chakra-ui/react";

import { FooterContent } from "./index";

import styles from "./styles.module.scss";

export function Footer() {
   return (
      <Box bg={"pink.10"}>
         <Stack
            direction={{
               base: "column",
               lg: "row",
            }}
            w={"full"}
            justify={"space-around"}
            p={5}
         >
            <FooterContent />
         </Stack>
         <Divider w="95%" mx="auto" color="#F9FAFB" h="3.5px" />
         <VStack py={3} align={"center"}>
            <Text
               textAlign="center"
               fontSize="smaller"
               _dark={{
                  color: "white",
               }}
            >
               © Copyright 2022 Orquidário - Todos os Direitos Reservados.{" "}
               <Text
                  as={"cite"}
                  fontWeight={600}
                  fontSize={"0.8rem"}
                  textAlign={"center"}
               >
                  Created by{" "}
                  <chakra.a
                     textShadow="1px 1px var(--red-40)"
                     cursor={"pointer"}
                     color={"red.100"}
                     onClick={() =>
                        window.open("https://weslleylima.vercel.app")
                     }
                     textDecoration={"none"}
                     transition={"all 0.2s ease-in-out"}
                     _hover={{
                        color: "red.800",
                     }}
                  >
                     Weslley e Lima
                  </chakra.a>
               </Text>
            </Text>
         </VStack>
      </Box>
   );
}

export default memo(Footer);
