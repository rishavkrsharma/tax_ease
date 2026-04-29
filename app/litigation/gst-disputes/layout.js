import { pageMetadata } from '../../../lib/page-metadata';

const path = '/litigation/gst-disputes';
const m = pageMetadata[path];
export const metadata = {
  title: m.title,
  description: m.description,
};

export default function RouteLayout({ children }) {
  return children;
}
