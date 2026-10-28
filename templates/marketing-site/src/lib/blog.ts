interface PostMeta {
  id: string;
  data: { draft?: boolean; publishedAt: Date | string };
}
interface VisibilityOptions { preview?: boolean; now?: Date; }

// Drafts and future posts must never enter a production route, index or sitemap.
export function isPublished(post: PostMeta, now = new Date()) {
  const date = new Date(post.data.publishedAt);
  return post.data.draft === false && Number.isFinite(date.getTime()) && date <= now;
}

export function visiblePosts<T extends PostMeta>(posts: T[], { preview = false, now = new Date() }: VisibilityOptions = {}): T[] {
  return posts.filter(post => preview || isPublished(post, now))
    .sort((a, b) => new Date(b.data.publishedAt).getTime() - new Date(a.data.publishedAt).getTime());
}

export const postPath = (post: Pick<PostMeta, 'id'>) => `/blog/${encodeURIComponent(post.id)}/`;
export const escapeXML = (text: string) => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
