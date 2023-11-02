import React from "react";

// import navigation data
import { navigationData } from "../data";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-8">
        {navigationData.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:scale-x-125 transition duration-1000"
            >
              {!item.link ? (
                <a href={item.href}>{item.name}</a>
              ) : (
                <Link to={item.href}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
