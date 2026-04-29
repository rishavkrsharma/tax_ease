import { pageMetadata } from '../../../lib/page-metadata';

const path = '/compliance/roc-compliance';
const m = pageMetadata[path];
export const metadata = {
  title: m.title,
  description: m.description,
};

export default function RouteLayout({ children }) {
  return children;
}
