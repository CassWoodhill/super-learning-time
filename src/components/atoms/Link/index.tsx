import React from "react";
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";
import css from "./style.module.scss";

interface LinkPropsRenderingReactRouterLink {
  hideUnderline?: boolean;
  standalone?: boolean;
  className?: string;
  to: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkPropsRenderingReactRouterLink> = ({
  to,
  children,
}) => {
  return (
    <>
      <ReactRouterLink to={to} className={css["link"]}>
        {children}
      </ReactRouterLink>
    </>
  );
};
