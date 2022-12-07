import { Link } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../styles";

export const StyledFooter = styled("footer")`
  padding: ${theme.spacing(8, 3)};
  background-color: ${theme.palette.common.black};
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
