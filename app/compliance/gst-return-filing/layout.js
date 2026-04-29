import { pageMetadata } from '../../../lib/page-metadata';

const path = '/compliance/gst-return-filing';
const m = pageMetadata[path];
export const metadata = {
  title: m.title,
  description: m.description,
};

export default function RouteLayout({ children }) {
  return children;
}
