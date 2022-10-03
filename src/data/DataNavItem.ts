import { NavItem } from "../types/NavItem";

export const NAV_ITEMS: Array<NavItem> = [
   {
      label: "Home",
      link: "",
   },
   {
      label: "Orchids",
      link: "orchids",
      children: [
         {
            label: "Types Orchids",
            link: "/orchids",
         },
         {
            label: "Accessories",
            link: "#",
         },
      ],
   },
   {
      label: "About",
      link: "#",
   },
   {
      label: "Contact",
      link: "#",
   },
];