import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeatherCategory from "./pages/WeatherCategory";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<WeatherCategory />} />
      <Route path="/today" element={<WeatherCategory category="today" />} />
      <Route path="/fiveday" element={<WeatherCategory category="fiveday" />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
