import React from "react";

import Head from "next/head";

export interface TwitterMetaTagsProps {
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  twitterImg?: string;
}

export const TwitterMetaTags: React.FC<TwitterMetaTagsProps> = ({
  twitterCard = "summary_large_image",
  twitterImg,
}) => {
  return (
    <Head>
      <meta name="twitter:card" content={twitterCard} />
      {twitterImg && <meta name="twitter:image" content={twitterImg} />}
    </Head>
  );
};
