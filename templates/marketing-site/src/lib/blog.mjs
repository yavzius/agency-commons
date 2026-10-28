// Drafts and future posts must never enter a production route, index or sitemap.
export function isPublished(post, now = new Date()) {
  const date = new Date(post.data.publishedAt);
  return post.data.draft === false && Number.isFinite(date.getTime()) && date <= now;
}

export function visiblePosts(posts, { preview = false, now = new Date() } = {}) {
  return posts.filter(post => preview || isPublished(post, now))
    .sort((a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt));
}

export const postPath = post => `/blog/${encodeURIComponent(post.id)}/`;
export const escapeXML = text => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
