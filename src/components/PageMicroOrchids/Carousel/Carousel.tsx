import { Box } from "@chakra-ui/react";
import { memo } from "react";
import { SliderCarousel, Slide, SliderProps } from "../../Slider";
import { CarouselItem, CAROUSEL } from "./index";

export function Carousel() {
   const settings: SliderProps = {
      autoplay: true,
      spaceBetween: 50,
      slidesPerView: 1,
      draggable: true,
      loop: true,
      pagination: {
         clickable: true,
      },
   };

   return (
      <Box bg={"blackAlpha.300"}>
         <SliderCarousel settings={settings}>
            {CAROUSEL.map((item) => (
               <Slide key={item.id}>
                  <CarouselItem carousel={item} />
               </Slide>
            ))}
         </SliderCarousel>
      </Box>
   );
}

export default memo(Carousel);
