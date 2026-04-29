import { pageMetadata } from '../../../lib/page-metadata';

const path = '/advisory/tax-planning-optimization';
const m = pageMetadata[path];
export const metadata = {
  title: m.title,
  description: m.description,
};

export default function RouteLayout({ children }) {
  return children;
}
