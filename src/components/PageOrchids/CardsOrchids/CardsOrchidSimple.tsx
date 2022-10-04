import { memo } from "react";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { CardsType } from "./index";

export function CardsOrchidSimple({ name, price, image }: CardsType) {
   return (
      <Flex
         basis={"230px"}
         grow={1}
         shrink={1}
         direction={"column"}
         m={2}
         shadow={"md"}
         rounded={"md"}
         overflow={"hidden"}
      >
         <Image h={"30rem"} w={"full"} src={image} objectFit={"cover"} />

         <Box p={4} bg={"whiteAlpha.100"}>
            <Stack spacing={1} textAlign={"center"}>
               <Heading fontSize={"2xl"} fontWeight={400} fontFamily={"body"}>
                  {name}
               </Heading>
               <Text color={"gray.600"}>{price}</Text>
            </Stack>
         </Box>
      </Flex>
   );
}

export default memo(CardsOrchidSimple);
