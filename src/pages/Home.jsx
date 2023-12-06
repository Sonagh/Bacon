import AppWrapper from "../components/AppWrapper.jsx";
import Header from "../components/home/Header/Header.jsx";
import Faq from "../components/home/Faq.jsx";
import Gallery from "../components/home/Gallery.jsx";
import Guide from "../components/home/guide/Guide.jsx";
import EmptyNuts from "../components/home/emptyNuts/EmptyNuts.jsx";
import Benefits from "../components/home/benefits/Benefits.jsx";
import Team from "../components/home/Team.jsx";
import Mission from "../components/home/mission/Mission.jsx";

const Home = () => (
  <AppWrapper>
    <Header />
    <Mission />
    <Team />
    <Benefits />
    <EmptyNuts />
    <Guide />
    <Gallery />
    <Faq />
  </AppWrapper>
)

export default Home;
