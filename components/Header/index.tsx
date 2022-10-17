import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string;
}
export const Header: FC<IProps> = function ({ title }) {
  return (
    <Head>
      <title>{title} | yuricunha.</title>
      <meta
        name="description"
        content="I'm a database administrator with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."
      />
      <link rel="icon" href="/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="title" content="isyuricunha" />
      <meta
        name="description"
        content="I'm a database administrator with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://yuricunha.xyz/" />
      <meta property="og:title" content="isyuricunha | yuri cunha" />
      <meta
        property="og:description"
        content="I'm a database administrator with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."
      />
      <meta property="og:image" content="https://yuricunha.xyz/icon.png" />
      <meta property="theme-color" content="#d6cdf9" />

      <meta property="twitter:url" content="https://yuricunha.xyz" />
      <meta property="twitter:title" content="yuricunha.xyz" />
      <meta
        property="twitter:description"
        content="I'm a database administrator with over 3 years of experience, and a student who spends most all of his free time doing open source projects/websites/softwares."
      />
      <meta property="twitter:image" content="https://yuricunha.xyz/icon.png" />
      <meta property="twitter:domain" content="yuricunha.xyz" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
