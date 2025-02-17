import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../containers/home/home";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
