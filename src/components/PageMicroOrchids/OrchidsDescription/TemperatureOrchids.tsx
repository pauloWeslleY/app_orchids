import { memo } from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function TemperatureOrchids() {
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
                  <Image
                     alt={"feature image"}
                     src={"/image/orchids_03.jpg"}
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
                  align={"center"}
                  justify={"center"}
               >
                  <Box>
                     <Heading fontWeight={"regular"}>{"Temperatura"}</Heading>
                     <Text fontWeight={400} fontSize={"lg"}>
                        {
                           "Temperatura todas as orquídea se adapta bem as temperaturas entre 15 e 25 graus centrigados. Existem orquídeas que gostam do frio e outras do calor, devemos sempre cultivar as orquídeas que se alimentem no lugar em que vão ser cultivadas."
                        }
                     </Text>
                  </Box>
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(TemperatureOrchids);
