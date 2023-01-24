import { Link } from "@mui/material";

export interface LogoProps {
  /**
   * Relative path to the image url.
   */
  imgUrl: string;
  /**
   * Optional width in pixels.
   * If unspecified, the image will take up 100% of the available width.
   */
  width?: number;
}

const Logo: React.FC<LogoProps> = ({ imgUrl, width }) => {
  return (
    <Link href="/">
      <img src={imgUrl} width={width ?? "100%"} alt="Site logo" />
    </Link>
  );
};

export default Logo;
