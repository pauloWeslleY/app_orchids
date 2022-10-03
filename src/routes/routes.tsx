import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Orchids } from "../Pages/Orchids";

export function AppRoutes() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orchids" element={<Orchids />} />
         </Routes>
      </BrowserRouter>
   );
}
