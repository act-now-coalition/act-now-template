import { Link } from "@mui/material";

import { styled, theme } from "../../styles";

export const StyledFooter = styled("footer")`
  background-color: ${theme.palette.common.black};
  padding: ${theme.spacing(8, 3)};
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
