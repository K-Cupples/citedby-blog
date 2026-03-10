import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  const site = 'https://citedby.co/blog';

  const urls = [
    `  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>1.0</priority>
  </url>`,
    ...posts.map(
      (post) => `  <url>
    <loc>${site}/${post.slug}/</loc>
    <lastmod>${post.data.updatedDate?.toISOString().split('T')[0] ?? post.data.publishDate.toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>`
    ),
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
