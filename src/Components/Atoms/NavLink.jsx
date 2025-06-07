import { Link } from "react-router-dom";

export const NavLink = (props) => {
  return (
    <Link to={props.to} className="text-copy-secondary hover:text-blue-400">
      {props.children}
    </Link>
  );
};
