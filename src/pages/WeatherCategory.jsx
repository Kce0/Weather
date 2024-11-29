import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

function WeatherCategory({ category }) {
  const dispath = useDispatch();
  const { weathers, loading, error } = useSelector((state) => state.weathers);

  return (
    <Wrap>
      <Menu />
      <Main>{category}</Main>
      <Footer />
    </Wrap>
  );
}

export default WeatherCategory;
