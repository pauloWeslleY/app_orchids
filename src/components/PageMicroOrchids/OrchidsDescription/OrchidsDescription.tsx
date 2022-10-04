import { memo } from "react";
import { Box, Container, Flex, Heading, Image } from "@chakra-ui/react";

export function OrchidsDescription() {
   return (
      <Box py={"2rem"} color={"gray.600"}>
         <Container maxW={"7xl"}>
            <Flex wrap={"wrap"} gap={6}>
               <Flex
                  grow={1}
                  shrink={1}
                  basis={"25%"}
                  align={"center"}
                  justify={"center"}
                  direction={"column"}
               >
                  <Heading fontWeight={"regular"}>{"A Orquídea"}</Heading>
                  <Image
                     alt={"feature image"}
                     src={"/image/orchids_01.jpg"}
                     objectFit={"cover"}
                     boxSize={"xs"}
                     borderRadius={"1rem"}
                  />
               </Flex>
               <Flex
                  grow={1}
                  shrink={1}
                  basis={"70%"}
                  direction={"column"}
                  gap={3}
                  justify={"flex-start"}
               >
                  <Box
                     pt={"3rem"}
                     as={"p"}
                     fontWeight={400}
                     fontSize={"1.04rem"}
                  >
                     {
                        "A orquídea não é uma flor qualquer e exatamente por ser especial que as pessoas acabam se apaixonando e querem cultiva-las, Como é uma flor especial, exige que você dê atenção e cuidado, e ela lhe retribuirá com as mais lindas flores que já viu. A maior parte das orquídeas acaba morrendo por causa de erros bastante simples que cultivadores cometem. Estes erros podem sser evitados facilmente. Precisei estudar muito e conviver mais de 25 anos com as orquídeas para aprender como cultiva-las e continuo aprendendo sempre."
                     }
                  </Box>
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(OrchidsDescription);
