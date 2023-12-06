import { Navbar } from "./layout/Navbar.jsx";
import { Footer } from "./layout/Footer.jsx";

export const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
