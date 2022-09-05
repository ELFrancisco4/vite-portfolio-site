import { NavLink } from "react-router-dom";
type ItemProps = {
  name: string;
  className: string;
  to: string;
  onClick: any
  
};

const Items = ({ name, className, to, onClick }: ItemProps) => {
  return <li className={className}><NavLink onClick={onClick} to={to}>{name}</NavLink></li>;
};

export default Items;
