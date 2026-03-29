import logo from "@/assets/images/dianeosis-seeklogo.png";
import { Link } from "@tanstack/react-router";
import Nav from "./Nav";

const Sidebar = () => {
  return (
    <aside className="w-62.5 bg-white py-5">
      <div className="text-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-32.25 inline-block" />
        </Link>
      </div>
      <Nav />
      <hr />
    </aside>
  );
};

export default Sidebar;
