import Head from 'next/head';
import { getStaticAssetPath } from '@/utils/misc';

type Props = {
  title?: string;
  description?: string;
  ogImageUrl?: string;
  url?: string;
};

const HeadSEO = ({
  title = 'Dcentral - Trade Property Across Virtual Worlds',
  description = 'Frictionless transactions within and between games, driven by virtual asset property rights.',
  ogImageUrl = getStaticAssetPath('/images/og-default.jpg'),
  url = '/',
}: Props) => {
  return (
    <Head>
      <title key={title}>{title}</title>
      <meta name="description" key={description} content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* open graph metadata */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Dcentral Me" />
      <meta property="og:type" content="website" />
      <meta property="og:title" key={title} content={title} />
      <meta property="og:description" key={description} content={description} />
      <meta property="og:image" key={ogImageUrl} content={ogImageUrl} />
      <meta property="og:url" key={url} content={url} />
      {/* twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://twitter.com/dcentralMe" />
      <meta name="twitter:title" key={title} content={title} />
      <meta
        name="twitter:description"
        key={description}
        content={description}
      />
      <meta name="twitter:image" key={ogImageUrl} content={ogImageUrl} />
      {/* canonical link */}
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default HeadSEO;
