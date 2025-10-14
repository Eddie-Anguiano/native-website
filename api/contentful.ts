// lib/contentful.ts
const BASE = "https://cdn.contentful.com";

type FetchOptions = {
  searchParams?: Record<string, string | number | boolean | undefined>;
  signal?: AbortSignal;
};

function toQuery(params?: FetchOptions["searchParams"]) {
  if (!params) return "";
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) q.set(k, String(v));
  }
  const qs = q.toString();
  return qs ? `?${qs}` : "";
}

export async function cfGet<T = any>(
  path: string,
  opts: FetchOptions = {}
): Promise<T> {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const env = process.env.CONTENTFUL_ENVIRONMENT || "master";
  const token = process.env.CONTENTFUL_CDA_TOKEN!;
  const url = `${BASE}/spaces/${space}/environments/${env}${path}${toQuery(opts.searchParams)}`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: {
      revalidate: 60 // Revalidate content every 60 seconds
    }
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Contentful error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// very small helper to resolve Asset links from includes
export type Sys = { id: string };
export type Asset = { sys: Sys; fields: { title?: string; file?: { url: string } } };
export type Entry = { sys: Sys; fields: Record<string, any> };

export function resolveIncludes(
  items: Entry[],
  includes?: { Asset?: Asset[]; Entry?: Entry[] }
) {
  const assetMap = new Map<string, Asset>();
  includes?.Asset?.forEach((a) => assetMap.set(a.sys.id, a));

  return items.map((item) => {
    const out: any = { ...item, fields: { ...item.fields } };
    for (const [key, val] of Object.entries(item.fields)) {
      const link = (v: any) =>
        v?.sys?.type === "Link" && v?.sys?.linkType === "Asset"
          ? assetMap.get(v.sys.id) ?? v
          : v;

      out.fields[key] = Array.isArray(val) ? val.map(link) : link(val);
    }
    return out;
  });
}
