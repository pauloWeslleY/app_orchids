import { memo } from "react";
import { Box, Divider, Stack, Text, VStack, chakra } from "@chakra-ui/react";

import { FooterContent } from "./index";

import styles from "./styles.module.scss";

export function Footer() {
   return (
      <Box bg={"pink.10"} color={"whiteAlpha.800"}>
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
         <Divider w={"95%"} mx={"auto"} color={"whiteAlpha.900"} h={"3.5px"} />
         <VStack py={3} align={"center"}>
            <Text
               textAlign={"center"}
               fontSize={"smaller"}
               color={"whiteAlpha.800"}
            >
               © Copyright 2022 Orquidário - Todos os Direitos Reservados.{" "}
               <Text
                  as={"cite"}
                  fontWeight={600}
                  fontSize={"0.8rem"}
                  textAlign={"center"}
               >
                  Developed by{" "}
                  <chakra.a
                     textShadow="1px 1px var(--gray-40)"
                     cursor={"pointer"}
                     color={"red.500"}
                     onClick={() =>
                        window.open("https://weslleylima.vercel.app")
                     }
                     textDecoration={"none"}
                     transition={"all 0.2s ease-in-out"}
                     _hover={{
                        color: "red.200",
                     }}
                  >
                     Weslley Lima
                  </chakra.a>
               </Text>
            </Text>
         </VStack>
      </Box>
   );
}

export default memo(Footer);
