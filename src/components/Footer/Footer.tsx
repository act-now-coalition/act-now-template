import React from "react";
import { Stack } from "@mui/material";
import { StyledFooter } from "./Footer.style";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  ButtonGroup,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { StyledLink } from "./Footer.style";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledFooter>
      <Stack spacing={3} maxWidth="960px" margin="auto">
        <Box bgcolor={theme.palette.common.white} width={100} p={1}>
          Logo
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
