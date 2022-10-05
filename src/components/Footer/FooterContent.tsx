import { memo } from "react";
import {
   Box,
   Container,
   Flex,
   Heading,
   SimpleGrid,
   Text,
} from "@chakra-ui/react";
import { isIcons } from "./index";
import { Link } from "react-router-dom";

export function FooterContent() {
   const FOOTER_MENU = [
      {
         menu: "Inicio",
         path: "",
      },
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
      {
         menu: "Quem Somos",
         path: "about",
      },
      {
         menu: "Contatos",
         path: "contact",
      },
   ];

   return (
      <Container maxW={"7xl"}>
         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3}>
            <Flex justify={"start"} direction={"column"} gap={1}>
               <Heading fontWeight={"regular"} textAlign={"center"}>
                  Quem Somos
               </Heading>
               <Text textAlign={"center"}>
                  Vendemos Orquídeas e Acessórios (materiais para cultivo)
                  vasos, plaquinhas, substratos, ferramentas, etc. Entregamos em
                  Casa - Orquídeas Delivery - Construímos seu Orquidário -
                  Agende uma visita, contatos pelo WhatsApp 12-991415642 -
                  Lorena - SP - Brasil. Visitas Agendadas para Conhecer nosso
                  Orquidário Iara
               </Text>
            </Flex>
            <Flex
               align={"center"}
               justify={"start"}
               direction={"column"}
               gap={2}
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
            >
               <Heading fontWeight={"regular"}>Siga nos</Heading>
               <Flex gap={1}>{isIcons()}</Flex>
            </Flex>
         </SimpleGrid>
      </Container>
   );
}

export default memo(FooterContent);
