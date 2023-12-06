import {Main} from "../components/Main.jsx";
import {Header} from "../components/home/Header/Header.jsx";
import {Faq} from "../components/home/Faq.jsx";
import {Gallery} from "../components/home/Gallary.jsx";
import {Guide} from "../components/home/Guide.jsx";
import {EmptyNuts} from "../components/home/EmptyNuts.jsx";
import {Benefits} from "../components/home/Benefits.jsx";
import {Team} from "../components/home/Team.jsx";
import {Mission} from "../components/home/mission/Mission.jsx";

export const Home = () => (
  <Main>
    <Header />
    <Mission />
    <Team />
    <Benefits />
    <EmptyNuts />
    <Guide />
    <Gallery />
    <Faq />
  </Main>
)
