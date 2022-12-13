import styled from "@emotion/styled";
import { Link } from "@mui/material";

import { theme } from "../../styles";

export const StyledFooter = styled("footer")`
  background-color: ${theme.palette.common.black};
  padding: ${theme.spacing(8, 3)};
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
