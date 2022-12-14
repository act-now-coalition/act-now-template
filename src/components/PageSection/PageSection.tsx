import { Box, BoxProps } from "@mui/material";

export interface PageSection extends BoxProps {
  /**
   * Content of the section.
   */
  children: React.ReactNode;
}

/**
 * Container for a page section, with good spacing defaults.
 */
export const PageSection = ({ children, ...otherBoxProps }: PageSection) => (
  <Box sx={{ my: { xs: 5, md: 5 } }} {...otherBoxProps}>
    {children}
  </Box>
);
