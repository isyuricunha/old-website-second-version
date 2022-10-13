import { Main } from "@components/Main";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Popup } from "@components/Popup";

const Home = () => {
  return (
    <div>
      <Header title="Home" />

      <Popup />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
