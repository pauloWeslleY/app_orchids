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

export function OrchidsDetachTwo() {
   return (
      <Box bg={"pink.50"} color={"gray.700"}>
         <Container maxW={"5xl"}>
            <SimpleGrid columns={{ base: 1, md: 2 }}>
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
                        src={"/image/orchids_2/orquidea15.jpg"}
                        objectFit={"cover"}
                     />

                     <Box p={4} bg={"whiteAlpha.100"}>
                        <Flex gap={1} justify={"space-between"}>
                           <Heading
                              fontSize={"2xl"}
                              fontWeight={400}
                              fontFamily={"body"}
                           >
                              {"Cattleya Durigan"}
                           </Heading>
                           <Text color={"gray.600"}>{"$40,00"}</Text>
                        </Flex>
                     </Box>
                  </Flex>
               </Flex>
               <Flex justify={"center"} direction={"column"} p={1} h={"50vh"}>
                  <Heading>Cattleya Durigan</Heading>
                  <Text>
                     Pão de açúcar ( Durigan x Brabantiae), minhas preferidas,
                     pintalgadas , primeira floração, raízes incontroláveis,
                     cultivo pendurada, vaso plástico, substrato macadâmia e
                     brita, adubo Peters 20-20-20, 50% sombra, híbrido
                     lindíssimo.
                  </Text>
               </Flex>
            </SimpleGrid>
         </Container>
      </Box>
   );
}

export default memo(OrchidsDetachTwo);
