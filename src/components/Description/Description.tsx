import { memo } from "react";
import {
   Box,
   Container,
   Flex,
   Heading,
   Image,
   SimpleGrid,
} from "@chakra-ui/react";
import { AccordionDescription } from "./index";

export function Description() {
   return (
      <Box>
         <Container maxW={"5xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1}>
               <Flex justify={"center"} p={"0.4rem"}>
                  <Image
                     alt={"feature image"}
                     src={"/image/bg_orchids3.jpg"}
                     objectFit={"cover"}
                     boxSize={"sm"}
                     borderRadius={"3rem"}
                  />
               </Flex>
               <Box justifyContent={"center"} p={"1rem"}>
                  <Heading
                     fontWeight={"medium"}
                     fontFamily={"body"}
                     as={"h4"}
                     textAlign={"center"}
                     color={"gray.800"}
                     pb={"1rem"}
                  >
                     Informações de cultivo
                  </Heading>
                  <AccordionDescription />
               </Box>
            </SimpleGrid>
         </Container>
      </Box>
   );
}

export default memo(Description);
