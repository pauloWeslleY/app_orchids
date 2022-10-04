import { AppRoutes } from "./routes/routes";
import { BackToTopButton } from "./components/BackToTopButton";
// import { NavBar } from "./components/NavBar";

function App() {
   return (
      <section>
         <AppRoutes />
         <BackToTopButton />
      </section>
   );
}

export default App;
