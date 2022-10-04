import { memo } from "react";
import {
   Box,
   Image,
   Flex,
   Stack,
   Heading,
   Text,
   Button,
   useDisclosure,
   Collapse,
} from "@chakra-ui/react";
import { CardsType } from "./index";

export function CardsFade({ name, price, image, description }: CardsType) {
   const { isOpen, onToggle } = useDisclosure();

   return (
      <Flex
         basis={"280px"}
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
            <Stack spacing={0} textAlign={"center"} mb={5}>
               <Heading
                  fontSize={"1.4rem"}
                  fontWeight={400}
                  fontFamily={"body"}
               >
                  {name}
               </Heading>
               <Text color={"gray.600"}>{price}</Text>
            </Stack>
            <Stack mt={7} align={"center"} alignSelf={"flex-end"}>
               <Button
                  onClick={onToggle}
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
            <Collapse in={isOpen} animateOpacity>
               <Box
                  p={"1rem"}
                  mt={"4"}
                  rounded={"md"}
                  shadow={"xl"}
                  bg={"blackAlpha.400"}
               >
                  {description}
               </Box>
            </Collapse>
         </Box>
      </Flex>
   );
}

export default memo(CardsFade);
