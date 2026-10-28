import test from 'node:test';
import assert from 'node:assert/strict';
import { visiblePosts } from '../src/lib/blog.ts';

const now = new Date('2026-10-28T12:00:00Z');
const posts = [
  { id: 'published', data: { draft: false, publishedAt: '2026-10-01' } },
  { id: 'draft', data: { draft: true, publishedAt: '2026-10-01' } },
  { id: 'future', data: { draft: false, publishedAt: '2027-01-01' } },
  { id: 'missing-approval', data: { publishedAt: '2026-10-01' } },
  { id: 'invalid-date', data: { draft: false, publishedAt: 'unknown' } },
];

test('production exposes only explicitly published posts whose date has arrived', () => {
  assert.deepEqual(visiblePosts(posts, { now }).map(post => post.id), ['published']);
});

test('local preview permits inspecting drafts without changing their publication state', () => {
  const valid = posts.slice(0, 3);
  assert.equal(visiblePosts(valid, { preview: true, now }).length, 3);
  assert.equal(valid[1].data.draft, true);
  assert.deepEqual(visiblePosts(valid, { now }).map(post => post.id), ['published']);
});
