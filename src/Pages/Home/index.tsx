import { memo } from "react";
// import { Parallax } from "react-parallax";

// import { Detach } from "../../components/Detach";
import { Navigation } from "../../components/Navigation";
// import { ParallaxPage } from "../../components/Parallax";
import { NavBar } from "../../components/NavBar";
import { Nav } from "../../components/Nav";

// import styles from "./styles.module.scss";

// const image1 = "/image/bg_header.jpg";
// const image4 = "/image/orquidea_bg.jpg";

export function Home() {
   return (
      <section>
         <Navigation />
         <NavBar />
         <Nav />

         {/* <section style={{ textAlign: "center" }}>
            <Parallax bgImage={image1} strength={400}>
               <div style={{ height: 600 }}>
                  <div className={styles.hero__parallax}>
                     <h2>Orquidário Iara</h2>
                  </div>
               </div>
            </Parallax>
            <Detach />
            <div style={{ height: "50vh" }}></div>
         </section> */}

         {/* <ParallaxPage /> */}
      </section>
   );
}

export default memo(Home);
