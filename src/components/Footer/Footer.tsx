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

import Logo from "../Logo";
import { StyledFooter, StyledLink } from "./Footer.style";

const Footer = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Stack spacing={3} maxWidth="md" margin="auto">
        <Box p={1}>
          <Logo />
        </Box>
        <Typography variant="paragraphLarge" color={theme.palette.common.white}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet imperdiet lectus.
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
