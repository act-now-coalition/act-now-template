import { Link } from "@mui/material";

const Logo: React.FC = () => {
  return (
    <Link href="/" display="flex">
      <img src="/placeholderlogo.png" width={70} height={56} alt="Site logo" />
    </Link>
  );
};

export default Logo;
