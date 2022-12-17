import { ReactElement } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { Title, PageContact } from "./index";
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

export function Contact() {
   const isIconSocial = () =>
      SOCIAL.map((props) => (
         <IconButton
            key={props.id}
            isRound={true}
            size={"5rem"}
            fontSize={"4rem"}
            transition={"all 0.4s ease-in-out"}
            _hover={{
               color: "red.500",
               transform: "scale(112%) translateY(-10px)",
            }}
            color={"pink.10"}
            aria-label={props.label}
            icon={props.icon}
            onClick={() => window.open(props.link)}
         />
      ));

   return (
      <main>
         <header>
            <Title title="Contatos" />
         </header>

         <section>
            <PageContact />

            <Title title="Rede Sociais" />

            <Flex pb={"5rem"} gap={8} alignItems={"center"} justify={"center"}>
               {isIconSocial()}
            </Flex>
         </section>
      </main>
   );
}
