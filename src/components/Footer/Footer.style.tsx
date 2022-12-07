import { Link } from "@mui/material";
import styled from "@emotion/styled";
import { theme } from "../../styles";

export const StyledFooter = styled("footer")`
  background-color: ${theme.palette.common.black};
  width: 100%;
  padding: ${theme.spacing(8, 3)};
  position: fixed;
  bottom: 0px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;
