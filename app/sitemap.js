import { SITE_URL, getSitemapPaths } from '../lib/page-metadata';

export default function sitemap() {
  const paths = getSitemapPaths();
  const now = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.split('/').length <= 2 ? 0.9 : 0.75,
  }));
}
