import { NavItem } from "../types/NavItem";

export const NAV_ITEMS: Array<NavItem> = [
   {
      label: "Home"
   },
   {
      label: "Orchids",
      children: [
         {
            label: "Types Orchids",
            href: "#",
         },
         {
            label: "Accessories",
            href: "#",
         },
      ],
   },
   {
      label: "About",
      href: "#",
   },
   {
      label: "Contact",
      href: "#",
   },
];