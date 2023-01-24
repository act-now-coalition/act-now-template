import { Link } from "@mui/material";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/placeholderlogo.png"
        width={100}
        height={80}
        alt="Site logo"
      />
    </Link>
  );
};

export default Logo;
