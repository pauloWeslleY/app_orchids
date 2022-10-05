export interface NavItem {
   label: string;
   subLabel?: string;
   children?: Array<NavItem>;
   link?: any;
}