import { Box, Container } from "@mui/material";

import { styled } from "../../styles";

/**
 * Simple container with default margins to separate
 * sections on a page.
 */
export const PageSection = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

/**
 * Simple container with default margins and a border.
 */
export const PageSectionBorder = styled(PageSection)`
  border: solid 1px ${({ theme }) => theme.palette.border.default};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    padding: ${({ theme }) => theme.spacing(5)};
  }
`;

/**
 * Container for the content of a page. It has responsive
 * vertical margins.
 */
export const PageContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: ${({ theme }) => theme.spacing(7)};
    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
`;

/**
 * Empty placeholder box. Useful to visually show the
 * layout of a page before the real content is available.
 */
export const Placeholder = styled(Box)`
  border: dashed 2px ${({ theme }) => theme.palette.border.default};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  min-height: 300px;
  display: grid;
  place-items: center;

  &:before {
    font-size: ${({ theme }) => theme.typography.overline.fontSize};
    font-family: ${({ theme }) => theme.typography.overline.fontFamily};
    font-weight: ${({ theme }) => theme.typography.overline.fontWeight};
    color: ${({ theme }) => theme.palette.grey[500]};
    content: "PLACEHOLDER";
  }
`;
