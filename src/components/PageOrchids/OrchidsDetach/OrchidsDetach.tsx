import {
   Box,
   Container,
   Flex,
   Heading,
   Image,
   SimpleGrid,
   Text,
} from "@chakra-ui/react";
import { memo } from "react";

export function OrchidsDetach() {
   return (
      <Box bg={"pink.50"} color={"gray.700"}>
         <Container maxW={"5xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
               <Flex
                  justify={"center"}
                  alignItems={"flex-end"}
                  direction={"column"}
                  p={1}
                  h={"50vh"}
               >
                  <Heading>Cattleya</Heading>
                  <Text fontSize={"lg"} textAlign={"right"}>
                     As vermelhas, paixão, destaque número um no Orquidário
                     Iara.
                  </Text>
               </Flex>
               <Flex>
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
                     <Image
                        h={"25rem"}
                        w={"full"}
                        src={"/image/orchids_2/orquidea14.jpg"}
                        objectFit={"cover"}
                     />

                     <Box p={4} bg={"whiteAlpha.100"}>
                        <Flex gap={1} justify={"space-between"}>
                           <Heading
                              fontSize={"2xl"}
                              fontWeight={400}
                              fontFamily={"body"}
                           >
                              {"Cattleya"}
                           </Heading>
                           <Text color={"gray.600"}>{"$40,00"}</Text>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
            </SimpleGrid>
         </Container>
      </Box>
   );
}

export default memo(OrchidsDetach);
