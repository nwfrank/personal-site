import { Link } from "react-router-dom";

export const NavLink = (props) => {
  return (
    <Link to={props.to} className="text-gray-700 hover:text-black">
      {props.children}
    </Link>
  );
};
