import { memo } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CardContact } from "./index";

export interface PageContactProps {
   label: string;
   name: string;
   icon: any;
}

export function PageContact() {
   const CONTACT: Array<PageContactProps> = [
      {
         label: "E-mail",
         name: "rosanaorquideas@gmail.com",
         icon: HiOutlineMail,
      },
      {
         label: "Telefone",
         name: "+55 12 99141-5642",
         icon: FiPhone,
      },
      {
         label: "Endereço",
         name: "Estrada Municipal Tito Vilela, Lorena SP",
         icon: HiOutlineLocationMarker,
      },
   ];
   return (
      <Box>
         <Container maxW={"6xl"}>
            <Flex flexWrap={"wrap"}>
               {CONTACT.map((contact, index) => (
                  <CardContact
                     key={index}
                     label={contact.label}
                     name={contact.name}
                     icon={contact.icon}
                  />
               ))}
            </Flex>
         </Container>
      </Box>
   );
}

export default memo(PageContact);
