import React from "react";
import Head from "next/head";

export interface PageMetaTagsProps {
  siteName: string;
  url: string;
  title: string;
  description: string;
  socialImg?: string;
  socialImgWidth?: string;
  socialImgHeight?: string;
  socialImgType?: string;
}

export const PageMetaTags: React.FC<PageMetaTagsProps> = ({
  siteName,
  url,
  title,
  description,
  socialImg,
  socialImgWidth = "1200",
  socialImgHeight = "630",
  socialImgType = "image/png",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {socialImg && (
        <>
          <meta property="og:image:url" content={socialImg} />
          <meta property="og:image:width" content={socialImgWidth} />
          <meta property="og:image:height" content={socialImgHeight} />
          <meta property="og:image:type" content={socialImgType} />
        </>
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};
