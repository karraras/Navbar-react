import React from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [handle, SetHandle] = React.useState(false);
  const height = React.useRef(0);
  React.useEffect(() => {
    height.current = handle ? (height.current = 210) : (height.current = 0);
  }, [handle]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="" />
          <button className="nav-toggle" onClick={() => SetHandle((e) => !e)}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          style={{ height: `${height.current}px` }}
        >
          <ul className="links">
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
