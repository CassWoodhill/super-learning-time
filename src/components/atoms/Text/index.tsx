import React, { HTMLAttributes } from "react"
import styled from "styled-components"

interface TextProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content that you want the text styles to apply to
   */
  children: React.ReactNode;
  /**
   * If `inline` is true, the text is rendered in a `<span>`.
   * Otherwise it's rendered in a `<p>`
   */
  inline?: boolean;
  /**
   *  If `bold` is true, the text is rendered with `font-weight: 700;`
   */
  bold?: boolean;
  /**
   * If `italic` is true, the text is rendered with `font-style: italic;`
   */
  italic?: boolean;
  /**
   * Adds an ID attribute with specified value
   * ### Accessibility Guidance
   * This is useful if you want to use the text element to describe a form input using `aria-describedby`
   */
  id?: string;
  /**
   * Hides the element visually, but ensures that it's still available to screen reader users
   */
  visuallyHidden?: boolean;
  /**
   * Use this to add a class name to add to the underlying `p` or `span` element
   */
  className?: string;
}

const StyledText = styled.p`  
  max-width: 70ch;
  color: #222;
`

const CText: React.FC<TextProps> = ({
  inline,
  children
}) => {
  return (
    <>
      {inline ? (
        <StyledText as="span">{children}</StyledText>
      ) : (<StyledText as="p">{children}</StyledText>)}

    </>
  )
}

export default CText;