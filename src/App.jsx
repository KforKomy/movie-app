import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites";
const App=()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;