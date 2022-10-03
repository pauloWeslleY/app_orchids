import { memo } from "react";
import {
   Box,
   Container,
   Flex,
   Heading,
   HStack,
   Link,
   SimpleGrid,
} from "@chakra-ui/react";
import { isIcons } from "./index";

export function FooterContent() {
   return (
      <section>
         <Container maxW={"1335px"}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
               <Flex h={"auto"} justify={"center"} direction={"column"} gap={1}>
                  <Heading textAlign={"center"}>Quem Somos</Heading>
                  <Box textAlign={"center"}>
                     Vendemos Orquídeas e Acessórios (materiais para cultivo)
                     vasos, plaquinhas, substratos, ferramentas, etc. Entregamos
                     em Casa - Orquídeas Delivery - Construímos seu Orquidário -
                     Agende uma visita, contatos pelo WhatsApp 12-991415642 -
                     Lorena - SP - Brasil. Visitas Agendadas para Conhecer nosso
                     Orquidário Iara
                  </Box>
               </Flex>
               <Flex
                  align={"center"}
                  justify={"start"}
                  direction={"column"}
                  gap={2}
                  h={"10rem"}
               >
                  <Heading>Menu</Heading>
                  <Link textTransform="uppercase">Orchids</Link>
                  <Link textTransform="uppercase">About Us</Link>
                  <Link textTransform="uppercase">Contact Us</Link>
               </Flex>
               <Flex
                  align={"center"}
                  justify={"start"}
                  direction={"column"}
                  gap={4}
                  h={"10rem"}
               >
                  <Heading>Follow us</Heading>
                  <Flex gap={1}>{isIcons()}</Flex>
               </Flex>
            </SimpleGrid>
         </Container>

         {/* <HStack
            flex={1}
            alignItems={"center"}
            justify={"space-around"}
            fontSize={{
               base: "12px",
               md: "16px",
            }}
            color="whiteAlpha.900"
            textAlign={{
               base: "center",
               md: "left",
            }}
         >
            <Flex h={"auto"} justify="start" direction="column" gap={1}>
               <Heading>Quem Somos</Heading>
               <Box w={"35rem"}>
                  Vendemos Orquídeas e Acessórios (materiais para cultivo)
                  vasos, plaquinhas, substratos, ferramentas, etc. Entregamos em
                  Casa - Orquídeas Delivery - Construímos seu Orquidário -
                  Agende uma visita, contatos pelo WhatsApp 12-991415642 -
                  Lorena - SP - Brasil. Visitas Agendadas para Conhecer nosso
                  Orquidário Iara
               </Box>
            </Flex>
            <Flex justify="start" direction="column" gap={1} h={"10rem"}>
               <Heading>Menu</Heading>
               <Link textTransform="uppercase">Orchids</Link>
               <Link textTransform="uppercase">About Us</Link>
               <Link textTransform="uppercase">Contact Us</Link>
            </Flex>
            <Flex justify="start" direction="column" gap={4} h={"10rem"}>
               <Heading>Follow us</Heading>
               <Flex gap={1}>{isIcons()}</Flex>
            </Flex>
         </HStack> */}
      </section>
   );
}

export default memo(FooterContent);
