import { memo } from "react";
import { Box, Flex, Image, chakra, useDisclosure } from "@chakra-ui/react";
import { CardsType, CardsHomeDetails } from "./index";

export function CardsHomeItem({
   name,
   image,
   price,
   description,
   cover,
}: CardsType) {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Flex
         flexDir={"column"}
         basis={"330px"}
         shrink={3}
         grow={3}
         m={3}
         bg={"pink.50"}
         shadow={"lg"}
         borderRadius={"2rem"}
      >
         <Box px={4} py={2}>
            <chakra.h1
               color={"gray.700"}
               fontWeight={"light"}
               fontSize={"3xl"}
               textAlign={"center"}
            >
               {name}
            </chakra.h1>
         </Box>

         <Image
            h={"25rem"}
            w={"full"}
            fit={"cover"}
            mt={2}
            src={image}
            alt={name}
         />

         <Flex
            alignItems={"center"}
            justifyContent={"space-around"}
            px={4}
            py={2}
            roundedBottom={"lg"}
         >
            <chakra.h1 color={"gray.700"} fontWeight={"medium"} fontSize={"lg"}>
               {price}
            </chakra.h1>
            <chakra.button
               px={2}
               py={1}
               bg={"pink.10"}
               color={"whiteAlpha.900"}
               fontSize={"xs"}
               fontWeight={"bold"}
               textTransform={"uppercase"}
               transition={"all .5s ease-in-out"}
               _hover={{
                  bg: "whiteAlpha.900",
                  color: "pink.10",
                  boxShadow: "xl",
               }}
               onClick={onOpen}
            >
               {"Mais Detalhes"}
            </chakra.button>
         </Flex>
         <CardsHomeDetails
            title={name}
            price={price}
            image={cover}
            content={description}
            onClose={onClose}
            isOpen={isOpen}
         />
      </Flex>
   );
}

export default memo(CardsHomeItem);
