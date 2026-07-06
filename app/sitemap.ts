import type { MetadataRoute } from 'next';

const siteUrl = 'https://fotografiaperez.com';

const routes = [
  { path: '', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/nosotros', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/promociones', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/contacto', priority: 0.6, changeFrequency: 'yearly' as const },
  { path: '/servicios/sesion-fotografico', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/servicios/impresiones', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/servicios/cuadros', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/servicios/diseno-grafico', priority: 0.9, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
