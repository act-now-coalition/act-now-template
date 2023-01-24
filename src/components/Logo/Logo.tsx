import { Link } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/placeholderlogo.png" width={100} height={80} alt="Site logo" />
    </Link>
  );
};

export default Logo;
