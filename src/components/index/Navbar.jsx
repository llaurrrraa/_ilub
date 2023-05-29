import "../../scss/components/navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const tabs = [
    {
      id: 1,
      name: "WOMAN"
    },
    {
      id: 2,
      name: "MAN"
    },
    {
      id: 3,
      name: "SALE"
    }
  ];


  return (
    <nav className="navbar">
      <div className="icon">
        i like && u buy
      </div>
      <div className="tabs">
        {tabs.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </div>
      <div className="right-btns">
        <FontAwesomeIcon icon={ fas.faCartShopping } />
        <FontAwesomeIcon icon={ fas.faCircleUser } />
      </div>
    </nav>
  )
};

export default Navbar;