import { Title, PageAbout } from "./index";

export function About() {
   return (
      <main>
         <header>
            <Title title="Quem Somos" />
         </header>

         <section>
            <PageAbout />
         </section>
      </main>
   );
}
