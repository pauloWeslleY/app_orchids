import { ReactNode } from 'react';
export interface CardsType {
   id?: number;
   name?: string;
   price?: string;
   image: string;
   image2?: any;
   cover?: any;
   description?: string;
}

export interface CardsHomeDetailsProps extends CardsType {
   title: ReactNode;
   content: ReactNode;
   onClose: () => void;
   isOpen: boolean;
}