import { NavItem } from "../types/NavItem";

export const NAV_ITEMS: Array<NavItem> = [
   {
      label: "Inicio",
      link: "",
   },
   {
      label: "Orquídeas",
      link: "/",
      children: [
         {
            label: "Orquídeas",
            link: "/orchids",
         },
         {
            label: "Micro Orquídeas",
            link: "/micro_orchids",
         },
         {
            label: "Acessórios",
            link: "/accessories",
         },
      ],
   },
   {
      label: "Quem Somos",
      link: "about",
   },
   {
      label: "Contatos",
      link: "contact",
   },
];

export const NAV_MOBILE: Array<NavItem> = [
   {
      label: "Inicio",
      link: "",
   },
   {
      label: "Orquídeas",
      link: "orchids",
   },
   {
      label: "Micro Orquídeas",
      link: "micro_orchids",
   },
   {
      label: "Acessórios",
      link: "accessories",
   },
   {
      label: "Quem Somos",
      link: "about",
   },
   {
      label: "Contatos",
      link: "contact",
   },
];