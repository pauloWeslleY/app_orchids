import { memo } from "react";
import {
   Box,
   Button,
   Container,
   Flex,
   Heading,
   Icon,
   Image,
   SimpleGrid,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { Title } from "./index";

export function Contact() {
   return (
      <section>
         <Title title="Contatos" />
         <Box py={"2rem"}>
            <Container maxW={"5xl"}>
               <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                  <Flex
                     flexDir={"column"}
                     justify={"center"}
                     p={"1rem"}
                     gap={"1rem"}
                     height={"auto"}
                     color={"gray.800"}
                  >
                     <Heading fontWeight={700}>
                        Entre em contato com a gente!
                     </Heading>
                     <Box
                        as={"span"}
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"1.2rem"}
                        gap={"0.2rem"}
                     >
                        <Icon as={MdLocationOn} w={6} h={6} color={"pink.10"} />
                        Estrada Municipal Tito Vilela, Lorena SP
                     </Box>
                     <Box
                        as={"span"}
                        display={"flex"}
                        alignItems={"center"}
                        fontSize={"1.2rem"}
                        gap={"0.2rem"}
                     >
                        <Icon as={EmailIcon} w={6} h={6} color={"pink.10"} />
                        rosanaorquideas@gmail.com
                     </Box>
                     <Button
                        w={"10rem"}
                        leftIcon={<BsWhatsapp />}
                        bg={"green.300"}
                        color={"whiteAlpha.900"}
                        transition={"all 0.4s ease-in-out"}
                        _hover={{
                           bg: "whiteAlpha.700",
                           color: "green.300",
                           transform: "scale(110%)",
                        }}
                        onClick={() => window.open("tel:+55 12 991415642")}
                     >
                        WhatsApp
                     </Button>
                  </Flex>
                  <Flex justify={"center"} height={"auto"}>
                     <Image
                        src={"/image/bg_contact.jpg"}
                        alt={"Orchids"}
                        objectFit={"cover"}
                        boxShadow={"xl"}
                        boxSize={"xs"}
                        borderRadius={"2rem"}
                     />
                  </Flex>
               </SimpleGrid>
            </Container>
         </Box>
      </section>
   );
}

export default memo(Contact);
