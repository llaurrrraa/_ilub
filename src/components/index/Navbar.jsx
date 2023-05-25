import "../../scss/components/navbar.scss";

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
          
      </div>
    </nav>
  )
};

export default Navbar;