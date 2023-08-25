import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "../atoms/Link";
// import rooms from "../rooms";
import css from "./style.module.scss";
import { RootLayoutTop } from "./RootLayoutTop";
import { RootLayoutBottom } from "./RootLayoutBottom";

interface NavListItemProps {
  text: string;
  href: string;
}

const NavListItem: React.FC<NavListItemProps> = (props) => {
  const location = useLocation();
  const href = `/${props.href.replace(/^[\s\/]*/, "")}`;
  const className = href === location.pathname ? css.active : "";

  return (
    <li className={className}>
      <Link to={href}>{props.text}</Link>
    </li>
  );
};

export const RootLayout: React.FC = () => {
  return (
    <div className={css["root-layout"]}>
      <div className={css["root-layout-body"]}>
        {/* <nav className={css.navigation}>
          <ul>
            <NavListItem href="/" text="Home" />
            {rooms.map((room, i) => (
              <NavListItem key={i} href={room.path} text={room.name} />
            ))}
      </ul>
    </nav> */}
        <main className={css.main} >
          <Outlet />
        </main >
      </div >
    </div >
  );
};
