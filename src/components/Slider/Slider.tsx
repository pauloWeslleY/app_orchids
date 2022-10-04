import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Slider.scss";

interface SliderProps {
   settings: SwiperProps;
   children: ReactNode;
}

export function SliderCarousel({ settings, children }: SliderProps) {
   return (
      <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
         {children}
      </Swiper>
   );
}
