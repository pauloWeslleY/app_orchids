interface CarouselProps {
   id?: number;
   title: string;
   description: string;
   imageUrl: string;
}

const CAROUSEL: Array<CarouselProps> = [
   {
      id: 1,
      title: "Só Phalaenopsis",
      description: "Colorindo o jardim.",
      imageUrl: "/image/bg_orchids1.jpg",
   },
   {
      id: 2,
      title: "Phalaenopsis",
      description: "Flor em destaque.",
      imageUrl: "/image/bg_orchids2.jpg",
   },
   {
      id: 3,
      title: "Só Phalaenopsis",
      description: "Colorindo o jardim.",
      imageUrl: "/image/bg_orchids3.jpg",
   },
   {
      id: 4,
      title: "Só Phalaenopsis",
      description: "Colorindo o jardim.",
      imageUrl: "/image/bg_orchids4.jpg",
   },
]

export {CAROUSEL}