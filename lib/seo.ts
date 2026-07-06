import type { Metadata } from 'next';

const siteUrl = 'https://fotografiaperez.com';
const siteName = 'Estudio Fotográfico Pérez';
const defaultImage =
  'https://res.cloudinary.com/duaj7oxcq/image/upload/v1640221002/estudio_fotografico_perez/estudio_v2_ygacp3.jpg';

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function pageMetadata({ title, description, path, image = defaultImage }: PageMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url,
      siteName,
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 900, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
