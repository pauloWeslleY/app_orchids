import { memo, ReactElement } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

interface IconProps {
   id?: number;
   icon: ReactElement;
   label: string;
   link: string;
}

const ICONS: Array<IconProps> = [
   {
      id: 1,
      icon: <FaFacebookSquare />,
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
      icon: <BsWhatsapp />,
      label: "Button WhatsApp",
      link: "tel:+55 12 991415642",
   },
];

export const isIcons = () =>
   ICONS.map((props) => (
      <FooterBtnIcon
         key={props.id}
         icon={props.icon}
         label={props.label}
         link={props.link}
      />
   ));

export function FooterBtnIcon({ icon, label, link }: IconProps) {
   const link_for_page = () => window.open(link);
   return (
      <IconButton
         isRound={true}
         fontSize={"1.5rem"}
         color={"gray.200"}
         bg={"transparent"}
         transition={"all .5s ease-out"}
         _hover={{
            bg: "transparent",
            transform: "translateY(-15px)",
         }}
         aria-label={label}
         icon={icon}
         onClick={link_for_page}
      />
   );
}

export default memo(FooterBtnIcon);
