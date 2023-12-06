import Icons from "../../constants";

const Navbar = () => (
  <div className="navbar">
    <div className="container">
      <img className="logo" src={Icons.LOGO} alt="logo" />

      <div className="nav-items">
        <a className="nav-item" href="#">գլխավոր</a>
        <a className="nav-item" href="#">խանոիթ</a>
        <a className="nav-item" href="#">մեր մասին</a>
        <a className="nav-item" href="#">աշխատանք</a>
        <a className="nav-item" href="#">գործընկերներ</a>
        <a className="nav-item" href="#">բլոգ</a>
      </div>
    </div>
  </div>
)

export default Navbar;
