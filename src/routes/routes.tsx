import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Orchids } from "../Pages/Orchids";
import { MicroOrchids } from "../Pages/MicroOrchids";
import { Accessories } from "../Pages/Accessories";
import { Contact } from "../Pages/Contact";
import { About } from "../Pages/About";

export function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orchids" element={<Orchids />} />
            <Route path="/micro_orchids" element={<MicroOrchids />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
}
