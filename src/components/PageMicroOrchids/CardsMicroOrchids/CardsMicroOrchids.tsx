import { memo } from "react";
import {
   Badge,
   Box,
   Flex,
   Heading,
   Image,
   Stack,
   useDisclosure,
} from "@chakra-ui/react";
import { CardsType, CardsHomeDetails } from "./index";

export function CardsMicroOrchids({
   name,
   price,
   image,
   cover,
   description,
}: CardsType) {
   const { isOpen, onOpen, onClose } = useDisclosure();

   return (
      <Flex
         basis={"230px"}
         grow={1}
         shrink={1}
         direction={"column"}
         m={2}
         rounded={"md"}
         overflow={"hidden"}
         align={"center"}
      >
         <Image
            src={image}
            alt={name}
            boxSize={"15rem"}
            rounded={"xl"}
            objectFit={"cover"}
            cursor={"pointer"}
            transition={"all .5s ease-in-out"}
            filter={"auto"}
            brightness={"90%"}
            _hover={{
               transform: "scale(1.1)",
            }}
            onClick={onOpen}
         />

         <Box p={4} bg={"whiteAlpha.100"} color={"gray.700"}>
            <Stack align={"center"} spacing={1} textAlign={"center"}>
               <Heading fontSize={"2xl"} fontWeight={400} fontFamily={"body"}>
                  {name}
               </Heading>
               <Badge
                  p={1}
                  shadow={"sm"}
                  w={"4rem"}
                  color={"gray.600"}
                  bg={"whiteAlpha.100"}
                  fontWeight={"500"}
                  fontSize={"1.03rem"}
               >
                  {price}
               </Badge>
            </Stack>
         </Box>
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

export default memo(CardsMicroOrchids);
