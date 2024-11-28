import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Wrap, Main } from "../styles/StyledComponent";

function Home() {
  return (
    <Wrap>
      <Menu />
      <Main></Main>
      <Footer />
    </Wrap>
  );
}

export default Home;
