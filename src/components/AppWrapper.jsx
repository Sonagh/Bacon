import Navbar from "./layout/Navbar.jsx";
import Footer from "./layout/Footer.jsx";

const AppWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppWrapper;
