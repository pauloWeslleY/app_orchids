import { Footer, NavBar, Title, PageAbout } from "./index";

export default function About() {
   return (
      <section>
         <NavBar />
         <Title title="Quem Somos" />

         <PageAbout />

         <Footer />
      </section>
   );
}
