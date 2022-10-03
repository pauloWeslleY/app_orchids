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
      <Container maxW={"5xl"} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
            <Flex flexDir={"column"} justify={"center"}>
               <Heading color={"gray.700"} textAlign={"center"}>
                  Orquídea Pronenaea Crawshayana
               </Heading>

               <Text
                  as={"p"}
                  color={"gray.500"}
                  fontSize={"lg"}
                  textAlign={"center"}
               >
                  Pronenaea Crawshayana, cultivo em toboinha de madeira,
                  pendurada em local com muita sombra (70%), umidade 60%, adubo
                  foliar manutenção, quase sem nenhum substrato, um pouquinho de
                  sfagnum sobre as raízes, flores lindas todo ano.
               </Text>
            </Flex>
            <Flex alignItems={"flex-start"}>
               <Image
                  alt={"feature image"}
                  src={"/image/orchids_tb.jpg"}
                  objectFit={"cover"}
                  boxSize={"md"}
                  borderRadius={"3rem"}
               />
            </Flex>
         </SimpleGrid>
      </Container>
   );
}
export default memo(Detach);
