import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
META = os.path.join(ROOT, "lib", "page-metadata.js")

text = open(META, encoding="utf-8").read()
paths = []
for line in text.splitlines():
    m = re.match(r"\s*'(/[^']+)'\s*:", line)
    if m:
        paths.append(m.group(1))

for p in paths:
    segs = [x for x in p.strip("/").split("/") if x]
    depth = len(segs)
    imp = "../" * (depth + 1) + "lib/page-metadata"
    rel = os.path.join(ROOT, "app", *segs, "layout.js")
    os.makedirs(os.path.dirname(rel), exist_ok=True)
    body = f"""import {{ pageMetadata }} from '{imp}';

const path = '{p}';
const m = pageMetadata[path];
export const metadata = {{
  title: m.title,
  description: m.description,
}};

export default function RouteLayout({{ children }}) {{
  return children;
}}
"""
    open(rel, "w", encoding="utf-8").write(body)
    print("wrote", os.path.relpath(rel, ROOT))

print("count", len(paths))
