import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The level of the heading. For example, if level is 1, this component renders an HTML h1.
   */
  level: 1 | 2 | 3 | 4;
  /**
   * Adds a class name to add to the underlying HTML element.
   */
  className?: string;
}


const UnstyledHeading: React.FC<HeadingProps> = ({
  level,
  children,
  className,
  ...otherProps
}) => {
  const props = {
    className: `
        ${className}
      `,
    ...otherProps,
  };

  return {
    1: <h1 {...props}>{children}</h1>,
    2: <h2 {...props}>{children}</h2>,
    3: <h3 {...props}>{children}</h3>,
    4: <h4 {...props}>{children}</h4>,
  }[level];
}


const CHeading = styled(UnstyledHeading) <HeadingProps>`  
  color: #222;
  font-size: ${props => `var(--font-size-heading-${props.level})`};
  line-height: 1.25;
  margin-bottom: 0;
  max-width: 60ch;
`

export default CHeading;