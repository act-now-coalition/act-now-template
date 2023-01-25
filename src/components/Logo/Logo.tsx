import { Link } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <img src="/placeholderlogo.png" width={70} height={56} alt="Site logo" />
    </Link>
  );
};

export default Logo;
