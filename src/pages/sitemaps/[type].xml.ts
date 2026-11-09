import type { APIRoute } from 'astro';
import servicesData from '../../data/services.json';
import subservicesData from '../../data/subservices.json';
import citiesData from '../../data/cities.json';
import neighborhoodsData from '../../data/neighborhoods.json';
import costsData from '../../data/costs.json';

const siteUrl = 'https://michiganwaterdamage.us';

const problemGuides = [
  'water-bill-suddenly-doubled-hidden-leak',
  'water-meter-running-everything-off',
  'mold-home-inspection-closing-michigan',
  'basement-flooded-what-to-do',
  'ceiling-dripping-wet-spot-upstairs',
  'landlord-tenant-water-damage-mold',
];

export async function getStaticPaths() {
  return [
    { params: { type: 'services' } },
    { params: { type: 'cities' } },
    { params: { type: 'neighborhoods' } },
    { params: { type: 'guides' } },
    { params: { type: 'pages' } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const { type } = params;
  let urls: string[] = [];

  if (type === 'services') {
    // 5 pillars
    servicesData.forEach((s) => urls.push(`/${s.slug}/`));
    // 28 subservices
    subservicesData.forEach((sub) => urls.push(`/${sub.service}/${sub.slug}/`));
  } else if (type === 'cities') {
    // 6 city hubs
    citiesData.forEach((c) => urls.push(`/${c.slug}-mi/`));
    // 30 city x service
    citiesData.forEach((c) => {
      servicesData.forEach((s) => urls.push(`/${c.slug}-mi/${s.slug}/`));
    });
    // 48 city x priority subservice
    const prioritySubs = subservicesData.filter((s) => s.priority);
    citiesData.forEach((c) => {
      prioritySubs.forEach((sub) => urls.push(`/${c.slug}-mi/${sub.service}/${sub.slug}/`));
    });
  } else if (type === 'neighborhoods') {
    // 38 neighborhoods
    neighborhoodsData.forEach((n) => urls.push(`/${n.city}-mi/${n.slug}/`));
  } else if (type === 'guides') {
    // 6 cost guides
    costsData.forEach((c) => urls.push(`/cost/${c.topic}/`));
    // 6 problem guides
    problemGuides.forEach((g) => urls.push(`/guides/${g}/`));
  } else if (type === 'pages') {
    urls = [
      '/',
      '/how-it-works/',
      '/disclosure/',
      '/editorial-policy/',
      '/privacy/',
      '/terms/',
      '/contact/',
      '/sitemap/',
    ];
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
