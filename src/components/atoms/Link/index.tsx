import React, { AnchorHTMLAttributes } from "react"
import styled from "styled-components"
import {
  Link as ReactRouterLink,
  LinkProps as ReactRouterLinkProps,
} from "react-router-dom";

interface SharedLinkProps {
  /**
   * Adds a class name to add to the underlying HTML element.
   */
  className?: string;
}

interface CommonLinkProps extends SharedLinkProps {
  /**
   * Adds the attribute "target=_blank"
   */
  openInNewTab?: boolean;
  /**
   * Removes the visited style from the link when the user has visited that URL previously
   */
  useVisitedStyles?: boolean;
}

interface LinkPropsRenderingHTMLAnchor
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
  CommonLinkProps {
  /**
   * 	Adds the given URL to the link's href attribute and render KLink as a HTML anchor element
   */
  href: string;
}

interface LinkPropsRenderingReactRouterLink
  extends ReactRouterLinkProps,
  CommonLinkProps {
  /**
 * 	Renders CLink as a React Router Link
 */
  renderReactRouterLinkInstead: typeof ReactRouterLink; // Currently, this component's types and tests only support rendering a React Router `Link` component via this prop. If you want to return another component, only the types and the tests need updating
}

type LinkProps =
  | LinkPropsRenderingHTMLAnchor
  | LinkPropsRenderingReactRouterLink;


const UnstyledLink: React.FC<LinkProps> = (props) => {

  if (isLinkPropsRenderingHTMLAnchor(props)) {
    const {
      openInNewTab,
      useVisitedStyles,
      children,
      ...otherProps
    } = props;

    return (
      <a
        {...(openInNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        {...otherProps}
      >
        {children} {openInNewTab && `(opens in new tab)`}
      </a>
    );
  } else if (isLinkPropsRenderingReactRouterLink(props)) {
    const {
      renderReactRouterLinkInstead,
      openInNewTab,
      useVisitedStyles,
      ...otherProps
    } = props;

    if (props.openInNewTab) {
      console.warn(
        `If you want to open a link in a new tab, don't use React Router 'Link'.`
      );
    }

    const RouterLinkComponent = renderReactRouterLinkInstead;

    return (
      <RouterLinkComponent {...otherProps} />
    );
  } else {
    return <></>
  }
}

function isLinkPropsRenderingHTMLAnchor(
  props: any
): props is LinkPropsRenderingHTMLAnchor {
  return props && !props.renderReactRouterLinkInstead;
}

function isLinkPropsRenderingReactRouterLink(
  props: any
): props is LinkPropsRenderingReactRouterLink {
  return props && props.renderReactRouterLinkInstead;
}


const CLink = styled(UnstyledLink)`  
  color: var(--colour-link);
  font-size: ${`var(--font-size-body)`};
  text-decoration: unerline;

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--colour-focus);
  }

  &:visited {
    color: var(--colour-visited);
  }
`

export default CLink;