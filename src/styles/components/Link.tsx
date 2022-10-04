import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

type HTMLAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

// NextLink can receive a URL object or a string
export type LinkProps = Omit<HTMLAnchorProps, "href"> & {
  href: NextLinkProps["href"];
};

/**
 * The Next.js Link component provides multiple performance optimizations for
 * client side navigation. The underlying `<a>` element takes the styles
 * from the theme.
 *
 * https://mui.com/material-ui/guides/routing/
 * https://nextjs.org/docs/api-reference/next/link
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function CustomLink({ href, ...otherLinkProps }, ref) {
    return (
      <NextLink href={href} ref={ref} passHref>
        <a {...otherLinkProps} />
      </NextLink>
    );
  }
);
