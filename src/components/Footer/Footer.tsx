import React from "react";
import { Stack } from "@mui/material";
import { StyledFooter } from "./Footer.style";

export interface FooterProps {
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <StyledFooter>
      <Stack spacing={3} maxWidth="960px" margin="auto">
        {children}
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
