import { memo } from "react";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { isIcons } from "./index";
import { Link } from "react-router-dom";

export function FooterContent() {
   const FOOTER_MENU = [
      {
         menu: "Orquídeas",
         path: "orchids",
      },
      {
         menu: "Micro Orquídeas",
         path: "micro_orchids",
      },
      {
         menu: "Acessórios",
         path: "accessories",
      },
   ];

   return (
      <Container maxW={"7xl"}>
         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
            <Flex h={"auto"} justify={"center"} direction={"column"} gap={1}>
               <Heading fontWeight={"regular"} textAlign={"center"}>
                  Quem Somos
               </Heading>
               <Box textAlign={"center"}>
                  Vendemos Orquídeas e Acessórios (materiais para cultivo)
                  vasos, plaquinhas, substratos, ferramentas, etc. Entregamos em
                  Casa - Orquídeas Delivery - Construímos seu Orquidário -
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
               <Heading fontWeight={"regular"}>Menu</Heading>
               {FOOTER_MENU.map((menu, index) => (
                  <Link
                     to={`/${menu.path}`}
                     style={{ textDecoration: "none" }}
                     key={index}
                  >
                     {menu.menu}
                  </Link>
               ))}
            </Flex>
            <Flex
               align={"center"}
               justify={"start"}
               direction={"column"}
               gap={4}
               h={"10rem"}
            >
               <Heading fontWeight={"regular"}>Siga nos</Heading>
               <Flex gap={1}>{isIcons()}</Flex>
            </Flex>
         </SimpleGrid>
      </Container>
   );
}

export default memo(FooterContent);
