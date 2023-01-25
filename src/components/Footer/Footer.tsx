import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { StyledFooter, StyledLink } from "./Footer.style";

const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Stack spacing={3} maxWidth="md" margin="auto">
        <Box bgcolor={theme.palette.common.white} width={100} p={1}>
          Logo
        </Box>
        <Typography variant="paragraphLarge" color={theme.palette.common.white}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <Box sx={{ color: theme.palette.common.white }}>
          <StyledLink href="/">About</StyledLink>
          &nbsp;·&nbsp;
          <StyledLink href="/">Contact</StyledLink>
          &nbsp;·&nbsp;
          <StyledLink href="/">Terms</StyledLink>
        </Box>
        <ButtonGroup disableRipple>
          <IconButton edge="start" sx={{ color: theme.palette.common.white }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: theme.palette.common.white }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: theme.palette.common.white }}>
            <InstagramIcon />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </StyledFooter>
  );
};

export default Footer;
