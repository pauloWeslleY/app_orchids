import { memo } from "react";
import {
   Container,
   SimpleGrid,
   Image,
   Flex,
   Heading,
   Text,
   Divider,
} from "@chakra-ui/react";

export function Detach() {
   return (
      <Container maxW={"container.xl"} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Flex flexDir={"column"} justify={"center"}>
               <Heading color={"gray.700"}>
                  A digital Product design agency
                  <Divider
                     w={"15rem"}
                     bg={"pink.10"}
                     p={"0.1rem"}
                     mt={"0.3rem"}
                  />
               </Heading>
               <Text color={"gray.500"} fontSize={"lg"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
               </Text>
            </Flex>
            <Flex>
               <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/image/orchids_tb.jpg"}
                  objectFit={"cover"}
                  w={"30rem"}
               />
            </Flex>
         </SimpleGrid>
      </Container>
   );
}
export default memo(Detach);
