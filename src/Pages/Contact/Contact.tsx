import { ReactElement } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { Footer, NavBar, Title, PageContact } from "./index";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

interface IconSocialProps {
   id?: number;
   icon: ReactElement;
   label: string;
   link: string;
}

const SOCIAL: Array<IconSocialProps> = [
   {
      id: 1,
      icon: <FaFacebook />,
      label: "Button Facebook",
      link: "https://www.facebook.com/OrquidarioIara-2056369527724296/",
   },
   {
      id: 2,
      icon: <BsInstagram />,
      label: "Button Instagram",
      link: "https://www.instagram.com/orquidario_iara/",
   },
   {
      id: 3,
      icon: <FaWhatsapp />,
      label: "Button WhatsApp",
      link: "tel:+55 12 991415642",
   },
];

export default function Contact() {
   const isIconSocial = () =>
      SOCIAL.map((props) => (
         <IconButton
            key={props.id}
            isRound={true}
            size={"5rem"}
            fontSize={"20rem"}
            boxSize={"50"}
            transition={"all 0.4s ease-in-out"}
            _hover={{
               color: "pink.400",
               transform: "scale(110%)",
            }}
            color={"pink.10"}
            aria-label={props.label}
            icon={props.icon}
            onClick={() => window.open(props.link)}
         />
      ));

   return (
      <section>
         <NavBar />
         <Title title="Contatos" />

         <PageContact />

         <Title title="Rede Sociais" />

         <Flex py={"3rem"} gap={9} alignItems={"center"} justify={"center"}>
            {isIconSocial()}
         </Flex>

         <Footer />
      </section>
   );
}
