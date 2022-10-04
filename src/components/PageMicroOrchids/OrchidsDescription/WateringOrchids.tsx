import { memo } from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function WateringOrchids() {
   return (
      <Box py={"3rem"} color={"gray.600"}>
         <Container maxW={"7xl"}>
            <Flex wrap={"wrap"} gap={6}>
               <Flex
                  grow={1}
                  shrink={1}
                  basis={"70%"}
                  direction={"column"}
                  gap={3}
                  align={"center"}
               >
                  <Box>
                     <Heading fontWeight={"regular"} textAlign={"left"}>
                        {"Rega"}
                     </Heading>
                     <Text fontWeight={400} fontSize={"1.04rem"}>
                        {
                           "O excesso de água pode matar uma orquídea rapidamente. Nunca deixe pratinhos encharcados de água embaixo de suas orquídeas. Nunca molhe as orquídeas quando as folhas estiverem quentes pela incidência da luz solar, pois o choque térmico pode causar pequenas lesões que servem de porta de entrada para doenças. Molhe pela manhã ou no final da tarde. Borrife as folhas e deixe cair um pouco no vaso, deixando úmido, no verão aumente as regas, no inverno diminua."
                        }
                     </Text>
                  </Box>
               </Flex>
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
                     src={"/image/orchids_02.jpg"}
                     objectFit={"cover"}
                     boxSize={"xs"}
                     borderRadius={"1rem"}
                  />
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(WateringOrchids);
