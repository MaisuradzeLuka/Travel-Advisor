// import { Autocomplete } from "@react-google-maps/api";
import { IoMdSearch } from "react-icons/io";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navBar">
      <h1>Travel Advisor</h1>
      {/* <Autocomplete> */}
      <div className="navBar__rightSide">
        <p>Explore new places</p>
        <div>
          <button>
            <IoMdSearch />
          </button>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      {/* </Autocomplete> */}
    </nav>
  );
};

export default Header;
