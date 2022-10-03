import { memo } from "react";
import { Parallax } from "react-parallax";
import { IMAGE_HOME_TWO } from "./index";

export function ParallaxHomeTwo() {
   return (
      <section style={{ textAlign: "center" }}>
         <Parallax blur={4} bgImage={IMAGE_HOME_TWO} strength={200}>
            <div style={{ height: 500 }}></div>
         </Parallax>
      </section>
   );
}

export default memo(ParallaxHomeTwo);
