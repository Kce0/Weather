import "../styles/common.css";
import { Wrap, Main } from "../styles/StyledComponent";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Detail() {
  return (
    <Wrap>
      <Menu />
      <Main>Detail페이지</Main>
      <Footer />
    </Wrap>
  );
}

export default Detail;
