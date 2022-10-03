import { memo } from "react";
import {
   Box,
   Divider,
   Flex,
   Heading,
   HStack,
   Icon,
   Image,
   Link,
   Stack,
   Text,
   VStack,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

import { FooterContent } from "./index";

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
         <VStack py={3}>
            <Text
               textAlign="center"
               fontSize="smaller"
               _dark={{
                  color: "white",
               }}
            >
               © Copyright 2022 - All rights reserved.
            </Text>
         </VStack>
      </Box>
   );
}

export default memo(Footer);