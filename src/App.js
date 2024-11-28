import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import WeatherCategory from "./pages/WeatherCategory";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:weatherId" element={<Detail />} />
      <Route path="/location" element={<WeatherCategory />} />
      <Route path="/5day" element={<WeatherCategory />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
