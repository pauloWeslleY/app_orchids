import { memo } from "react";
import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import { CardsType } from "./index";

export function CardsHomeItem({ name, image, price }: CardsType) {
   return (
      <Flex flexBasis={"100px"} flexGrow={1} flexShrink={1} p={"0.3rem"}>
         <Box
            w={"25rem"}
            h={"auto"}
            maxW={{
               base: "100%",
               md: "100%",
               lg: "50%",
               xl: "100%",
            }}
            m={3}
            bg="pink.50"
            shadow="lg"
            rounded="lg"
         >
            <Box px={4} py={2}>
               <chakra.h1
                  color="gray.700"
                  fontWeight="bold"
                  fontSize="3xl"
                  textTransform="uppercase"
               >
                  {name}
               </chakra.h1>
            </Box>

            <Image h={48} w="full" fit="cover" mt={2} src={image} alt={name} />

            <Flex
               alignItems="center"
               justifyContent="space-between"
               px={4}
               py={2}
               roundedBottom="lg"
            >
               <chakra.h1 color="gray.700" fontWeight="bold" fontSize="lg">
                  {price}
               </chakra.h1>
               <chakra.button
                  px={2}
                  py={1}
                  bg="pink.10"
                  fontSize="xs"
                  color="gray.900"
                  fontWeight="bold"
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                     bg: "gray.200",
                  }}
                  _focus={{
                     bg: "gray.400",
                  }}
               >
                  More Details
               </chakra.button>
            </Flex>
         </Box>
      </Flex>
   );
}

export default memo(CardsHomeItem);
