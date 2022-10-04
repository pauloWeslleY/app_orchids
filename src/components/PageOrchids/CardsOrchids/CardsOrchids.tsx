import { memo } from "react";
import {
   Heading,
   Box,
   Image,
   Flex,
   Text,
   Stack,
   Button,
   useDisclosure,
   Badge,
} from "@chakra-ui/react";
import { CardsType, CardsHomeDetails } from "./index";

export function CardsOrchids({
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
         bg={"whiteAlpha.200"}
         boxShadow={"md"}
         m={2}
         rounded={"md"}
         overflow={"hidden"}
      >
         <Image h={"15rem"} w={"full"} src={image} objectFit={"cover"} />

         <Box p={4}>
            <Stack spacing={0} align={"center"} textAlign={"center"} mb={5}>
               <Heading
                  mb={"0.08rem"}
                  fontSize={"2xl"}
                  fontWeight={400}
                  fontFamily={"body"}
               >
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

            <Stack mt={7} align={"center"}>
               <Button
                  onClick={onOpen}
                  w={"10rem"}
                  fontWeight={"medium"}
                  bg={"pink.100"}
                  color={"pink.10"}
                  rounded={"md"}
                  transition={"all .5s ease-out"}
                  _hover={{
                     transform: "translateY(-2px)",
                     boxShadow: "lg",
                  }}
               >
                  {"Mais Detalhes"}
               </Button>
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

export default memo(CardsOrchids);
