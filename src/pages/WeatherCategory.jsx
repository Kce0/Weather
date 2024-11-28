import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function WeatherCategory() {
  return (
    <Wrap>
      <Menu />
      <Main>WeatehrCategory</Main>
      <Footer />
    </Wrap>
  );
}

export default WeatherCategory;
