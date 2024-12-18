import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function WeatherCategory({ category }) {
  return (
    <Wrap>
      <Menu />
      <Main>{category}</Main>
      <Footer />
    </Wrap>
  );
}

export default WeatherCategory;
