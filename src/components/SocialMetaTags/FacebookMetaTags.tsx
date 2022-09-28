import React from "react";
import Head from "next/head";

export interface FacebookMetaTagsProps {
  fbAppId?: string;
}

export const FacebookMetaTags: React.FC<FacebookMetaTagsProps> = ({
  fbAppId,
}) => {
  return (
    <Head>{fbAppId && <meta property="fb:app_id" content={fbAppId} />}</Head>
  );
};
